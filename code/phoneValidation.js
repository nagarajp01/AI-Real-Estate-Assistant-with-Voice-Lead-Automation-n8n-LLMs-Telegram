// Get text from Telegram OR voice transcription
// const userMessage =
//   $json.text || $('Telegram Trigger').first().json.message?.text || "";
// Get text from Telegram OR voice transcription
let userMessage = "";

try {
  userMessage = $("HTTP Request").first().json.text;
} catch (e) {
  userMessage = $("Telegram Trigger").first().json.message?.text || "";
}

// Remove spaces
const cleanedMessage = userMessage.trim();

// Phone validation
const validPhone = /^[6-9]\d{9}$/.test(cleanedMessage);
const shortMessage = cleanedMessage.length <= 10;

// Keep previous AI data
const data = $json;

data.isPhoneValid = validPhone && shortMessage;
data.phone = cleanedMessage;

return [
  {
    json: data
  }
];
