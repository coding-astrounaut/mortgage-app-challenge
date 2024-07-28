const mortgageAmountele = document.querySelector("#mortgageAmount");
const mortgageTermele = document.querySelector("#mortgageTerm");
const mortgageIntereele = document.querySelector("#mortgageInterest");
const error1 = document.querySelector(".e1");
const error2 = document.querySelector(".e2");
const error3 = document.querySelector(".e3");
const error4 = document.querySelector(".e4");
let checkBoxVal = 0;

function calculateMortgage(
  mortgageAmount,
  interestRate,
  mortgageTerm,
  mortgageType
) {
  // Ensure the inputs are numbers
  mortgageAmount = parseFloat(mortgageAmount.replace(/,/g, ""));
  interestRate = parseFloat(interestRate);
  mortgageTerm = parseInt(mortgageTerm);
  interestRate = interestRate / 100 + 1;

  let months = mortgageTerm * 12;
  let totalRepayment = mortgageAmount;
  let monthlyPayment = (totalRepayment / months) * interestRate;
  totalRepayment = monthlyPayment * months;

  if (mortgageType == 1) {
  } else if (mortgageType == 2) {
    totalRepayment = totalRepayment - mortgageAmount;
    monthlyPayment = totalRepayment / months;
  }

  return {
    monthlyPayment: isNaN(monthlyPayment) ? "NaN" : monthlyPayment.toFixed(2),
    totalRepayment: isNaN(totalRepayment) ? "NaN" : totalRepayment.toFixed(2),
  };
}

function output() {
  const results = document.querySelector(".results");
  const empty = document.querySelector(".emptyResult");
  let ready = false;
  let mortgageAmount = mortgageAmountele.value.trim();
  let mortgageTerm = mortgageTermele.value.trim();
  let mortgageIntere = mortgageIntereele.value.trim();

  let input1 = false;
  let input2 = false;
  let input3 = false;
  let input4 = false;

  if (mortgageAmount == "") {
    error1.style.display = "block";
  } else {
    input1 = true;
  }
  if (mortgageTerm == "") {
    error2.style.display = "block";
  } else {
    input2 = true;
  }
  if (mortgageIntere == "") {
    error3.style.display = "block";
  } else {
    input3 = true;
  }

  if (checkBoxVal == 0) {
    error4.style.display = "block";
  } else {
    input4 = true;
  }

  if (input1 && input2 && input3 && input4) {
    ready = true;
  }

  if (ready) {
    empty.style.display = "none";
    results.style.display = "block";
    monthlyRepay = document.getElementById("monthlyrepay");
    totalRepay = document.getElementById("totalrepay");

    let { monthlyPayment, totalRepayment } = calculateMortgage(
      mortgageAmount,
      mortgageIntere,
      mortgageTerm,
      checkBoxVal
    );
    monthlyRepay.innerHTML = `£${monthlyPayment}`;
    totalRepay.innerHTML = `£${totalRepayment}`;
  }
}

document
  .getElementById("mortgageAmount")
  .addEventListener("input", function (e) {
    // Get the current value
    let value = e.target.value;

    // Remove all non-digit characters, including commas
    value = value.replace(/[^0-9]/g, "");

    // Format the number with commas
    e.target.value = formatNumber(value);
  });

function formatNumber(value) {
  // Add commas as thousand separators
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Add an event listener for the blur event
mortgageAmountele.addEventListener("blur", function () {
  // If the input is empty, display a message
  if (mortgageAmountele.value.trim() === "") {
    error1.style.display = "block";
  } else {
    error1.style.display = "none";
  }
});
mortgageTermele.addEventListener("blur", function () {
  // If the input is empty, display a message
  if (mortgageTermele.value.trim() === "") {
    error2.style.display = "block";
  } else {
    error2.style.display = "none";
  }
});
mortgageIntereele.addEventListener("blur", function () {
  // If the input is empty, display a message
  if (mortgageIntereele.value.trim() === "") {
    error3.style.display = "block";
  } else {
    error3.style.display = "none";
  }
});

function checkbox1() {
  const checkBox = document.querySelector("#checkindicate1");
  const innerCheck = document.querySelector(".innercheck1");
  const buttonbox = document.querySelector(".c1");
  const checkbox2 = document.querySelector("#checkindicate2");
  const innerCheck2 = document.querySelector(".innercheck2");
  const buttonbox2 = document.querySelector(".c2");

  checkBoxVal = 1;
  checkBox.style.border = "2px solid hsl(61, 70%, 52%)";
  innerCheck.style.backgroundColor = "hsl(61, 70%, 52%)";
  buttonbox.style.backgroundColor = "#fafae2";
  buttonbox.style.border = "1.5px solid hsl(61, 70%, 52%)";

  checkbox2.style.border = "2px solid hsl(200, 26%, 54%)";
  innerCheck2.style.backgroundColor = "white";
  buttonbox2.style.backgroundColor = "white";
  buttonbox2.style.border = "1.5px solid hsl(200, 26%, 54%)";

  error4.style.display = "none";
}

function checkbox2() {
  const checkBox = document.querySelector("#checkindicate2");
  const innerCheck = document.querySelector(".innercheck2");
  const buttonbox = document.querySelector(".c2");
  const checkbox2 = document.querySelector("#checkindicate1");
  const innerCheck2 = document.querySelector(".innercheck1");
  const buttonbox2 = document.querySelector(".c1");

  checkBoxVal = 2;
  checkBox.style.border = "2px solid hsl(61, 70%, 52%)";
  innerCheck.style.backgroundColor = "hsl(61, 70%, 52%)";
  buttonbox.style.backgroundColor = "#fafae2";
  buttonbox.style.border = "1.5px solid hsl(61, 70%, 52%)";

  checkbox2.style.border = "2px solid hsl(200, 26%, 54%)";
  innerCheck2.style.backgroundColor = "white";
  buttonbox2.style.backgroundColor = "white";
  buttonbox2.style.border = "1.5px solid hsl(200, 26%, 54%)";

  error4.style.display = "none";
}

function clearAll() {
  const checkBox = document.querySelector("#checkindicate2");
  const innerCheck = document.querySelector(".innercheck2");
  const buttonbox = document.querySelector(".c2");
  const checkbox2 = document.querySelector("#checkindicate1");
  const innerCheck2 = document.querySelector(".innercheck1");
  const buttonbox2 = document.querySelector(".c1");

  checkbox2.style.border = "2px solid hsl(200, 26%, 54%)";
  innerCheck2.style.backgroundColor = "white";
  buttonbox2.style.backgroundColor = "white";
  buttonbox2.style.border = "1.5px solid hsl(200, 26%, 54%)";
  checkBox.style.border = "2px solid hsl(200, 26%, 54%)";
  innerCheck.style.backgroundColor = "white";
  buttonbox.style.backgroundColor = "white";
  buttonbox.style.border = "1.5px solid hsl(200, 26%, 54%)";

  error1.style.display = "none";
  error2.style.display = "none";
  error3.style.display = "none";
  error4.style.display = "none";

  mortgageAmountele.value = "";
  mortgageTermele.value = "";
  mortgageIntereele.value = "";
}
