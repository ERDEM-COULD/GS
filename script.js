const correctTeam = "Galatasaray";

function teamClicked(team) {
    const alkisSound = document.getElementById("alkisSound");
    const zortSound = document.getElementById("zortSound");
    const marsSound = document.getElementById("marsSound");

    if (team === correctTeam) {
        alkisSound.currentTime = 2;
        alkisSound.play();
        alkisSound.onended = () => {
            setTimeout(() => {
                marsSound.currentTime = 20; // 20. saniyeden başlat
                marsSound.play();
                startBackgroundAnimation();
            }, );
        };
    } else {
        zortSound.play();
        zortSound.onended = () => {
            setTimeout(() => {
                marsSound.currentTime = 20;
                marsSound.play();
                startBackgroundAnimation();
            }, );
        };
    }
}

function startBackgroundAnimation() {
    const leftHalf = document.getElementById("left-half");
    const rightHalf = document.getElementById("right-half");
    const buttonContainer = document.querySelector(".button-container");
    const teamButtons = document.querySelectorAll(".team-button");

    // Ekran animasyonu başlatma
    leftHalf.classList.add("animate-background-left");
    rightHalf.classList.add("animate-background-right");

    // Buton animasyonu başlatma
    teamButtons.forEach((button) => {
        button.classList.add("animate-button-left");
    });
}
