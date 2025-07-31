document.addEventListener('DOMContentLoaded', function() {
    const wishBtn = document.getElementById('wishBtn');
    const heartsContainer = document.getElementById('hearts');
    const birthdaySong = document.getElementById('birthdaySong');
    const nameElement = document.getElementById('name');
    const senderElement = document.getElementById('sender');
    const card = document.querySelector('.card');
    
    // Customize these values
    const birthdayPerson = "Pikaaa";
    const yourName = "Senoo";
    const messages = [
        "Makasih yaaa udah kasih dbesto waktu ituu, hehe. Maaf aku baru inget itu kamu😁",
        "Semoga aku jadi yang pertama ngucapin kamu ultah🙌",
        "Semoga hari ini dan hari-hari setelah ini kamu bakal makin bahagia dari hari-hari sebelumnya yaaa",
        "Semoga nanti kamu keterima di kampus dan jurusan yang kamu tujuuu yaaaa",
        "Katanya kalo ulang tahun, yang ulang tahun harus jajanin yang ngucapin tauu😏"
    ];
    
    // Set names
    nameElement.textContent = birthdayPerson;
    senderElement.textContent = yourName;
    
    // Create hearts animation
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    
    // Create confetti
    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
    
    // Button click event
    wishBtn.addEventListener('click', function() {
        // Play music
        birthdaySong.play();
        
        // Create 50 hearts
        for(let i = 0; i < 50; i++) {
            createHeart();
            createConfetti();
        }
        
        // Change button text
        this.textContent = "Enjoy Your Day!";
        this.style.backgroundColor = "#d23669";
        
        // Rotate card slightly
        card.style.transform = "rotateY(10deg)";
        
        // Change message every 3 seconds
        let counter = 0;
        const messageInterval = setInterval(() => {
            document.querySelector('.wish').textContent = messages[counter % messages.length];
            counter++;
        }, 3000);
        
        // Stop after all messages shown
        setTimeout(() => {
            clearInterval(messageInterval);
        }, messages.length * 3000);
    });
    
    // Enable clicking anywhere on card to create hearts
    card.addEventListener('click', function(e) {
        if(e.target.id !== 'wishBtn') {
            createHeart();
        }
    });
});