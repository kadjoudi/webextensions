chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message) {
    document.getElementById("message").innerText = request.message;
  }
});

