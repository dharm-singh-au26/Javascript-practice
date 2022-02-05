const monthsToPay = document.getElementById("MonthsToPay");
const monthlyPayment = document.getElementById("MonthlyPayment");

if (document.getElementById("MonthsToPay").value == "") {
  document.getElementById("MonthsToPay").value == "00.00";
}

monthsToPay.addEventListener("input", (event) => {
  let loanAmount = document.getElementById("loanAmount").value;
  let interestRate = document.getElementById("InterestRate").value;

  let TotalAmount =
    Number(loanAmount) + (Number(loanAmount) * Number(interestRate)) / 100;

  let monthsToPay = TotalAmount / Number(event.target.value);
  monthlyPayment.textContent = Math.floor(monthsToPay);
});
