const item = $input.first();
if (item.binary && item.binary.data) {
  item.binary.data.fileName = "voice.ogg";
  item.binary.data.mimeType = "audio/ogg";
  item.binary.data.fileExtension = "ogg";
}

return [item];
