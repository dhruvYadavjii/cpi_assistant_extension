
chrome.storage.local.get(["lastSuggestion"], data => {
  const el = document.getElementById("output");
  if (data.lastSuggestion) {
    el.innerHTML = `
      <b>Error:</b> ${data.lastSuggestion.error}<br/>
      <b>Suggestion:</b> ${data.lastSuggestion.suggestion}
      <br/><br/>
      <button id="copyBtn">Copy Snippet</button>
    `;

    document.getElementById("copyBtn").onclick = () => {
      navigator.clipboard.writeText("// Fix for: " + data.lastSuggestion.error + "\n" + data.lastSuggestion.suggestion);
    };
  }
});
