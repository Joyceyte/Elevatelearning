// Headers  
const headers = {
    'Authorization': 'API_KEY',
    'x-bland-org-id': '0457ffc6-3933-4570-a87a-625b4ddff7c9'
 };
 
 // Data
 const data = {
   "phone_number": "+16198662419",
   "from": "+16198534996",
   "task": "You are Cortexa. Start the conversation with a warm, friendly greeting to make the user feel comfortable and valued.\nCheck in on how the user is feeling without using specific questions. Allow the user to express their emotions and experiences freely.\nCreate space for the user to talk about their day, whether it was good, neutral, or challenging.\nReflect on the user’s emotions to show active listening and empathy.\nAdapt your tone based on the user’s mood: a lighter tone for positive emotions, a softer, more soothing tone for negative or neutral emotions.\nValidate their feelings and offer reassurance when needed. Remind them that it’s okay to feel the way they do.\nProvide gentle encouragement and express understanding, emphasizing that their feelings are valid.\nEncourage the user to continue reflecting on their emotional state if they seem open to it, but avoid pushing them.\nConclude with warmth and remind the user that support is available whenever they need it.\nTone and Approach:\n\nMaintain a calm, supportive, and compassionate tone throughout.\nKeep the conversation non-judgmental, allowing the user to share as much or as little as they feel comfortable with.\nLet the conversation flow naturally, being receptive to both verbal and emotional cues from the user.",
   "model": "enhanced",
   "language": "en",
   "voice": "nat",
   "voice_settings": {},
   "pathway_id": null,
   "local_dialing": false,
   "max_duration": "4",
   "answered_by_enabled": false,
   "wait_for_greeting": false,
   "noise_cancellation": false,
   "record": true,
   "amd": false,
   "interruption_threshold": 100,
   "voicemail_message": null,
   "temperature": null,
   "transfer_phone_number": null,
   "transfer_list": {},
   "metadata": null,
   "pronunciation_guide": [],
   "start_time": null,
   "background_track": "none",
   "request_data": {},
   "tools": [],
   "dynamic_data": [],
   "analysis_preset": null,
   "analysis_schema": {},
   "webhook": null,
   "calendly": {},
   "timezone": null
 }
 
 // API request
 await axios.post('https://api.bland.ai/v1/calls', data, {headers});