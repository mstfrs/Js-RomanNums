var calcBtn = document.getElementById("calcButton");
var result = document.getElementById("result");
const numberTyped = document.querySelector("input");

calcBtn.addEventListener("click", () => {
  if (
    numberTyped.value >= 4000 ||
    numberTyped.value == "" ||
    isNaN(numberTyped.value)
  ) {
    result.innerText = "Please type a number between 1-3999";
    numberTyped.value = "";
  } else {
    var decimalNumber = Array.from(numberTyped.value).reverse();
    const romanNumber = [];
    for (let i = 0; i < decimalNumber.length; i++) {
      if (i == 0) {
        sayi = ones.get(parseInt(decimalNumber[i]));
        romanNumber.push(sayi);
      } else if (i == 1) {
        sayi = tens.get(parseInt(decimalNumber[i] * 10));
        romanNumber.push(sayi);
      } else if (i == 2) {
        sayi = hundreds.get(parseInt(decimalNumber[i] * 100));
        romanNumber.push(sayi);
      } else {
        sayi = thousands.get(parseInt(decimalNumber[i] * 1000));
        romanNumber.push(sayi);
      }
    }
    reversedRoman = romanNumber.reverse();
    resultNumber = "";
    for (let c = 0; c < romanNumber.length; c++) {
      resultNumber += reversedRoman[c];
    }
    result.innerText = resultNumber;
    numberTyped.value = "";
  }
});

let ones = new Map();
ones.set(0, "");
ones.set(1, "I");
ones.set(2, "II");
ones.set(3, "III");
ones.set(4, "IV");
ones.set(5, "V");
ones.set(6, "VI");
ones.set(7, "VII");
ones.set(8, "VIII");
ones.set(9, "IX");

let tens = new Map();
tens.set(10, "X");
tens.set(20, "XX");
tens.set(30, "XXX");
tens.set(40, "XL");
tens.set(50, "L");
tens.set(60, "LX");
tens.set(70, "LXX");
tens.set(80, "LXXX");
tens.set(90, "XC");

let hundreds = new Map();
hundreds.set(100, "C");
hundreds.set(200, "CC");
hundreds.set(300, "CCC");
hundreds.set(400, "CD");
hundreds.set(500, "D");
hundreds.set(600, "DC");
hundreds.set(700, "DCC");
hundreds.set(800, "DCCC");
hundreds.set(900, "CM");

let thousands = new Map();
thousands.set(1000, "M");
thousands.set(2000, "MM");
thousands.set(3000, "MMM");
