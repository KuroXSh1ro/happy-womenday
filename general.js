       const messages = [
            { type: 'text-with-image', content: 'Chào bạn!!!', image: 'https://media.tenor.com/yCFHzEvKa9MAAAAj/hello.gif' },
            { type: 'text', content: 'Ngày hôm nay của bạn như thế nào?' },
            { type: 'text', content: 'Mình cá chắc rằng bạn vẫn luôn xinh đẹp và tuyệt vời.' },
            { type: 'image', content: '<img src="https://media1.tenor.com/m/Qe3EESxMkk0AAAAd/dog.gif" style="max-width: 90%; max-height: 400px; width: auto; height: auto; border-radius: 20px; object-fit: contain; margin-top: 20px; display: block; margin-left: auto; margin-right: auto;" alt="Image">' },
            { type: 'text', content: 'Hehe, hôm nay có điều mình muốn nói với bạn...' },
            { type: 'text', content: 'Đóa là.....' },
            { type: 'special', content: '🎉 Chúc mừng ngày Quốc tế Phụ nữ 20/10 🎉' },
            { type: 'text-with-image', content: 'Yayyy!', image: 'https://media.tenor.com/qg8K8VOmzJwAAAAi/party-popper-confetti.gif' },
            { type: 'text-with-image', content: 'Hooray!', image: 'https://media.tenor.com/J2j91At15asAAAAi/yay-hooray.gif' },
            { type: 'text-with-image', content: 'Bắn pháo hoa ăn mừng', image: 'https://media1.tenor.com/m/i55LiEyzU_AAAAAd/fireworks-elmo.gif' },
            { type: 'text-with-image', content: 'Hú Hú, Rải hoa', image: 'https://media.tenor.com/cV2dleeinkkAAAAi/muddu-peach-cat.gif' },
            { type: 'text', content: 'Nhân dịp này...' },
            { type: 'text', content: 'Mình muốn chúc bạn là luôn...' },
            { type: 'highlight', content: 'VUI TƯƠI' },
            { type: 'highlight', content: 'RẠNG RỠ' },
            { type: 'highlight', content: 'SIU XINH ĐẸP' },
            { type: 'highlight', content: 'LUÔN TỰ TIN SỐNG CUỘC ĐỜI CỦA MÌNH' },
            { type: 'highlight', content: 'Và mình mong mọi điều tốt đẹp sẽ đến với bạn <3' },
            { type: 'text', content: 'Chúc bạn có một ngày 20/10 tuyệt vời!!!' },
            { type: 'text', content: 'Mình mún tặng cho bạn cái này!!!' },
            { type: 'flower', content: 'BÙM...💐' },
            { type: 'text-with-image', content: 'Thêm cái nữa', image: 'https://media.tenor.com/GpNh_hWuZyAAAAAi/%D1%80%D0%BE%D0%B7%D0%B8-red-rose.gif' },
            { type: 'text-with-image', content: 'Thêm cái nữa đi', image: 'https://tse3.mm.bing.net/th/id/OIP.zcfcscZs6xbYB8a8khHSAQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3' },
            { type: 'text-with-image', content: 'Tặng bạn cả xe tải luôn :))))', image: 'https://thumbs.dreamstime.com/b/truck-load-flowers-415038.jpg?w=450' },
            { type: 'text-with-image', content: 'Hy vọng bạn sẽ thích món quà nhỏ này từ mình.', image: 'https://media.tenor.com/RUirV7Sgg2AAAAAi/romantice-cat.gif' },
            { type: 'text-with-image', content: 'Cảm ơn bạn đã dành thời gian xem cái vô tri này.', image: 'https://media1.tenor.com/m/5XaUFxpD2cAAAAAC/shy-blush.gif' },
            { type: 'image', content: '<img src="https://media.tenor.com/uF3Wt76sLVkAAAAi/pokemon-thankyou.gif" style="width: 300px; height: 300px; border-radius: 20px; object-fit: cover;">' },
        ];

        let currentIndex = 0;
        const container = document.getElementById('content');
        const bubbleContainer = document.getElementById('bubbleContainer');
        const startBtn = document.getElementById('startBtn');
        const music = document.getElementById('bgMusic');
        
        // Music Player Controls
        const volumeSlider = document.getElementById('volumeSlider');
        const volumeIcon = document.getElementById('volumeIcon');
        const progressBar = document.getElementById('progressBar');
        const progressFill = document.getElementById('progressFill');
        const currentTimeEl = document.getElementById('currentTime');
        const durationEl = document.getElementById('duration');

        // Format time
        function formatTime(seconds) {
            if (isNaN(seconds)) return '0:00';
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        }

        // Update progress bar
        music.addEventListener('timeupdate', () => {
            const progress = (music.currentTime / music.duration) * 100;
            progressFill.style.width = progress + '%';
            currentTimeEl.textContent = formatTime(music.currentTime);
        });

        // Update duration when loaded
        music.addEventListener('loadedmetadata', () => {
            durationEl.textContent = formatTime(music.duration);
        });

        // Click on progress bar to seek
        progressBar.addEventListener('click', (e) => {
            const rect = progressBar.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            music.currentTime = percent * music.duration;
        });

        // Volume control
        volumeSlider.addEventListener('input', (e) => {
            const volume = e.target.value / 100;
            music.volume = volume;

            // Update volume icon
            if (volume === 0) {
                volumeIcon.textContent = '🔇';
            } else if (volume < 0.5) {
                volumeIcon.textContent = '🔉';
            } else {
                volumeIcon.textContent = '🔊';
            }
        });

        // Set initial volume
        music.volume = 0.1;

        // Tự động phát nhạc khi trang load
        window.addEventListener('load', () => {
            music.play().catch(e => {
                console.log('Trình duyệt chặn autoplay, nhạc sẽ phát khi người dùng tương tác');
            });
        });

        function createBubbles() {
            // Tạo bong bóng ban đầu ngay lập tức
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    createSingleBubble();
                }, i * 200);
            }

            // Sau đó tạo liên tục
            setInterval(() => {
                createSingleBubble();
            }, 300);
        }

        function createSingleBubble() {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            const size = Math.random() * 60 + 30;
            bubble.style.width = size + 'px';
            bubble.style.height = size + 'px';
            bubble.style.left = (Math.random() * 90 + 5) + '%';

            const duration = Math.random() * 3 + 5;
            bubble.style.animationDuration = duration + 's';
            bubble.style.animationDelay = (Math.random() * 0.5) + 's';

            bubbleContainer.appendChild(bubble);

            setTimeout(() => {
                bubble.remove();
            }, (duration + 1) * 1000);
        }

        function showNextMessage() {
            if (currentIndex >= messages.length) return;

            container.innerHTML = '';
            const msg = messages[currentIndex];
            let element;

            switch (msg.type) {
                case 'text':
                    element = document.createElement('div');
                    element.className = 'message';
                    element.textContent = msg.content;
                    break;
                case 'text-with-image':
                    element = document.createElement('div');
                    element.className = 'text-with-image-container';
                    element.style.textAlign = 'center';

                    const textDiv = document.createElement('div');
                    textDiv.className = 'message';
                    textDiv.textContent = msg.content;
                    element.appendChild(textDiv);

                    const imageDiv = document.createElement('div');
                    imageDiv.className = 'image-container';
                    imageDiv.innerHTML = `<img src="${msg.image}" style="max-width: 90%; max-height: 400px; width: auto; height: auto; border-radius: 20px; object-fit: contain; margin-top: 20px; display: block; margin-left: auto; margin-right: auto;" alt="Image">`;
                    element.appendChild(imageDiv);
                    break;
                case 'special':
                    element = document.createElement('div');
                    element.className = 'special-message';
                    element.textContent = msg.content;
                    break;
                case 'highlight':
                    element = document.createElement('div');
                    element.className = 'highlight';
                    element.textContent = msg.content;
                    break;
                case 'image':
                    element = document.createElement('div');
                    element.className = 'image-container';
                    element.innerHTML = `<div class="image-placeholder">${msg.content}</div>`;
                    break;
                case 'flower':
                    element = document.createElement('div');
                    element.className = 'flower';
                    element.textContent = msg.content;
                    break;
            }

            container.appendChild(element);
            currentIndex++;

            setTimeout(showNextMessage, 3500);
        }

        startBtn.addEventListener('click', () => {
            music.play().catch(e => console.log('Không thể phát nhạc:', e));
            createBubbles();
            startBtn.style.display = 'none';
            setTimeout(showNextMessage, 500);
        });