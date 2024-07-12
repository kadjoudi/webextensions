document.getElementById("sendMessageButton").addEventListener("click", () => {
  chrome.runtime.sendMessage({ message: "button_clicked" });
});

