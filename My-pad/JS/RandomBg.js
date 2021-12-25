const img = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg"
];

const chosenImage = img[Math.floor(Math.random() * img.length)];

const bgImg = document.querySelector("#bg img");
// bgImg.src = `IMG/IMG RESIZE/${chosenImage}`;
bgImg.src = `IMG/IMG_RESIZE/${chosenImage}`;

function handleWindow(e) {
    const windowWidth = e.target.innerWidth;
    const windowHeight = e.target.innerHeight;
    const broswerRatio = windowWidth / windowHeight;
    const imageRatio = 1920 / 1080;
    if (imageRatio > broswerRatio) {
        bgImg.style.height = "100%";
        bgImg.style.width = `${windowHeight * imageRatio}px`;
        bgImg.style.left = `${ (windowWidth - windowHeight * imageRatio) / 2}px`;
        bgImg.style.top = "0";
    } else {
        bgImg.style.height = `${windowWidth / imageRatio}px`;
        bgImg.style.width = "100%";
        bgImg.style.left = "0";
        bgImg.style.top = `${ (windowHeight - windowWidth / imageRatio) / 2}px`;
    }
};

window.addEventListener("resize", handleWindow);
window.dispatchEvent(new Event('resize')); // 강제로 resize 이벤트 발생 시킴
