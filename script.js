function addMessage(content, type, id = null) {
    const messageContainer = document.querySelector('.message-container');
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
   
    if (id) {
        messageDiv.id = id;
    }

    if (type === 'bot') {
        messageDiv.textContent = '';
        messageContainer.prepend(messageDiv);
        
        // Scroll to the bottom of the message container
        messageContainer.scrollTop = messageContainer.scrollHeight;
        
        // Typing effect for bot messages
        let index = 0;
        function typeWriter() {
            
            if (index < content.length) {
                messageDiv.textContent += content.charAt(index);
                index++;
                setTimeout(typeWriter, 30); // Adjust typing speed here
            }
        }
        typeWriter();
    
    } else {
        
        messageDiv.textContent = content;
        messageContainer.prepend(messageDiv);
        // Scroll to the bottom of the message container
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }
}

// Basic library pembelajaran gunakan Python
// Input data pada library Pythone
// Tingkat lanjut gunakan ChatGPT sebagai modelan tingkat lanjut
// Letakkan ChatGPT API Key pada Backend
// Gunakan API dari modelan OpenAI 4.0 


function sendAuto1() {
    addMessage('I miss you so much~', 'user');
    setTimeout(() => {
        addMessage('I miss you too, tetapi saya hanyalah sebuah AI yang di rancang oleh manusia, jika kamu merindukan seseorang silahkan katakan kepadanya :)', 'bot');
    }, 500); // Delay before bot message
}

function sendAuto2() {
    addMessage('Siapa kamu?', 'user');
    setTimeout(() => {
        addMessage('Saya adalah Ivy, saya diciptakan oleh ZAKI MUSHTHAFA BILLAH dan dikembangkan oleh team OpenAI XENZA.ID', 'bot');
    }, 500); // Delay before bot message
}

