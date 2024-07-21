document.getElementById('calculateButton').addEventListener('click', function() {
  const billAmount = parseFloat(document.getElementById('billAmount').value);
  const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

  if (isNaN(billAmount) || billAmount <= 0) {
    alert('Please enter a valid bill amount.');
    return;
  }

  const tipAmount = (billAmount * tipPercentage) / 100;
  const totalAmount = billAmount + tipAmount;

  document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
});
