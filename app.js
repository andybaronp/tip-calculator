const bill = document.getElementById("bill");
const radios = document.querySelectorAll("input[type=radio]");
const customTip = document.getElementById("customTip");
const numbersPersons = document.getElementById("numbersPersons");
const totalTipPeroson = document.getElementById("total-result");
const totalPerson = document.getElementById("totalPerson");
const btnReset = document.querySelector(".reset-button");
const errorMessageB = document.querySelector(".messageB");
const errorMessageP = document.querySelector(".messageP");

///
let billValue = 0.0;
let tip = 10;
let totalPersons = 1;
let tipPerson = 0;
let amountPerson = 0;
/////

//Bill
const setBill = () => {
  billValue = parseFloat(bill.value);
  calculate();
};
bill.addEventListener("input", setBill);

//custom TIp
const setCustomTip = () => {
  tip = parseFloat(customTip.value);
  calculate();
};
const upCustom = () => {
  customTip.addEventListener("input", setCustomTip);
  calculate();
};

const radioSelected = (radioImput) => {
  if (radioImput.value == "custom") {
    return upCustom();
  }
  tip = parseInt(radioImput.value);
  calculate();
};

radios.forEach((radioImput) =>
  radioImput.addEventListener("click", () => radioSelected(radioImput))
);

const setNumbersPersons = () => {
  totalPersons = parseInt(numbersPersons.value);
  calculate();
};

numbersPersons.addEventListener("input", setNumbersPersons);

// Calculate
const calculate = () => {
  // tip

  if (billValue <= 0 || isNaN(billValue)) {
    showError(errorMessageB);
    return;
  }
  if (totalPersons <= 0 || isNaN(totalPersons)) {
    showError(errorMessageP);
    return;
  }
  let subTip = (billValue * tip) / 100;
  totalBill = subTip / totalPersons;

  totalBill = totalBill.toFixed(2);
  totalTipPeroson.innerHTML = `${totalBill}`;

  //Total person
  amountPerson = (billValue + subTip) / totalPersons;
  amountPerson = amountPerson.toFixed(2);
  totalPerson.innerHTML = amountPerson;
  if (amountPerson > 0) {
    btnReset.disabled = false;
  }
};

// Reset
const resetBtn = () => {
  totalPerson.innerHTML = "0.00 ";
  totalTipPeroson.innerHTML = "0.00";
  bill.value = 0;
  numbersPersons.value = 1;
  billValue = 0.0;
  tip = 10;
  totalPersons = 1;
  tipPerson = 0;
  btnReset.disabled = true;
};
btnReset.addEventListener("click", resetBtn);

// SHow Error
const showError = (element) => {
  element.classList.add("error");
  element.style.opacity = 1;

  setTimeout(() => {
    element.style.opacity = 0;
  }, 3500);
};
