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

//Implementing ALgotithm

const buttonlist = [
  divideBtn,
  multiplyBtn,
  substractBtn,
  plusBtn,
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
  percentageBtn,
];

let operationHistory = [];
let operationFinalResult = [];
let displayResultValue;

//Display clicked buttons
((arrlist) => {
  arrlist.forEach((arr) => {
    const addButtons = () => {
      displayResult.textContent += arr.textContent;
      displayResultValue = displayResult.textContent;
    };
    //click event
    arr.addEventListener("click", addButtons);
    document.addEventListener("keydown", (e) => {
      //keypress event
      if (e.key == arr.textContent) addButtons();
    });
  });
})(buttonlist);

//clear button / backspace

((button) => {
  const removeLastdigit = () => {
    displayResult.textContent = displayResult.textContent.slice(0, -1);
  };

  button.addEventListener("click", removeLastdigit);
  //Keypress event
  document.addEventListener("keydown", (e) => {
    if (e.key == "Backspace") removeLastdigit();
  });
})(clearBtn);

//plus/Neg conversion button
((button) => {
  button.addEventListener("click", () => {
    if (displayResult.textContent != "") {
      displayResultValue = -displayResultValue;
      displayResult.textContent = displayResultValue;
    } else displayResult.textContent = "";
  });
})(plusNegBtn);

//Equal Button------------

//Equal btn func
((button) => {
  // click counts
  let count = 0;

  //History function
  const historyCalculationSummary = function (x) {
    for (let i = x; i < operationFinalResult.length; i++) {
      //create summary of operations
      historyView.insertAdjacentHTML(
        "afterbegin",
        `<div class="history-row">Math Exp: <span>${operationHistory[i]} </span> <br> Result:  <span>${operationFinalResult[i]}</span> </div> `
      );
    }
  };

  //Exponential function
  const exponential = (x, f) => Number.parseFloat(x).toExponential(f);

  //calculate percentage
  const percentageCalc = () => {
    calcSummary.textContent = displayResultValue; //display expression
    operationHistory.push(displayResultValue);
    let percentTime = displayResultValue.match(/%/gi).length; //times % occurance in string
    displayResultValue = displayResultValue.replaceAll("%", ""); //remove %
    let percentResult = eval(displayResultValue) / 100 ** percentTime; //(divide by 100^  number of times)
    operationFinalResult.push(percentResult);
    let percentStringCount = percentResult.toString().length; //lenght of output value

    if (percentStringCount > 10) {
      //If lenght > 10, display result as exponent
      displayResult.textContent = exponential(percentResult, 3);
    } else {
      displayResult.textContent = percentResult;
      calcSummary.textContent = displayResultValue;
      operationHistory.push(displayResultValue);
    }
  };
  //perform rest calculations
  const calculateResult = () => {
    let result = eval(displayResultValue); //result calculation
    operationFinalResult.push(result); //push result to operation result array
    let stringCount = result.toString().length; //Find out lenght of output value

    if (stringCount > 10) {
      //If lenght > 10, display result as exponent
      displayResult.textContent = exponential(result, 6); // convert to exponent , display 6 digits after decimal place
    } else {
      displayResult.textContent = result;
      calcSummary.textContent = displayResultValue;
      operationHistory.push(displayResultValue);
      console.log(operationHistory);
    }
  };

  button.addEventListener("click", function () {
    //check for % operator
    displayResult.textContent.includes("%")
      ? percentageCalc()
      : calculateResult();

    historyCalculationSummary(count++); //Calling function by adding one to each btn click, avoiding duplicated data
  });
  document.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
      displayResult.textContent.includes("%")
        ? percentageCalc()
        : calculateResult();

      historyCalculationSummary(count++); //Calling function by adding one to each btn click, avoiding duplic
    }
  });
})(equalsBtn);

//Create Reset Button
((button) => {
  const clearContent = () => {
    //display result value back to 0
    displayResultValue = "";
    displayResult.textContent = displayResultValue;
    //remove calc summary
    calcSummary.textContent = "";
  };

  button.addEventListener("click", clearContent);
  //keypress event
  document.addEventListener("keydown", (e) => {
    if (e.key == "Escape") clearContent();
  });
})(resetBtn);

//create history button
((button) => {
  const toggleClassList = () => {
    if (historyView.classList.contains("hidden")) {
      historyView.classList.toggle("hidden");
    } else {
      historyView.classList.toggle("hidden");
    }
  };

  button.addEventListener("click", toggleClassList);
  //add keypress event
  document.addEventListener("keydown", (e) => {
    if (e.key == " ") toggleClassList();
  });
})(HistoryBtn);

//Expanding text area

const expandbtn = document.querySelector(".expandbtn");
const expandTxtarea = document.querySelector(".expandtxtarea");
const calculator = document.querySelector(".calculator");

//click add event listner
expandbtn.addEventListener("click", () => {
  if (expandTxtarea.classList.contains("expandedtxtarea")) {
    expandTxtarea.classList.remove("expandedtxtarea");
    expandbtn.classList.remove("expandbtn-transform");
    //rem/add overflow to avoid text overflow if window not expanded
    setTimeout(() => {
      calculator.classList.remove("calculator-rem-overflow");
    }, 500);
  } else {
    expandTxtarea.classList.add("expandedtxtarea");
    expandbtn.classList.add("expandbtn-transform");
    //rem/add overflow to avoid text overflow if window not expanded
    setTimeout(() => {
      calculator.classList.add("calculator-rem-overflow");
    }, 0);
  }
});

//keypress listner
document.addEventListener("keydown", (e) => {
  if (e.key == "ArrowLeft") {
    expandTxtarea.classList.add("expandedtxtarea");
    expandbtn.classList.add("expandbtn-transform");
    setTimeout(() => {
      calculator.classList.toggle("calculator-rem-overflow");
    }, 0);
  } else if (e.key == "ArrowRight") {
    expandTxtarea.classList.remove("expandedtxtarea");
    expandbtn.classList.remove("expandbtn-transform");
    setTimeout(() => {
      calculator.classList.toggle("calculator-rem-overflow");
    }, 500);
  }
});
