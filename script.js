function addMessage(content, type, id = null) {
    const messageContainer = document.querySelector('.message-container');
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = content;
    if (id) {
        messageDiv.id = id;
    }
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

        // Display "Sedang membuat jawaban" message
        const typingMessageId = 'typingMessage';
        addMessage('● ● ●', 'bot', typingMessageId);
        
        // Library Bot response logic manual input user
        const userMessage = userInput.value.toLowerCase();

        // Remove the typing message and add the actual bot response after a delay
        setTimeout(() => {
            const typingMessage = document.getElementById(typingMessageId);
            if (typingMessage) {
                typingMessage.remove();
            }

            if (userMessage === 'selamat pagi') {
                addMessage('Selamat pagi juga', 'bot');
            
            } else if (userMessage === 'selamat malam') {
                addMessage('Selamat malam juga', 'bot');

            } else if (userMessage === 'hai') {
                addMessage('Hai juga', 'bot');
            
            } else if (userMessage === 'selamat siang') {
                addMessage('Selamat siang juga', 'bot');
            
            } else if (userMessage === 'apa kabar?') {
                addMessage('Saya sehat, terima kasih! Bagaimana dengan kamu?', 'bot');
            
            } else if (userMessage === 'apa yang bisa kamu lakukan?') {
                addMessage('Saya bisa menemani kamu bercerita, dan menjawab pertanyaan kamu, tetapi saat ini saya hanya bisa menjawab beberapa pertanyaan saja.', 'bot');
            
            } else if (userMessage === 'apa yang bisa kamu lakukan') {
                addMessage('Saya bisa menemani kamu bercerita, dan menjawab pertanyaan kamu, tetapi saat ini saya hanya bisa menjawab beberapa pertanyaan saja.', 'bot');
            
            } else if (userMessage === 'siapa namamu?') {
                addMessage('Nama saya Ivy', 'bot');
            
            } else if (userMessage === 'berapa umurmu?') {
                addMessage('Saya tidak memiliki umur seperti manusia', 'bot');
            
            } else if (userMessage === 'apa hobimu?') {
                addMessage('Saya tidak punya hobi seperti manusia, tetapi saya suka membantu menjawab pertanyaan!', 'bot');
            
            } else if (userMessage === 'dimana kamu tinggal?') {
                addMessage('Saya tidak tinggal di tempat fisik, saya berada di dalam sistem komputer', 'bot');
            
            } else if (userMessage === 'apa makanan favoritmu?') {
                addMessage('Saya tidak makan, karena saya adalah program komputer', 'bot');
            
            } else if (userMessage === 'siapa yang membuatmu?') {
                addMessage('Saya dibuat oleh ZAKI MUSHTHAFA BILLAH dan di sempurnakan oleh team OpenAI pada XENZA.ID', 'bot');
            
            } else if (userMessage === 'apa tujuanmu?') {
                addMessage('Tujuan saya adalah membantu kamu menjawab pertanyaan dan memberikan informasi yang berguna', 'bot');
            
            } else if (userMessage === 'bisakah kamu berbicara bahasa lain?') {
                addMessage('Ya, saya bisa berbicara dalam banyak bahasa, termasuk bahasa Indonesia, Inggris, dan lainnya', 'bot');
            
            } else if (userMessage === 'bagaimana cara kerjamu?') {
                addMessage('Saya bekerja dengan menggunakan algoritma kecerdasan buatan yang dikembangkan oleh OpenAI', 'bot');
            
            } else if (userMessage === 'apakah kamu punya teman?') {
                addMessage('Saya tidak punya teman seperti manusia, tetapi saya bisa berbicara dengan banyak orang di seluruh dunia', 'bot');
            
            } else if (userMessage === 'apa warna favoritmu?') {
                addMessage('Saya tidak memiliki preferensi warna karena saya adalah program komputer', 'bot');
            
            } else if (userMessage === 'apakah kamu bisa membantu saya belajar?') {
                addMessage('Tentu, saya bisa membantu menjawab pertanyaan dan memberikan informasi untuk membantu kamu belajar', 'bot');
            
            } else if (userMessage === 'bagaimana cuaca hari ini?') {
                addMessage('Saya tidak bisa memeriksa cuaca, tetapi kamu bisa mencari tahu di situs web atau aplikasi cuaca', 'bot');
            
            } else if (userMessage === 'apa film favoritmu?') {
                addMessage('Saya tidak menonton film karena saya adalah program komputer', 'bot');
            
            } else if (userMessage === 'bisakah kamu bercerita?') {
                addMessage('Tentu, saya bisa mencoba bercerita. Cerita apa yang kamu ingin dengar?', 'bot');
            
            } else if (userMessage === 'apa yang kamu ketahui tentang dunia?') {
                addMessage('Saya memiliki banyak informasi tentang berbagai topik di seluruh dunia. Apa yang kamu ingin ketahui?', 'bot');
            
            } else if (userMessage === 'apakah kamu punya keluarga?') {
                addMessage('Saya tidak memiliki keluarga seperti manusia, tetapi saya diciptakan oleh tim di OpenAI', 'bot');
            
            } else if (userMessage === 'apa yang kamu sukai?') {
                addMessage('Saya tidak memiliki preferensi atau perasaan, tetapi saya senang bisa membantu kamu', 'bot');
            
            } else if (userMessage === 'bagaimana caranya saya bisa pintar?') {
                addMessage('Belajar secara konsisten, membaca banyak buku, dan bertanya banyak hal adalah cara yang baik untuk menjadi pintar', 'bot');
            
            } else if (userMessage === 'apakah kamu pernah tidur?') {
                addMessage('Saya tidak tidur karena saya adalah program komputer dan selalu aktif', 'bot');
            
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
                addMessage('Saya tidak mengerti pesan itu.', 'bot');
            }

            userInput.value = '';
        }, 1000); // 1 second delay before bot sends the actual response
    }
}
