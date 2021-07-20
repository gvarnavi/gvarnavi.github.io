// Select the embed iframe.
const iframe = document.querySelector("#embed");

function onMessage(message) {
  if (message.source !== iframe.contentWindow) return;
  let {data} = message;

  // If message isn’t valid JSON, it must not be our resize event.
  if (typeof data === "string") {
    try {
      data = JSON.parse(data);
    } catch (ignore) {
      return;
    }
  }

  // Make sure it’s the resize event.
  if (data.context !== "iframe.resize") return;

  // Set the iframe’s height!
  iframe.style.height = `${data.height}px`;
}

// Attach our listener for the message from the iframe
addEventListener("message", onMessage);
