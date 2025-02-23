const button = document.getElementById('btn');
const butt = document.getElementById('open');
const voicebtn = document.getElementById("voicebtn");
let page;
let isRecognizing = false;

const data = [
    { "url": "https://discord.com", "command": "open discord" },
    { "url": "https://openai.com/index/chatgpt/", "command": "open chat gpt" },
    { "url": "https://www.google.com", "command": "open google" },
    { "url": "https://www.youtube.com", "command": "open youtube" },
    { "url": "https://www.facebook.com", "command": "open facebook" },
    { "url": "https://www.twitter.com", "command": "open twitter" },
    { "url": "https://www.instagram.com", "command": "open instagram" },
    { "url": "https://web.whatsapp.com", "command": "open whatsapp" },
    { "url": "https://www.linkedin.com", "command": "open linkedin" },
    { "url": "https://github.com", "command": "open github" },
    { "url": "https://stackoverflow.com", "command": "open stackoverflow" },
    { "url": "https://www.reddit.com", "command": "open reddit" },
    { "url": "https://www.netflix.com", "command": "open netflix" },
    { "url": "https://www.amazon.com", "command": "open amazon" },
    { "url": "https://www.spotify.com", "command": "open spotify" },
    { "url": "https://www.twitch.tv", "command": "open twitch" },
    { "url": "https://www.paypal.com", "command": "open paypal" },
    { "url": "https://www.microsoft.com", "command": "open microsoft" },
    { "url": "https://developer.mozilla.org", "command": "open mdn" },
    { "url": "https://www.apple.com", "command": "open apple" },
    { "url": "https://openai.com", "command": "open openai" },
    { "url": "https://www.wikipedia.org", "command": "open wikipedia" },
    { "url": "https://www.nytimes.com", "command": "open new york times" },
    { "url": "https://www.bbc.com", "command": "open bbc" },
    { "url": "https://www.cnn.com", "command": "open cnn" },
    { "url": "https://www.aljazeera.com", "command": "open al jazeera" },
    { "url": "https://www.bing.com", "command": "open bing" },
    { "url": "https://translate.google.com", "command": "open google translate" },
    { "url": "https://www.dropbox.com", "command": "open dropbox" },
    { "url": "https://www.trello.com", "command": "open trello" },
    { "url": "https://www.figma.com", "command": "open figma" },
    { "url": "https://www.canva.com", "command": "open canva" },
    { "url": "https://www.airbnb.com", "command": "open airbnb" },
    { "url": "https://www.expedia.com", "command": "open expedia" },
    { "url": "https://www.udemy.com", "command": "open udemy" },
    { "url": "https://www.coursera.org", "command": "open coursera" },
    { "url": "https://www.khanacademy.org", "command": "open khan academy" },
    { "url": "https://www.ted.com", "command": "open ted talks" },
    { "url": "https://www.nationalgeographic.com", "command": "open national geographic" },
    { "url": "https://www.medium.com", "command": "open medium" },
    { "url": "https://www.producthunt.com", "command": "open product hunt" },
    { "url": "https://www.behance.net", "command": "open behance" },
    { "url": "https://www.dribbble.com", "command": "open dribbble" },
    { "url": "https://www.pinterest.com", "command": "open pinterest" },
    { "url": "https://www.ebay.com", "command": "open ebay" },
    { "url": "https://www.flipkart.com", "command": "open flipkart" },
    { "url": "https://www.nike.com", "command": "open nike" },
    { "url": "https://www.adidas.com", "command": "open adidas" },
    { "url": "https://www.weather.com", "command": "open weather" },
    { "url": "https://www.speedtest.net", "command": "open speed test" },
    { "url": "http://127.0.0.1:5500/Voice-Launch/index.html", "command": "open your self" }
];

alert("🚀 Please click the 🎙️ mic icon to search for any site, or type manually and hit the ➕ button to open it in a new tab. {EX: open google} Thank you! 😊")
const style = document.createElement('style');

function applyStyles() {

    if(true){
        style.innerHTML = `
        @keyframes circle-size {
            from {
                width: 250px;
                height: 250px;
            }
            to {
                width: 300px;
                height: 300px;
            }
        }
        @keyframes shadow-rotate {
            from {
                transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
                transform: translate(-50%, -50%) rotate(360deg);
            }
        }
        .mic.active {
            animation: pulse 1s infinite;
        }
    `;
    document.head.appendChild(style);
        style.style.animation = 'none';

    }
    style.style.animation = 'none';
    
}

function handleRecognitionResult(event) {
    const transcript = event.results[0][0].transcript.toLowerCase();
    document.getElementById("speech").value = transcript;

    const speech = new SpeechSynthesisUtterance(`Command Confirm  ${transcript}`);
    speech.lang = "en-US";
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);

    page = data.find(val => val.command === transcript)?.url;

    if (!page) {
        document.getElementById('tone').play();
        alert("Command not recognized");
    } else {
        window.open(page, "_blank");
        console.log(transcript);
    }
}

function startRecognition() {
    if (isRecognizing) {
        console.warn("Speech Recognition is already running.");
        return;
    }

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-UK";

    recognition.onstart = () => isRecognizing = true;
    recognition.onend = () => isRecognizing = false;
    recognition.onresult = handleRecognitionResult;

    recognition.start();
}

function handleButtonClick() {
    const tone = document.getElementById('tone');
    const transcript = document.getElementById("speech").value.toLowerCase();
    page = data.find(val => val.command === transcript)?.url;

    if (!page) {
        tone.play();
        alert("Command not recognized");
    } else {
        window.open(page, "_blank");
        console.log(transcript);
    }
}

voicebtn.addEventListener("click", () => {
    applyStyles();
    startRecognition();
});

butt.addEventListener('click', handleButtonClick);
