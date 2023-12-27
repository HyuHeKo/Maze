function redirectToSettingsPage() {
    window.location.href = "pages/settings_page.html";
}

function redirectToMainPage() {
    window.location.href = "../index.html";
}

function redirectToLevelsPage() {
    window.location.href = "./pages/levels_page.html";
}

function redirectToAboutPage() {
    window.location.href = "pages/about_page.html";
}

function changeStateMusic() {
    var audio = document.getElementById('background-music');
    var musicStat = document.querySelector('.music-text');
    
    const jsonData = { value: true };

    if (audio.paused) {
        audio.play();
        musicStat.innerHTML = 'On'
        jsonData.value = true;
    }
    else {
        audio.pause();
        musicStat.innerHTML = 'Off'
        jsonData.value = false;
    }

    localStorage.setItem('musicState', JSON.stringify(jsonData), {encoding: 'utf8', flag: 'w'})
}

window.addEventListener('beforeunload', function (event) {
    var audio = document.getElementById('background-music');

    const jsonData = { value: audio.currentTime };
    localStorage.setItem('musicCurrentTime', JSON.stringify(jsonData), {encoding: 'utf8', flag: 'w'})
});

window.onload = function() {
    const musicCurrentTime = JSON.parse(localStorage.getItem('musicCurrentTime'));
    const musicVolume = JSON.parse(localStorage.getItem('musicVolume'));
    const musicState = JSON.parse(localStorage.getItem('musicState'));

    var audio = document.getElementById('background-music');
    var musicStat = document.querySelector('.music-text');
    console.log(musicCurrentTime.value);
    console.log(musicVolume.value);
    audio.currentTime = musicCurrentTime.value;
    audio.volume = musicVolume.value;

    if (musicState.value) {
        audio.play();
        musicStat.innerHTML = 'On'
    }
    else {
        audio.pause();
        musicStat.innerHTML = 'Off'
    }
}

function changeVolume() {
    var volumeControl = document.getElementById("volume-control");
    var volume = volumeControl.value;
    var audio = document.getElementById("background-music");
    audio.volume = volume;

    const jsonData = { value: volume };
    localStorage.setItem('musicVolume', JSON.stringify(jsonData), {encoding: 'utf8', flag: 'w'})
}