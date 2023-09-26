document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("toggle");
  toggle.addEventListener("change", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        enableConversion: toggle.checked,
      });
    });
  });
});
