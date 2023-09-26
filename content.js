chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.enableConversion) {
    console.log("test");
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    for (const input of passwordInputs) {
      input.type = "text";
    }
  }
});
