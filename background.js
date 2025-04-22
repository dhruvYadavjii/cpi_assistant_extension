
chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.type === "FIX_ERROR") {
    chrome.storage.local.get(["errorHistory"], data => {
      const updated = data.errorHistory || [];
      updated.push(req.message);
      chrome.storage.local.set({ errorHistory: updated });
    });

    fetch("https://your-backend-url.onrender.com/gpt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: req.message })
    })
      .then(res => res.json())
      .then(data => {
        chrome.storage.local.set({ lastSuggestion: { error: req.message, suggestion: data.reply } });
      });
  }
});
