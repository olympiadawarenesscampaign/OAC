/* ===========================
   OAC — JavaScript Interactivity
   =========================== */

document.addEventListener("DOMContentLoaded", () => {
  // ===============================
  // Hamburger & Overlay Menu Toggle
  // ===============================
  const hamburger = document.querySelector(".hamburger");
  const overlay = document.querySelector(".overlay");
  const overlayClose = document.querySelector(".overlay .close");

  if (hamburger && overlay) {
    hamburger.addEventListener("click", () => {
      overlay.classList.toggle("open");
    });

    overlayClose.addEventListener("click", () => {
      overlay.classList.remove("open");
    });

    // Close overlay when clicking outside panel
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.classList.remove("open");
    });
  }

  // ===============================
  // FAQ Accordion
  // ===============================
  const faqButtons = document.querySelectorAll(".faq button.qbtn");

  faqButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const ans = btn.nextElementSibling;
      const isOpen = ans.style.display === "block";
      ans.style.display = isOpen ? "none" : "block";
      btn.classList.toggle("open", !isOpen);
    });
  });

  // ===============================
  // Ask AI Button (Inline & Floating)
  // ===============================
  const askButtons = document.querySelectorAll(".ask-ai");

  askButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      openAIChat();
    });
  });

  function openAIChat() {
    // Placeholder: you can replace this with real AI interaction
    let chatWindow = document.querySelector("#ai-chat-window");

    if (!chatWindow) {
      chatWindow = document.createElement("div");
      chatWindow.id = "ai-chat-window";
      chatWindow.style.position = "fixed";
      chatWindow.style.bottom = "80px";
      chatWindow.style.right = "20px";
      chatWindow.style.width = "300px";
      chatWindow.style.maxHeight = "400px";
      chatWindow.style.background = "white";
      chatWindow.style.borderRadius = "12px";
      chatWindow.style.boxShadow = "0 8px 28px rgba(0,0,0,0.15)";
      chatWindow.style.overflow = "hidden";
      chatWindow.style.display = "flex";
      chatWindow.style.flexDirection = "column";
      chatWindow.style.zIndex = "1000";

      const header = document.createElement("div");
      header.style.padding = "10px";
      header.style.fontWeight = "700";
      header.style.background = "#00b894";
      header.style.color = "white";
      header.textContent = "Ask AI";
      chatWindow.appendChild(header);

      const messages = document.createElement("div");
      messages.style.flex = "1";
      messages.style.padding = "10px";
      messages.style.overflowY = "auto";
      messages.style.fontSize = "14px";
      chatWindow.appendChild(messages);

      const inputContainer = document.createElement("div");
      inputContainer.style.display = "flex";
      inputContainer.style.borderTop = "1px solid #eee";

      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = "Type your question...";
      input.style.flex = "1";
      input.style.border = "none";
      input.style.padding = "8px 10px";
      input.style.fontSize = "14px";
      input.style.outline = "none";
      inputContainer.appendChild(input);

      const sendBtn = document.createElement("button");
      sendBtn.textContent = "Send";
      sendBtn.style.background = "#00b894";
      sendBtn.style.color = "white";
      sendBtn.style.border = "none";
      sendBtn.style.padding = "0 12px";
      sendBtn.style.cursor = "pointer";
      sendBtn.style.fontWeight = "600";
      inputContainer.appendChild(sendBtn);

      chatWindow.appendChild(inputContainer);
      document.body.appendChild(chatWindow);

      // Send message on click
      sendBtn.addEventListener("click", () => {
        sendMessage(input.value, messages);
        input.value = "";
      });

      // Send message on Enter key
      input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          sendMessage(input.value, messages);
          input.value = "";
        }
      });
    } else {
      chatWindow.style.display = "flex"; // show if hidden
    }
  }

  function sendMessage(text, messagesContainer) {
    if (!text.trim()) return;
    const msg = document.createElement("div");
    msg.textContent = "You: " + text;
    msg.style.marginBottom = "8px";
    messagesContainer.appendChild(msg);

    // Fake AI response
    const aiMsg = document.createElement("div");
    aiMsg.textContent = "AI: Thanks for asking! (This is a placeholder)";
    aiMsg.style.marginBottom = "12px";
    aiMsg.style.color = "#555";
    messagesContainer.appendChild(aiMsg);

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // ===============================
  // Optional: Floating Ask AI button injection
  // ===============================
  if (!document.querySelector(".ask-ai-float")) {
    const floatBtn = document.createElement("button");
    floatBtn.className = "ask-ai ask-ai-float";
    floatBtn.textContent = "Ask AI";
    document.body.appendChild(floatBtn);
    floatBtn.addEventListener("click", openAIChat);
  }
});
/* ===========================
   OAC — JavaScript Interactivity
   =========================== */

document.addEventListener("DOMContentLoaded", () => {
  // Hamburger & Overlay Menu Toggle
  const hamburger = document.querySelector(".hamburger");
  const overlay = document.querySelector(".overlay");
  const overlayClose = document.querySelector(".overlay .close");

  if (hamburger && overlay) {
    hamburger.addEventListener("click", () => {
      overlay.classList.toggle("open");
    });

    overlayClose.addEventListener("click", () => {
      overlay.classList.remove("open");
    });

    // Close overlay when clicking outside panel
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.classList.remove("open");
    });
  }

  // FAQ Accordion
  const faqButtons = document.querySelectorAll(".faq button.qbtn");
  faqButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const ans = btn.nextElementSibling;
      const isOpen = ans.style.display === "block";
      ans.style.display = isOpen ? "none" : "block";
      btn.classList.toggle("open", !isOpen);
    });
  });

  // Ask AI button opens ChatGPT pop-up
  const askButtons = document.querySelectorAll(".ask-ai");
  askButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.open(
        'https://chat.openai.com/',
        'ChatGPT',
        'width=800,height=600,resizable=yes,scrollbars=yes,status=yes'
      );
    });
  });

  // Set current year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