function sendAuto3() {
    addMessage('Versi berapa kamu saat ini?', 'user');
    setTimeout(() => {
        addMessage('Saat ini saya baru saja mencapai model v1.5, dan saya akan terus dikembangkan oleh team OpenAI XENZA.ID', 'bot');
    }, 500); // Delay before bot message
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

        // Check if user is expressing sadness
        const sadKeywords = ['sedih', 'galau', 'kecewa', 'sedihnya'];
        const isSad = sadKeywords.some(keyword => userMessage.includes(keyword));

        // Remove the typing message and add the actual bot response after a delay
        setTimeout(() => {
            const typingMessage = document.getElementById(typingMessageId);
            if (typingMessage) {
                typingMessage.remove();
            }

            //LIBRARY UMUM
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
            
            } else if (userMessage === 'apa hobimu?') {
                addMessage('Saya tidak punya hobi seperti manusia, tetapi saya suka membantu menjawab pertanyaan!', 'bot');
            
            } else if (userMessage === 'dimana kamu tinggal?') {
                addMessage('Saya tidak tinggal di tempat fisik, saya berada di dalam sistem komputer', 'bot');
            
            } else if (userMessage === 'apa makanan favoritmu?') {
                addMessage('Saya tidak makan, karena saya adalah program komputer', 'bot');
             
            } else if (userMessage === 'siapa yang membuat mu?') {
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

            } else if (userMessage === 'apa hal yang bisa kamu lakukan?') {
                addMessage('Sebagai AI saya tidak melakukan suatu hal, tetapi saya dapat membantu mu dalam beberapa hal.', 'bot');
            
            } else if (userMessage === 'berapa umurmu?') {
                addMessage('Saya hanya AI yang diciptakan oleh team OpenAI XENZA.ID, saya tidak memiliki umur seperti manusia, tetapi saya diciptakan pada tahun 2024.', 'bot');
            
            } else if (userMessage === 'apa bahasa pemograman kamu?') {
                addMessage('Pada dasarnya saya menggunakan bahasa pemograman Pyhton, dan juga bahasa lainnya untuk menyempurnakan tampilan halaman saya ini.', 'bot');
            
            } else if (userMessage === 'bisakah kamu mendiagnosa sebuah penyakit?') {
                addMessage('Saya tidak dapat mendiagnosa penyakit, sebaiknya tanyakan kepada seorang dokter atau kepada ahlinya.', 'bot');
            
            } else if (userMessage === 'apakah kamu makan?') {
                addMessage('Sebagai AI saya tidak makan seperti manusia', 'bot');
            
            } else if (userMessage === 'bisakah kamu buatkan saya sebuah database?') {
                addMessage('Tentu, database seperti apa yang kamu inginkan?', 'bot');

            } else if (userMessage === 'terimakasih') {
                addMessage('Sama-sama, jika kamu memiliki pertanyaan, saya siap membantu kamu mencari jawabannya, semoga harimu menyenangkan', 'bot');
            
            } else if (userMessage === 'apasaja pengetahuan yang kamu ketahui?') {
                addMessage('Saat ini saya belum memiliki banyak pengetahuan, data saya akan terus di tambahkan pada memory saya dan akan terus dilatih oleh team OpenAI XENZA.ID', 'bot');
            
            //AKHIR LIBRARY UMUM

            //LIBRARY ILMU PENGETAHUAN DASAR
            } else if (userMessage === 'bagaimana hukum gravitasi newton bekerja?') {
                addMessage('Hukum gravitasi Newton menjelaskan gaya tarik antara dua objek berdasarkan massa dan jarak di antara keduanya.', 'bot');
           
            } else if (userMessage === 'bagaimana proses fotosintesis pada tumbuhan terjadi?') {
                addMessage('Fotosintesis terjadi ketika tumbuhan menggunakan energi cahaya matahari, karbon dioksida, dan air untuk membuat glukosa dan menghasilkan oksigen.', 'bot');
            
            } else if (userMessage === 'apa yang dimaksud dengan teori relativitas albert einstein?') {
                addMessage('Teori relativitas Albert Einstein terdiri dari relativitas khusus, yang membahas gerakan relatif dalam ruang dan waktu, dan relativitas umum, yang menjelaskan gravitasi sebagai kelengkungan ruang-waktu.', 'bot');
            
            } else if (userMessage === 'bagaimana struktur dna mempengaruhi pewarisan sifat?') {
                addMessage('Struktur DNA yang berbentuk rangkaian panjang ganda membawa informasi genetik yang diturunkan dari orang tua ke keturunan.', 'bot');
            
            } else if (userMessage === 'apa perbedaan antara hewan herbivora, karnivora, dan omnivora?') {
                addMessage('Hewan herbivora memakan tumbuhan, karnivora memakan daging, sedangkan omnivora dapat memakan tumbuhan dan daging.', 'bot');
            
            } else if (userMessage === 'apa yang dimaksud dengan perubahan iklim?') {
                addMessage('Perubahan iklim merujuk pada perubahan pola cuaca yang signifikan di seluruh planet dalam jangka waktu yang panjang, biasanya disebabkan oleh aktivitas manusia.', 'bot');
            
            } else if (userMessage === 'bagaimana cara kerja jantung manusia?') {
                addMessage('Jantung manusia memompa darah ke seluruh tubuh melalui sistem pembuluh darah untuk memasok oksigen dan nutrisi yang dibutuhkan oleh sel-sel tubuh.', 'bot');
            
            } else if (userMessage === 'apa yang dimaksud dengan perang dingin?') {
                addMessage('Perang Dingin adalah konflik politik dan militer antara Blok Barat (terutama Amerika Serikat dan sekutunya) dan Blok Timur (Uni Soviet dan sekutunya) setelah Perang Dunia II.', 'bot');
            
            } else if (userMessage === 'bagaimana proses terjadinya gerhana matahari?') {
                addMessage('Gerhana matahari terjadi ketika bulan berada di antara matahari dan bumi sehingga menutupi sebagian atau seluruh cahaya matahari.', 'bot');
            
            } else if (userMessage === 'apa yang dimaksud dengan sistem kekebalan tubuh?') {
                addMessage('Sistem kekebalan tubuh adalah sistem kompleks yang melindungi tubuh dari infeksi dan penyakit dengan mendeteksi dan merespons organisme asing dan bahan berbahaya.', 'bot');
            
            //AKHIR LIBRARY ILMU PENGETAHUAN DASAR
            } else {
                addMessage('Saya tidak mengerti pesan yang kamu berikan.', 'bot');
            }

            userInput.value = '';
        }, 2000); // 1 second delay before ai sends the actual response
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var popup = document.getElementById('welcomePopup');
    popup.classList.remove('hidden');

    setTimeout(function () {
        popup.classList.add('hidden');
    }, 1500); // Popup akan menghilang setelah 3 detik
});
