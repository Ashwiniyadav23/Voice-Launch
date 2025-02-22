const button = document.getElementById('btn');
// const Input = "open discord";
let page;

const data = [
    { "url": "https://discord.com", "command": "open discord" },
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
    { "url": "https://www.speedtest.net", "command": "open speed test" }
];

const voicebtn = document.getElementById("voicebtn")
voicebtn.addEventListener("click", function () {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-UK";
    recognition.onresult = function (event) {
        const transcript = event.results[0][0].transcript.toLowerCase();
        document.getElementById("speech").value = transcript;

        let speech = new SpeechSynthesisUtterance(`Command Confirm opening ${transcript}`);
        speech.lang = "en-US";
        speech.rate = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);

            const Input = transcript;
            for (let val of data) {
                if (val.command == Input) {
                    page = val.url
                    break;
                }
            }
            // window.location.href = page
            window.open(page, "_blank");
    


        console.log(transcript);
    };

    recognition.start();
});





