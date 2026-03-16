let data = $json.output || $json;

// If output is a string
if (typeof data === "string") {

  const start = data.indexOf("{");
  const end = data.lastIndexOf("}");

  if (start !== -1 && end !== -1) {
    const jsonString = data.substring(start, end + 1);
    try {
      data = JSON.parse(jsonString);
    } catch (err) {
      data = {
        properties: [],
        message: data
      };
    }
  } else {
    data = {
      properties: [],
      message: data
    };
  }
}

// If AI agent wrapped response inside another output object
if (data.output) {
  data = data.output;
}

// Ensure structure always exists
if (!data.properties) {
  data.properties = [];
}

if (!data.message) {
  data.message = "";
}

return [
  {
    json: data
  }
];
