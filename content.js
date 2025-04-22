
setInterval(() => {
  const errors = document.querySelectorAll(".error-message, .sapMMessageToast");
  errors.forEach(el => {
    const msg = el.innerText;
    if (msg && !el.classList.contains("ai-fixed")) {
      el.classList.add("ai-fixed");
      el.style.border = "2px solid red";
      
      const btn = document.createElement("button");
      btn.textContent = "Fix This Error";
      btn.style.marginLeft = "10px";
      btn.onclick = () => {
        chrome.runtime.sendMessage({ type: "FIX_ERROR", message: msg });
      };
      el.appendChild(btn);
    }
  });
}, 3000);
