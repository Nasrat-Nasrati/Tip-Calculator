function calculateTip() {
  //get the imput type values
  const billAmount = parseFloat(document.getElementById("bill-amount").value);

  const tipPrecentage = parseFloat(
    document.getElementById("tip-precentage").value
  );

  // calcuate the tip and total amount
  const tipAmount = billAmount * (tipPrecentage / 100);
  const totalAmount = tipAmount + billAmount;

  // display the results
  document.getElementById("tip-amount").textContent =
    `$` + tipAmount.toFixed(2);

  document.getElementById("total-amount").textContent =
    `$` + totalAmount.toFixed(2);
}
