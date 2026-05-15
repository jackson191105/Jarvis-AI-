const startBtn = document.getElementById("startBtn");
const userText = document.getElementById("userText");
const jarvisText = document.getElementById("jarvisText");

// Speech Recognition
const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "en-US";
recognition.continuous = false;
recognition.interimResults = false;

// Start Listening
startBtn.addEventListener("click", () => {

    jarvisText.innerHTML = "Listening...";

    recognition.start();
});

// Voice Result
recognition.onresult = (event) => {

    const transcript = event.results[0][0].transcript;

    userText.innerHTML = transcript;

    processCommand(transcript.toLowerCase());
};

// Errors
recognition.onerror = (event) => {

    jarvisText.innerHTML = "Error: " + event.error;
};

// Jarvis Brain
function processCommand(command) {

    let response = "Sorry, I did not understand that.";

    // Greetings
    if (command.includes("hello") || command.includes("hi")) {

        response = "Hello Sir, how can I help you today?";
    }

    // Time
    else if (command.includes("time")) {
    }
        


    
