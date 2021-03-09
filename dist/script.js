//Selecting classes

//Display
const calcSummary = document.querySelector(".calculation");
const displayResult = document.querySelector(".result");
const HistoryBtn = document.querySelector(".history");
const resetBtn = document.querySelector(".reset");
const historyView = document.querySelector(".history-view");

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
  // plusNegBtn,
  // percentageBtn,
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

let operationHistory = [];
let operationFinalResult = [];
let displayResultValue;

//Button click display value
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

//Number of digits should not exceed space in calc display

//Creating clear button

const clear = function (button) {
  button.addEventListener("click", function () {
    //remove last digit
    displayResult.textContent = displayResult.textContent.slice(0, -1);
  });
};
clear(clearBtn);

//Creating plus/Neg button
const plusNeg = function (button) {
  button.addEventListener("click", function () {
    if (displayResult.textContent != "") {
      displayResultValue = -displayResultValue;
      displayResult.textContent = displayResultValue;
    } else {
      displayResult.textContent = "";
    }

    // let signCheck = Math.sign(displayResultValue);
  });
};

plusNeg(plusNegBtn);

//Creating percentage button
const percentage = function (button) {
  button.addEventListener("click", function () {
    displayResult.textContent += button.textContent;
    return (displayResultValue = displayResult.textContent);
  });
};

percentage(percentageBtn);

//Equal Button------------
// click counts
let count = 0;

//History function
const historyCalculationSummary = function (x) {
  for (let i = x; i < operationFinalResult.length; i++) {
    historyView.insertAdjacentHTML(
      "afterbegin",
      `<div class="history-row">Math Exp: <span>${operationHistory[i]} </span> <br> Result:  <span>${operationFinalResult[i]}</span> </div> `
    );
  }
};

//Exponential function
const exponential = function expo(x, f) {
  return Number.parseFloat(x).toExponential(f);
};

//initializing button
const equal = function (button) {
  button.addEventListener("click", function () {
    //check for % operator
    if (displayResult.textContent.includes("%")) {
      //display expression in calcsummary
      calcSummary.textContent = displayResultValue;
      operationHistory.push(displayResultValue);

      //Find how many times % occurance in string
      let percentTime = displayResultValue.match(/%/gi).length;

      //remove % from string (replace method)
      displayResultValue = displayResultValue.replaceAll("%", "");

      //check how many % included (divide by 100^ number of times)
      //calculate result
      let percentResult = eval(displayResultValue) / 100 ** percentTime;
      //Push percent result to final result
      operationFinalResult.push(percentResult);
      //find out lenght of output value
      let percentStringCount = percentResult.toString().length;
      //If lenght > 10, display result as exponent
      if (percentStringCount > 10) {
        // convert to exponent , display 6 digits after decimal place
        displayResult.textContent = exponential(percentResult, 6);
      } else {
        displayResult.textContent = percentResult;
        calcSummary.textContent = displayResultValue;
        operationHistory.push(displayResultValue);
        // console.log(operationHistory);
      }

      // displayResult.textContent = eval(displayResultValue) / 100 ** percentTime;
    } else {
      //result calculation
      let result = eval(displayResultValue);
      //push result to operation result array
      operationFinalResult.push(result);
      console.log(operationFinalResult);
      //Find out lenght of output value
      let stringCount = result.toString().length;
      //If lenght > 10, display result as exponent

      if (stringCount > 10) {
        // convert to exponent , display 6 digits after decimal place
        displayResult.textContent = exponential(result, 6);
      } else {
        displayResult.textContent = result;
        calcSummary.textContent = displayResultValue;
        operationHistory.push(displayResultValue);
        console.log(operationHistory);
      }
    }
    //Calling function by adding one to each btn click, avoiding duplicated data
    historyCalculationSummary(count++);
  });
};

equal(equalsBtn);

//Create Reset Button

const reset = function (button) {
  button.addEventListener("click", function () {
    //display result value back to 0
    displayResultValue = "";
    displayResult.textContent = displayResultValue;
    //remove calc summary
    calcSummary.textContent = "";
  });
};

reset(resetBtn);

//create history button

const history = function (button) {
  button.addEventListener("click", function () {
    if (historyView.classList.contains("hidden")) {
      historyView.classList.toggle("hidden");
    } else {
      historyView.classList.toggle("hidden");
    }
  });
};

history(HistoryBtn);

//Add plus neg button -done
//make sure % works -done
//Create if statement for number of digits-done
//create reset button - done
//create history - done

//change display of / * keep value -done
//map key press to buttons
//create night mode
//Refactor code

// const exponential = function expo(x, f) {
//   return Number.parseFloat(x).toExponential(f);
// };
