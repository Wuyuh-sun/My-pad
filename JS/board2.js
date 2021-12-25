const closeBtn2 = document.querySelector(".boardBox_btn2");
const closeBtnImg2 = document.querySelector(".boardBox_btn2 #closebtn2");
const loginBoxMain2 = document.querySelector(".board2");

function click() {
    const loginBoxMain2Dp = loginBoxMain2.style.display;
    if (loginBoxMain2Dp === "") {
        loginBoxMain2.style.display = "none";
        closeBtnImg2.style.transform = "rotate(45deg)";
    } else {
        loginBoxMain2.style.display = "";
        closeBtnImg2.style.transform = "rotate(0deg)";
    }

}

closeBtn2.addEventListener("click", click);