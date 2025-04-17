import { useState } from "react";
import { database } from "../firebaseconfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function WaitlistPopup({ showModal, setShowModal }) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [referral, setReferral] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!firstName || !email || !referral) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);
      await addDoc(collection(database, "waitlist"), {
        firstName,
        email,
        referral,
        timestamp: serverTimestamp(),
      });
      setSuccess(true);
      setFirstName("");
      setEmail("");
      setReferral("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error("Error adding to waitlist: ", err);
    } finally {
      setLoading(false);
    }
  };

  if (!showModal) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-md w-full relative animate-fadeIn">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={() => {
            setShowModal(false);
          }}
        >
          ✕
        </button>
        <h3 className="text-2xl font-bold text-fuchsia-900 mb-4 text-center">
          Join the Waitlist
        </h3>
        <p className="text-sm text-gray-600 mb-6 text-left leading-relaxed">
          To ensure a high-quality experience, access to Cortexa is limited.
          <div className="h-4" />
          Pilot trial members are welcomed on a rolling basis, with an average
          wait time of around one to two weeks.
        </p>

        {success ? (
          <div className="text-green-600 font-semibold text-center py-6">
            🎉 Thank you! You’ve been added to the waitlist.
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-200"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <select
              className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-200"
              value={referral}
              onChange={(e) => setReferral(e.target.value)}
            >
              <option value="">How did you hear about us?</option>
              <option value="instagram">Instagram or LinkedIn</option>
              <option value="friend">From a Friend</option>
              <option value="event">Event or Workshop</option>
              <option value="other">Enactus</option>
            </select>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-400 transition"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
