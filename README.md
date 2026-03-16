# AI-Real-Estate-Assistant-with-Voice-Lead-Automation-n8n-LLMs-Telegram

AI Real Estate Assistant (n8n + LLM + Telegram)

An AI-powered real estate assistant that allows users to search for properties using Telegram via text or voice messages. The system uses an LLM-powered agent to understand user requests, retrieve property listings from Google Sheets, and automatically capture leads for real estate consultants.

---

Features

- 🤖 AI conversational agent powered by LLM
- 🎙 Voice and text interaction via Telegram
- 🏠 Property retrieval from Google Sheets database
- 🧠 Conversation memory (last 15 interactions)
- 📱 Automatic phone number validation
- 📊 Lead capture and storage in Google Sheets
- 📧 Email notifications to property consultants
- 🔁 Fully automated workflow using n8n

---

Workflow

1. User sends text or voice message in Telegram
2. Voice message is transcribed to text using Whisper
3. AI Agent processes the request
4. Property data is retrieved from Google Sheets
5. User selects a property from the list
6. Bot asks for phone number to schedule consultation
7. Lead details are stored in Google Sheets
8. Email notification is sent to the property consultant

---

Tech Stack

- n8n – workflow automation
- LLM Agents – AI conversation logic
- Telegram Bot API – user interaction
- Groq / Whisper – voice transcription
- Google Sheets – property database & lead storage
- JavaScript – data processing inside workflows
- Prompt Engineering – AI behavior control

---

Architecture Overview

Telegram User
↓
Telegram Bot
↓
n8n Workflow
↓
Voice → Text (Whisper)
↓
LLM AI Agent
↓
Google Sheets (Property Data)
↓
Lead Capture + Email Notification

---

Screenshots
## Screenshots

### n8n Workflow
![Workflow](workflow%20screenshots/Screenshot%202026-03-16%20034021.png)

### Telegram Bot Conversation
![Bot Chat](workflow%20screenshots/bot%20conversation.jpeg)
### Telegram Bot Conversation text
![Bot Chat](workflow%20screenshots/bot%20conversation2.jpeg)

### Client Details Stored
![Client Details](workflow%20screenshots/client_Details.jpeg)

### Property Database (Google Sheets)
![Google Sheets](workflow%20screenshots/google%20sheet%20property_Details.jpeg)

### Email Notification
![Email](workflow%20screenshots/mail%20.jpeg)


---

Setup Instructions

1. Import the workflow JSON into n8n
2. Configure the following credentials:
   - Telegram Bot API
   - Groq API (for Whisper & LLM)
   - Google Sheets OAuth
   - Gmail OAuth
3. Add your Google Sheet containing property listings
4. Start the workflow
5. Interact with the bot via Telegram

---

Author

P Nagaraj
B.Tech Student | Software Engineer (Fresher)
Interested in AI Automation and MERN Stack.
