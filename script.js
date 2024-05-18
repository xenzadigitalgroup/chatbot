function addMessage(content, type) {
    const messageContainer = document.querySelector('.message-container');
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = content;
    messageContainer.prepend(messageDiv);

    // Scroll to the bottom of the message container
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

function sendAuto() {
    addMessage('I miss you so much~', 'user');
    addMessage('I miss you too, tetapi saya hanyalah sebuah AI yang di rancang oleh manusia, jika kamu merindukan seseorang silahkan katakan kepadanya :)', 'bot');
}

function sendMessage() {
    const userInput = document.getElementById('userMessage');

    if (userInput.value.trim() !== '') {
        addMessage(userInput.value, 'user');

        // Bot response logic manua input user
        const userMessage = userInput.value.toLowerCase();
        if (userMessage === 'selamat pagi') {
            addMessage('Selamat pagi juga', 'bot');

        } else if (userMessage === 'selamat malam') {
            addMessage('Selamat malam juga', 'bot');

        } else if (userMessage === 'selamat siang') {
            addMessage('Selamat siang juga', 'bot');

        } else if (userMessage === 'apa kabar?') {
            addMessage('Saya sehat', 'bot');

        } else if (userMessage === 'apa yang bisa kamu lakukan?') {
            addMessage('Saya bisa menemani kamu bercerita, dan menjawab pertanyaan kamu, tetapi saat ini saya hanya bisa menjawab beberapa pertanyaan saja.', 'bot');
        } else if (userMessage === 'apa yang bisa kamu lakukan') {
            addMessage('Saya bisa menemani kamu bercerita, dan menjawab pertanyaan kamu, tetapi saat ini saya hanya bisa menjawab beberapa pertanyaan saja.', 'bot');

        // Bot response logic manua input user APIkey
        } else if (userMessage.includes('cuaca') || userMessage.includes('suhu')) {
            // Get user's location using browser geolocation
            navigator.geolocation.getCurrentPosition(position => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const location = `(${latitude}, ${longitude})`; // This is just a placeholder, you can use reverse geocoding to get the actual location
                const weather = 'Cerah'; // This is just a placeholder, you can replace it with actual weather data from a static source or hardcoded values based on location
                const temperature = '25'; // This is just a placeholder, you can replace it with actual temperature data from a static source or hardcoded values based on location
                addMessage(`Cuaca saat ini di ${location} adalah ${weather} dengan suhu ${temperature}°C`, 'bot');
            }, error => {
                console.error('Error getting user location:', error);
                addMessage('Maaf, tidak bisa mendapatkan lokasi pengguna.', 'bot');
            });
        } else {
            addMessage('I don\'t understand that message.', 'bot');
        }

        userInput.value = '';
    }
}
