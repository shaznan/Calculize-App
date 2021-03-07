//Selecting classes

//Display
const calcSummary = document.querySelector(".calculation");
const displayResult = document.querySelector(".result");
const HistoryBtn = document.querySelector(".history");
const resetBtn = document.querySelector(".reset");

// Buttons
const clearBtn = document.querySelector(".clear");
const plusNegBtn = document.querySelector(".plus-neg");
const percentageBtn = document.querySelector(".percentage");
const divideBtn = document.querySelector(".divide");
const multiplyBtn = document.querySelector(".multiply");
const substractBtn = document.querySelector(".substract");
const plusBtn = document.querySelector(".plus");
const equalsBtn = document.querySelector(".equals");
const nineBtn = document.querySelector(".Nine");
const eightBtn = document.querySelector(".eight");
const sevenBtn = document.querySelector(".seven");
const sixBtn = document.querySelector(".six");
const fiveBtn = document.querySelector(".five");
const fourBtn = document.querySelector(".four");
const threeBtn = document.querySelector(".three");
const twoBtn = document.querySelector(".two");
const oneBtn = document.querySelector(".one");
const zeroBtn = document.querySelector(".zero");
const dotBtn = document.querySelector(".dot");
const emptyBtn = document.querySelector(".empty");

//Implementing ALgotithm

const buttonlist = [
  //   clearBtn,
  plusNegBtn,
  percentageBtn,
  divideBtn,
  multiplyBtn,
  substractBtn,
  plusBtn,
  //   equalsBtn,
  nineBtn,
  eightBtn,
  sevenBtn,
  sixBtn,
  fiveBtn,
  fourBtn,
  threeBtn,
  twoBtn,
  oneBtn,
  zeroBtn,
  dotBtn,
  emptyBtn,
];

// let displayResultArray = 0;
let operationHistory = [];
let history = 0;
let displayResultValue;

const btnAction = function (arrlist) {
  arrlist.forEach(function (arr) {
    arr.addEventListener("click", function () {
      displayResult.textContent += arr.textContent;
      return (displayResultValue = displayResult.textContent);
      //   }
    });
  });
};

btnAction(buttonlist);

// displayResultValue.push("hi");

//Equal Button

const equal = function (button) {
  button.addEventListener("click", function () {
    // displayOperationValue.push(displayResultValue);
    displayResult.textContent = eval(displayResultValue);
    calcSummary.textContent = displayResultValue;
    operationHistory.push(displayResultValue);
    console.log(operationHistory);
  });
};

equal(equalsBtn);

//Creating clear button

const clear = function (button) {
  button.addEventListener("click", function () {
    displayResult.textContent = displayResult.textContent.slice(0, -1);
  });
};

clear(clearBtn);

//map keys to actual value to show in display
// remove display++
//create string to show when clicked
//calculate display result

// const testArr = ["1+2+3+4", "5+6+7+8"];

// console.log(eval(testArr[0]));
//   if (
//     arr.textContent === "+" ||
//     arr.textContent === "9" ||
//     arr.textContent === "8" ||
//     arr.textContent === "7" ||
//     arr.textContent === "6" ||
//     arr.textContent === "5" ||
//     arr.textContent === "4" ||
//     arr.textContent === "3" ||
//     arr.textContent === "2" ||
//     arr.textContent === "1" ||
//     arr.textContent === "0"
//   ) {
