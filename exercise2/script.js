const pic = document.getElementById('picture')
let picNum = 0;

const previous = () => {
    picNum = picNum === 0 ? 5 : picNum
    picNum = (picNum - 1) % 5;
    pic.src = "pictures/image"+picNum+".jpg";
}
const next = () => {
    picNum = (picNum + 1) % 5;
    pic.src = "pictures/image"+picNum+".jpg";
}