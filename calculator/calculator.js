window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const amount = document.querySelector('#loan-amount');
  const years = document.querySelector('loan-years');
  const rate = document.querySelector('loan-rate');
  const amounts = {amount: 30000, years: 6, rate: 5};
  amount.value = amounts.amount;
  years.value = amounts.years;
  rate.value = amounts.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthlyRate = (amounts.rate / 100) * 12;
  let yearsAmt = Math.round(amounts.years * 12)
  const monthlyPay = (amounts.amount * monthlyRate) / (1 - Math.pow((1 + monthlyRate), -yearsAmt)).toString();
  return monthlyPay;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let payAmt = document.querySelector('#monthly-payment');
  payAmt.innerHTML = '$' + monthly;
}
