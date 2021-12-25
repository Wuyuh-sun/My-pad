const closeBtn = document.querySelector(".boardBox_btn1");
const closeBtnImg = document.querySelector(".boardBox_btn1 #closebtn1");
const loginBoxMain = document.querySelector(".board1");

function click() {
    const loginBoxMainDp = loginBoxMain.style.display;
    if (loginBoxMainDp === "") {
        loginBoxMain.style.display = "none";
        closeBtnImg.style.transform = "rotate(45deg)";
    } else {
        loginBoxMain.style.display = "";
        closeBtnImg.style.transform = "rotate(0deg)";
    }

}

closeBtn.addEventListener("click", click);
