// HTML elementlerini seçiyoruz
const buttons = document.querySelectorAll('.team-btn');
const alkis = document.getElementById('alkis');
const zort = document.getElementById('zort');
const mars = document.getElementById('mars');
const leftSection = document.getElementById('left-section');
const rightSection = document.getElementById('right-section');

// Arka plan renk değişimi için değişkenler
let colorInterval;

// Doğru cevap
const correctAnswer = "GALATASARAY";

// Ekran renklerini değiştiren fonksiyon
function startColorChange() {
    let isYellow = true;

    colorInterval = setInterval(() => {
        leftSection.style.backgroundColor = isYellow ? "yellow" : "red";
        rightSection.style.backgroundColor = isYellow ? "red" : "yellow";
        isYellow = !isYellow; // Renk sırasını değiştir
    }, 500); // 0.5 saniyede bir renk değiştir
}

// Arka plan renk değişimini durduran fonksiyon
function stopColorChange() {
    clearInterval(colorInterval); // Renk değişimini durdur
    leftSection.style.backgroundColor = "white"; // Sol taraf beyaz
    rightSection.style.backgroundColor = "white"; // Sağ taraf beyaz
}

// Butonlara tıklama olayını ekle
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedTeam = button.getAttribute('data-team');
        if (selectedTeam === correctAnswer) {
            // Doğru cevap
            zort.pause();
            zort.currentTime = 0;
            alkis.play();
            alert("Tebrikler! Doğru cevap 🎉");

            // Alkış sesi bitince Galatasaray Marşı'nı başlat
            alkis.addEventListener('ended', () => {
                mars.currentTime = 20; // 20. saniyeden başlat
                mars.play();
                startColorChange(); // Renk değişimini başlat
            }, { once: true });

            // Marş bittiğinde renk değişimini durdur
            mars.addEventListener('ended', stopColorChange, { once: true });
        } else {
            // Yanlış cevap
            alkis.pause();
            alkis.currentTime = 0;
            zort.play();
            alert("Yanlış cevap! Doğru cevap: Galatasaray 💛❤️");

            // Zort sesi bitince Galatasaray Marşı'nı başlat
            zort.addEventListener('ended', () => {
                mars.currentTime = 20; // 20. saniyeden başlat
                mars.play();
                startColorChange(); // Renk değişimini başlat
            }, { once: true });

            // Marş bittiğinde renk değişimini durdur
            mars.addEventListener('ended', stopColorChange, { once: true });
        }
    });
});
