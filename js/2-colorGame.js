// let colors = [
//     "rgb(255, 0, 0)", // Red
//     "rgb(255, 255, 0)", // Red + Green -> Yellow
//     "rgb(0, 255, 0)", // Green
//     "rgb(0, 255, 255)", // Green + Blue -> cyan(青色)
//     "rgb(0, 0, 255)", // Blue
//     "rgb(255, 0, 255)"  // Red + Blue -> magenta(洋紅色)
// ]; //R G B 逗號之間要空白，非常重要！!!!
let numberOfSquares = 6;
//因為在reset()中colors已經有做產生隨機的顏色的動作了
// let colors = generateRandomColors(numberOfSquares);
let colors = [];

//同colors的部份
// let pickedColor = pickColor();
let pickedColor;

let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

let h1 = document.querySelector("h1");

let resetButton = document.querySelector("#reset");


// easyBtn & hardBtn 因為兩者做的事情相似，故可以做微調
// let easyBtn = document.querySelector("#easyBtn");
// let hardBtn = document.querySelector("#hardBtn");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setUpModeButtons();
    setUpSquares();
    reset();
}


function setUpModeButtons() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
            reset();
        });
    }
}

function setUpSquares() {
    for (let i = 0; i < squares.length; i++) {
        //add initial colors to squares
        //這部份捨棄，因為在reset()中就有給予色塊顏色的動作了
        //squares[i].style.backgroundColor = colors[i]; //賦予每一個色塊一個RGB的值

        //add click listeners to squares
        squares[i].addEventListener("click", function () {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor

            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323"; //如果選到的不是正確的，則換成與背景相同的顏色
                messageDisplay.textContent = "Try Again";
            }
        })//注意冒號
    }
}











//底下Code直接搬入init()中
// for (let i = 0; i < modeButtons.length; i++) {
//     modeButtons[i].addEventListener("click", function () {
//         modeButtons[0].classList.remove("selected"); //easyBtn移除selected的class
//         modeButtons[1].classList.remove("selected"); //hardBtn移除selected的class
//         this.classList.add("selected"); //this針對目前點選的btn(easy or hard)添加selected的class


//         //If的條件式可以縮寫成一行
//         // if(this.textContent === "Easy") {
//         //     numberOfSquares = 3 ;
//         // } else {
//         //     numberOfSquares = 6 ;
//         // }
//         this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;

//         reset();
//     })
// }

function reset() { //基本上與resetButton的功能一模一樣
    //generate all new colors
    colors = generateRandomColors(numberOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorsDiaplay to match picked color
    colorDisplay.textContent = pickedColor;

    messageDisplay.textContent = "";
    resetButton.textContent = "NEW COLORS";

    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {  //因為這裡只有「3」個色塊，假如有色塊，就顯示色塊
            squares[i].style.display = "block"; //block強迫換行 inline一行
            squares[i].style.backgroundColor = colors[i];
        } else {    //其餘3個色塊，因為上限只有3個，所以這裡會隱藏
            squares[i].style.display = "none";
        }
    }

    h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function () { //這裡指負責 Easy Btn 的設定，點選色塊之後的動作，則獨立，與此無關
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numberOfSquares = 3;
//     colors = generateRandomColors(numberOfSquares); //Create 3 colors : [color0 , color1 , color2];
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (let i = 0; i < squares.length; i++) {
//         if (colors[i]) {  //因為這裡只有「3」個色塊，假如有色塊，就顯示色塊
//             squares[i].style.backgroundColor = colors[i];
//         } else {    //其餘3個色塊，因為上限只有3個，所以這裡會隱藏
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function () {
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numberOfSquares = 6;
//     colors = generateRandomColors(numberOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (let i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// });


resetButton.addEventListener("click", function () {
    // //generate all new colors
    // colors = generateRandomColors(numberOfSquares);
    // //pick a new random color from array
    // pickedColor = pickColor();
    // //change colorsDiaplay to match picked color
    // colorDisplay.textContent = pickedColor;

    // messageDisplay.textContent = "";
    // this.textContent = "NEW COLORS";
    // //change colors of squares
    // for (var i = 0; i < squares.length; i++) {
    //     squares[i].style.backgroundColor = colors[i];
    // }
    // h1.style.backgroundColor = "steelbule";

    //以上可直接用reset()直接替換掉
    reset();
})

colorDisplay.textContent = pickedColor; // 這顯示著文字中的RGB跟著正確答案的RGB跑


//底下的Code可直接搬入init()中
// for (let i = 0; i < squares.length; i++) {
//     //add initial colors to squares
//     squares[i].style.backgroundColor = colors[i]; //賦予每一個色塊一個RGB的值

//     //add click listeners to squares
//     squares[i].addEventListener("click", function () {
//         //grab color of clicked square
//         var clickedColor = this.style.backgroundColor;
//         //compare color to pickedColor

//         if (clickedColor === pickedColor) {
//             messageDisplay.textContent = "Correct!";
//             resetButton.textContent = "Play Again?"
//             changeColors(clickedColor);
//             h1.style.background = clickedColor;
//         } else {
//             this.style.backgroundColor = "#232323"; //如果選到的不是正確的，則換成與背景相同的顏色
//             messageDisplay.textContent = "Try Again";
//         }
//     }); //注意冒號
// }

function changeColors(color) { //When pickedColor is picked , all squares changes pickedColor's color.
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() { //製造隨機亂機產生顏色 

    //這裡的隨機是colors裡的索引
    //ex:
    //0 -> "rgb(255, 0, 0)"
    //1 -> "rgb(255, 255, 0)"
    //根據colors的長度訂定最大值，floor四捨五入取最大整數
    let random = Math.floor(Math.random() * colors.length);

    //所以這裡會回傳的值是 color[0] or color[5] 以此類推
    return colors[random];
}

function generateRandomColors(num) {
    //make an array 
    var arr = [];
    //repeat num times
    for (let i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256)
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256)
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256)

    return "rgb(" + r + ", " + g + ", " + b + ")"; //記得逗號後面要空白!!!!
}