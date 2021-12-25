const album = [
    {
        albumImg: "MUSIC/1.png",
        song: "MUSIC/melon/창모-selfmade orange.mp3",
        singer: "Changmo",
        albumTitle: "Selfmade Orange"
    }, {
        albumImg: "MUSIC/6.jpg",
        song: "MUSIC/melon/창모-빌었어.mp3",
        singer: "Changmo",
        albumTitle: "빌었어"
    }, {
        albumImg: "MUSIC/8.jpg",
        song: "MUSIC/melon/기리보이-파티피플.mp3",
        singer: "GR boy",
        albumTitle: "파티피플"
    }, {
        albumImg: "MUSIC/3.jpg",
        song: "MUSIC/melon/mc몽-죽을만큼아파서.mp3",
        singer: "MC mong",
        albumTitle: "죽을 만큼 아파서"
    }, {
        albumImg: "MUSIC/4.jpg",
        song: "MUSIC/melon/mc몽-죽을만큼아파서2.mp3",
        singer: "MC mong",
        albumTitle: "죽을 만큼 아파서 Part.2"
    }, {
        albumImg: "MUSIC/5.jpg",
        song: "MUSIC/melon/릴러말즈-야망.mp3",
        singer: "Leellamarz",
        albumTitle: "야망"
    }, {
        albumImg: "MUSIC/7.jpg",
        song: "MUSIC/melon/aespa-aenergy.mp3",
        singer: "aespa",
        albumTitle: "aenergy"
    }, {
        albumImg: "MUSIC/2.jpg",
        song: "MUSIC/melon/izone-언우밤지.mp3",
        singer: "IZ*ONE",
        albumTitle: "언젠가 우리의 밤도 지나가겠죠"
    }, {
        albumImg: "MUSIC/9.jpg",
        song: "MUSIC/melon/미란이-lambo!.mp3",
        singer: "Mirani",
        albumTitle: "Lambo!"
    }
];
const musicBox = document.querySelector("#musicBox");
const albumImg = document.querySelector("#box5 #musicBox img");
const song = document.querySelector("#box5 #audio");
const musicInfo = document.querySelector("#box5 #musicInfo");
const musicBtn = document.querySelector("#musicBtn");

const before = document.querySelector("#musicBtn #before");
const play = document.querySelector("#musicBtn #play");
const next = document.querySelector("#musicBtn #next");
const pause = document.querySelector("#play .c2");

let songIndex = 0;

// Load song details into DOM
loadSong(album[songIndex]);

// Update song details
function loadSong(album) {
    musicInfo.innerText = `${album.singer}
    ${album.albumTitle}`;
    song.src = `${album.song}`;
    albumImg.src = `${album.albumImg}`;
}

// Play song
function playSong() {
    musicBox
        .classList
        .add("play");
    pause.innerText = "pause";
    song.play();
}

// Pause song
function pauseSong() {
    musicBox
        .classList
        .remove("play");
    pause.innerText = "play_arrow";
    song.pause();
}

// Previous song
function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = album.length - 1;
    }
    loadSong(album[songIndex]);
    playSong();
}

// Next song
function nextSong() {
    songIndex++;
    if (songIndex > album.length - 1) {
        songIndex = 0;
    }
    loadSong(album[songIndex]);
    playSong();
}

// Event Listener
play.addEventListener("click", () => {
    const isPlaying = musicBox
        .classList
        .contains("play");

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

// Change Song
before.addEventListener("click", prevSong);
next.addEventListener("click", nextSong);
