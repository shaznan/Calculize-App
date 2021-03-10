# Calculize

## Personal Project - Basic Calculator 

The calculator app was built using the below tools:
- HTML
- Bootstrap 4.0
- Scss & CSS
- Vanilla Javascript 
- AOS Animation Library 

![alt text](https://github.com/shaznan/Calculize-App/blob/main/Images/UI.PNG?raw=true)


### Project Description

Calculize was built as a personal project from scratch. Carrying out basic mathematical operations are possible with Calculize.
  ## App features:
- Supports basic operations (+, -, ×, ÷, %)
- Supports keypress input
- Supports calculator display expansion by click or key event. 
- Displays calculated result & math expression used to derive result
- Displays summary of previous calculated results of total and expressions used to derive the total figure under the history icon (clock)
- Results which produce more than 10 digits are converted into an **exponential** notation.
- Contains reset button to clear display and start new calculation
- Contains clear button which allows user to delete recent inputs and continue working without resetting and starting all over

#### *Limitations of the app:*
- *The plus/Negative sign button will only convert input numbers from '+' to '-' & '-' to '+', but will not convert the final result.*
 

## How to use Calculize?
To perform calculation you can either click on numbers and operators, or else you can simple type your calculations using the below keypress:
- Num keys - enter numbers
- Operator keys - enter math operators
- Enter key - calculate result
- Space key - Display calculation summary
- Escape key - Reset display
- Arrow left - Expand calculator display
- Arrow right - Collapse calculator display  

# Documentation
The Mathematical calculations are done using the eval() method with controlled inputs.

An array list of buttons with controlled inputs which can be calculated using the eval method is passed into a foreach loop, stored inside an immediately invoked function, which displays each input text content separately and is assigned to the result output. The for each loop is assigned to both click and keydown events. 

Inputs which cannot be calculated using the eval method are assigned to it’s own immediately invoked function. Which gets called on click and keydown events. 

### **Clear button:** 
The last digit of the display output is removed on every event by using the slice method which creates a new string by taking every digit from the output except the last digit and assigning it again to the display output. 

### **Plus/Neg button:**
The current input value is converted into a negative value if it’s a positive value or converted into a positive value if it’s a negative value. An if statement is included to check if there is a number present in the display output before performing the conversion or else it will result in NaN.

### Equal/button:
The equal button has three compartments in it:
1. HistorySummaryCalculation
2. Percentage calculation
3. Calculating controlled input results

##### 1. The HistorySummaryCalculation

The historySummarycalculation function declaration contains a regular for loop, which loops into both the operationresult and operationfinalresult arrays which produces array values based on the calculation functions. And creates a virtual dom with a template literal of all the calculation summary.

##### 2. The Percentage calculation

The percentage calculation function declaration takes into account if any “%’ operator is present in the display output string and removes them as ‘%’ is not a controlled input for eval method calculation, and does the percentage calculation manually. 

##### How it works? 
-The number of times % is used in the string is taken into account using the match method and the length property. And the total result is divided by 100^ the amount of times the percentage occurrence in the string. 

-Before calculation, all percentage symbols are replaced to none “”. 
-The result of the output is converted into a string to find the length of it and is passed into the exponential function which converts the final output if it exceeds 10 characters to an exponential notation. 

##### 3. Calculating controlled input results

The calculate result function declaration calculates the string present in the display output with mathematical operators by converting them into numbers and operators. The output is converted into an exponential notation if the final output characters exceed 10 digits. 

The functions are then called later with click and keypress event handlers. Each time an event occurs, the history calculation summary function is called with a count++ variable which was earlier declared as zero. Each time the historycalculationsummary function is called, it adds 1 to the starting variable to avoid duplication of old summary data in the virtual dom. 

### Reset button
The reset button clears all display values

### History button
The history button hides and shows the virtual dom summary by toggling the hidden class created separately in css. 

### Expand button
The expand button hides or shows the expanded display area by toggling through css classes. The overflow property is also toggled to make sure characters in the display output doesn’t spill out of the display area when the display area is not expanded. 

- A set timeout function is declared and is called based on the time allocated to it which is equivalent to the css animation property duration, to avoid disturbance of the animation flow. 

# Flowchart 

![image](https://user-images.githubusercontent.com/74103414/110631234-4d973a00-81cc-11eb-8026-ee16971974c4.png)




