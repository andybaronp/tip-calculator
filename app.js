const bill = document.getElementById("bill");
const numbersPersons = document.getElementById("numbersPersons");

const radios = document.querySelectorAll("input[type=radio]");
let totalResult = document.getElementById("total-result");
let billValue = 0.0;
let totalBill = 0;
let totalPersons;

//Bill
bill.addEventListener("input", () => {
  billValue = parseFloat(bill.value);
});
numbersPersons.addEventListener("input", () => {
  totalPersons = parseInt(numbersPersons.value);
});

//Radios
radios.forEach((radioImput) => {
  radioImput.addEventListener("click", () => {
    let tip = parseInt(radioImput.value);

    totalBill = (billValue * tip) / 100;
    let totalTip = totalBill / totalPersons;
    totalTip = totalTip.toFixed(2);
    totalResult.innerHTML = `${totalTip}`;
  });
});
const getTotalperson = () => {
  let total = (billValue + totalBill) / totalPersons;
  total = total.toFixed(2);
  const totalValue = document.getElementById("total");
  totalValue.innerHTML = `${total}`;
};

numbersPersons.addEventListener("change", getTotalperson);
