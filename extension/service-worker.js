chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Service Worker received message:', request);
  if (request.message === "button_clicked") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      console.log('Sending message to tab:', tabs[0].id);
      chrome.tabs.sendMessage(tabs[0].id, { message: "Hello from the extension via Service Worker!" });
    });
  }
});

