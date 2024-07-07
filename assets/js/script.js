function updateProgress() {
    const checkboxes = document.querySelectorAll('.equipements input[type="checkbox"]');
    const progress = document.querySelector('.progress-bar');
    const total = checkboxes.length;
    let checked = 0;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checked++;
        }
    });
    const percentage = (checked / total) * 100;
    progress.style.width = percentage + '%';
    progress.innerHTML = Math.round(percentage) + '%';
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const chatBox = document.querySelector('.chat-container');
    const message = input.value;
    
    if (message.trim() !== "") {
        const messageElement = document.createElement('div');
        messageElement.className = 'chat-message';
        messageElement.textContent = message;
        
        chatBox.appendChild(messageElement);
        input.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

function autoResizeTextarea() {
    const textarea = document.getElementById('chat-input');
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
}

function openModal(img) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var lens = document.getElementById("zoomLens");

    modal.style.display = "block";
    modalImg.src = img.src;
    lens.style.display = "block";

    // Attach the event listeners for the lens movement
    modalImg.addEventListener("mousemove", moveLens);
    lens.addEventListener("mousemove", moveLens);
    modalImg.addEventListener("touchmove", moveLens);
    lens.addEventListener("touchmove", moveLens);

    function moveLens(e) {
        var pos, x, y;
        e.preventDefault();
        pos = getCursorPos(e);
        x = pos.x - (lens.offsetWidth / 2);
        y = pos.y - (lens.offsetHeight / 2);
        if (x > modalImg.width - lens.offsetWidth) { x = modalImg.width - lens.offsetWidth; }
        if (x < 0) { x = 0; }
        if (y > modalImg.height - lens.offsetHeight) { y = modalImg.height - lens.offsetHeight; }
        if (y < 0) { y = 0; }
        lens.style.left = x + "px";
        lens.style.top = y + "px";
        lens.style.backgroundImage = "url('" + modalImg.src + "')";
        lens.style.backgroundSize = (modalImg.width * 2) + "px " + (modalImg.height * 2) + "px";
        lens.style.backgroundPosition = "-" + (x * 2) + "px -" + (y * 2) + "px";
    }

    function getCursorPos(e) {
        var a, x = 0, y = 0;
        e = (e.changedTouches) ? e.changedTouches[0] : e;
        a = modalImg.getBoundingClientRect();
        x = e.clientX - a.left;
        y = e.clientY - a.top;
        return { x: x, y: y };
    }
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    var lens = document.getElementById("zoomLens");

    modal.style.display = "none";
    lens.style.display = "none";
}
function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    const chatbotButton = document.getElementById('chatbot-button');

    if (chatbot.style.display === 'none' || chatbot.style.display === '') {
        chatbot.style.display = 'flex';
        chatbotButton.style.display = 'none';
    } else {
        chatbot.style.display = 'none';
        chatbotButton.style.display = 'flex';
    }
}

function sendMessageChatbot() {
    const input = document.getElementById('chatbot-input');
    const messagesContainer = document.getElementById('chatbot-messages');
    const message = input.value.trim();
    
    if (message !== "") {
        const messageElement = document.createElement('div');
        messageElement.className = 'chat-message';
        messageElement.textContent = message;
        
        messagesContainer.appendChild(messageElement);
        input.value = "";
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}


