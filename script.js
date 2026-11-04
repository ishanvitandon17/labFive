

let player = document.getElementById("player");

let fullPlayer = document.getElementById("fullPlayer");

let currentAudio = "";
let volume = 1.0;

function toggleAudio(sound) {

    fullPlayer.pause();

    // If the same audio is clicked again
    if (currentAudio === sound) {

        if (player.paused) {
            player.play();
        } else {
            player.pause();
        }

    } else {

        // Play a different audio recording
        currentAudio = sound;

        if (sound === "full") {
            player.src = "audio/full.mp3";
        } else {
            player.src = "audio/" + sound + ".m4a";
        }

        player.play();
    }

    updateButtons();
}


function updateButtons() {

    let sounds = ["enter", "breakfast", "rain", "auto", "sandwich", "road", "sunset", "music", "full"];

    for (let i = 0; i < sounds.length; i++) {

        let button = document.getElementById(sounds[i] + "-button");

        if (sounds[i] === currentAudio && !player.paused) {
            button.innerHTML = "Pause";
        } else {
            button.innerHTML = "Play";
        }
    }
}


// Volume up
function volumeUp() {

    volume += 0.1;

    if (volume > 1.0) {
        volume = 1.0;
    }

    player.volume = volume;
}


// Volume down
function volumeDown() {

    volume -= 0.1;

    if (volume < 0.0) {
        volume = 0.0;
    }

    player.volume = volume;
}


// Reset button when audio finishes
player.onended = function() {
    updateButtons();
};

player.onplay = updateButtons;
player.onpause = updateButtons;

fullPlayer.onplay = function() {
    player.pause();
};