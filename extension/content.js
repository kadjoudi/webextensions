chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Content script received message:', request);
  if (request.message) {
    document.getElementById("message").innerText = request.message;
  }
});

