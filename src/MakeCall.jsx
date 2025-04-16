import { doc, setDoc } from "firebase/firestore";
import { database } from "./firebaseconfig";
import { useState } from "react";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

function MakeCallComponent() {
  const [callId, setCallId] = useState(null);
  const [isCallInProgress, setIsCallInProgress] = useState(false);
  //object for storing data
  const makeAPICall = async () => {
    const options = {
      method: "POST",
      headers: {
        authorization:
          "org_6afac450607e7920a0271d75526833014abe0bbec013f502be03a50c86f142a26db26baec0f665d7414369",
        "Content-Type": "application/json",
      },
      body: '{"phone_number":"+16198662419","task":"you are calling to see how my day is ", "voice":"maya", "interruption_threshold":150, "max_duration":4}',
    };
    try {
      const response = await fetch("https://api.bland.ai/v1/calls", options);
      const data = await response.json();

      if (data && data.call_id) {
        setCallId(data.call_id);
        setIsCallInProgress(true);
        console.log("Call initiated. Call ID:", data.call_id);
        await checkCallStatus(data.call_id);
      }
    } catch (err) {
      console.log("error initiation call:", err);
    }
  };

  const checkCallStatus = async (callId) => {
    const options = {
      method: "GET",
      headers: {
        authorization:
          "org_6afac450607e7920a0271d75526833014abe0bbec013f502be03a50c86f142a26db26baec0f665d7414369",
        "Content-Type": "application/json",
      },
    };
    let callCompleted = false;
    while (!callCompleted) {
      try {
        const response = await fetch(
          `https://api.bland.ai/v1/calls/${callId}`,
          options
        );
        const data = await response.json();

        if (data.completed) {
          callCompleted = true;
          await handleCallData(data);
        } else {
          console.log("Call still in progress...");
        }
      } catch (err) {
        console.error("Error checking call status:", err);
      }

      await new Promise((resolve) => setTimeout(resolve, 10000));
    } // <-- This is the missing closing bracket for the checkCallStatus function
  }; // <-- End of checkCallStatus function

  const handleCallData = async (data) => {
    const {
      transcripts,
      recording_url = "No recording available",
      created_at,
      call_id,
    } = data;

    // Process transcripts
    const transcript_text = transcripts.length
      ? transcripts.map((item) => `${item.user}:${item.text}`).join(" ")
      : "No transcript available";

    // Analyze transcript with GPT
    let analysis = "No analysis available";
    try {
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "You are an assistant that analyzes conversation transcripts. Provide a brief, professional summary of the key points discussed.",
          },
          {
            role: "user",
            content: `Please analyze this conversation transcript and provide a concise summary: ${transcript_text}`,
          },
        ],
        model: "gpt-3.5-turbo",
        temperature: 0.7,
      });

      analysis = completion.choices[0].message.content;
    } catch (err) {
      console.error("Error analyzing transcript with GPT:", err);
    }

    const callDetails = {
      recording_url,
      transcript: transcript_text,
      date: created_at,
      analysis, // Add the GPT analysis to the stored data
    };

    // Save call object to Firestore
    try {
      await setDoc(doc(database, "call_logs", call_id), callDetails);
      console.log("Call data successfully uploaded to Firestore");
    } catch (err) {
      console.error("Error fetching or saving call data:", err);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={makeAPICall}
        >
          Receive call from Cortexa
        </button>
      </div>
    </>
  );
}

export default MakeCallComponent;
