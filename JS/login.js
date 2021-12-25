const login = document.querySelector("#login");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const NOTE_NAME = "notename";
const HIDDEN_CLASSNAME = "hidden";
const logout = document.querySelector("#box6")
const TODOS_KEY1 = "todos"

function loginSuccess(e) {
    e.preventDefault();
    login
        .classList
        .add(HIDDEN_CLASSNAME);
    const notename = loginInput.value;
    localStorage.setItem(NOTE_NAME, notename);
    localStorage.setItem(NOTE_NAME, notename);
    paintGreetings(notename);
}
loginForm.addEventListener("submit", loginSuccess);

function paintGreetings(notename) {
    greeting.innerText = `${notename}'s pad`;
    greeting
        .classList
        .remove(HIDDEN_CLASSNAME);
}

const savedNotename = localStorage.getItem(NOTE_NAME);

if (savedNotename === null) {
    //show your form
    login
        .classList
        .remove(HIDDEN_CLASSNAME);
    login.addEventListener("submit", loginSuccess);
} else {
    //show the greetings
    paintGreetings(savedNotename);
}

// 로그아웃

function logOut() {
    localStorage.removeItem(NOTE_NAME);
    localStorage.removeItem(TODOS_KEY1);
    window
        .location
        .reload();
}

logout.addEventListener("click", logOut);

// 로그인 배경
const loginBg = document.querySelector(".loginBg");

function handleWindow(e) {
    const windowWidth = e.target.innerWidth;
    const windowHeight = e.target.innerHeight;
    const broswerRatio = windowWidth / windowHeight;
    const imageRatio = 1920 / 1080;
    if (imageRatio > broswerRatio) {
        loginBg.style.height = "100%";
        loginBg.style.width = `${windowHeight * imageRatio}px`;
        loginBg.style.left = `${ (windowWidth - windowHeight * imageRatio) / 2}px`;
        loginBg.style.top = "0";
    } else {
        loginBg.style.height = `${windowWidth / imageRatio}px`;
        loginBg.style.width = "100%";
        loginBg.style.left = "0";
        loginBg.style.top = `${ (windowHeight - windowWidth / imageRatio) / 2}px`;
    }
};

window.addEventListener("resize", handleWindow);
window.dispatchEvent(new Event('resize')); // 강제로 resize 이벤트 발생 시킴

// 전체화면 설정

loginForm.addEventListener('click', () => {
    document
        .documentElement
        .requestFullscreen()
        .catch((e) => {
            console.log(e);
        });
});

