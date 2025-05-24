const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check local storage for theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.classList.add(savedTheme);
}

// Toggle theme and store preference
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const currentTheme = body.classList.contains("dark-mode") ? "dark-mode" : "light-mode";
    localStorage.setItem("theme", currentTheme);
});

const chatbotResponses = {
    "hello": "Hi there! How can I assist you?",
    "what is your name": "I'm an AI chatbot built for your portfolio!",
    "how do I contact you": "You can use the contact form on the website.",
    "default": "I'm not sure about that. Try asking a different question!"
};

document.getElementById("chat-submit").addEventListener("click", () => {
    const userMessage = document.getElementById("chat-input").value.toLowerCase();
    const response = chatbotResponses[userMessage] || chatbotResponses["default"];
    document.getElementById("chat-response").innerText = response;
});
