let bordRed = document.getElementById("bordRed");
let bordGreen = document.getElementById("bordGreen");
let bordBlue = document.getElementById("bordBlue");
let bordWidth = document.getElementById("bordWidth");
let backRed = document.getElementById("backRed");
let backGreen = document.getElementById("backGreen");
let backBlue = document.getElementById("backBlue");
let backWidth = document.getElementById("backWidth");

const apply = () => {
    if (
        validate(bordRed.value) && validate(bordGreen.value) && validate(bordBlue.value) && bordWidth.value >= 0 && bordWidth.value <= 10 &&
        validate(backRed.value) && validate(backGreen.value) && validate(backBlue.value) && backWidth.value > 0
    ) {
        let bordArr=[]
        for(let i=0; i<3; i++){
            i === 0 ?
                bordArr.push(Number(bordRed.value).toString(16)) :
                i === 1 ?
                    bordArr.push(Number(bordGreen.value).toString(16)) :
                    bordArr.push(Number(bordBlue.value).toString(16))
        }
        let color = ""
        for(let i=0; i<3; i++){
            bordArr[i].length === 1 ?
                color += '0' + bordArr[i] :
                    color += boardArr[i]
        }
        document.getElementById("para").style.border = bordWidth.value+'px solid #'+color; 

        let backArr=[]
        for(let i=0; i<3; i++){
            i === 0 ?
                backArr.push(Number(backRed.value).toString(16)) :
                i === 1 ?
                    backArr.push(Number(backGreen.value).toString(16)) :
                    backArr.push(Number(backBlue.value).toString(16))
        }
        let backColor = ""
        for(let i=0; i<3; i++){
            backArr[i].length === 1 ?
                backColor += '0' + backArr[i] :
                    backColor += backArr[i]
        }
        
        console.log(backColor)
        document.getElementById("para").style.backgroundColor = "#"+backColor;
        document.getElementById("para").style.width = backWidth.value + "px";
        console.log(backWidth.value)
    } else {
        alert("Values out of Range");
    }
}

const validate = (value) => {
    return (value >= 0 && value <= 255)
}


