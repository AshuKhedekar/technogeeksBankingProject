document.addEventListener("DOMContentLoaded", function () {
    // Get the query string parameters
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    // Retrieve data from the parameters
    const id = urlParams.get('id');
    const name = urlParams.get('name');
    const email = urlParams.get('email');
    const balance = urlParams.get('balance');

    // Display data in a new table
    displayData(id, name, email, balance);
});

function displayData(id, name, email, balance) {
    // Get the table body where you want to display the data
    var tableBody = document.getElementById("table").getElementsByTagName('tbody')[0];

    // Create a new row
    var row = tableBody.insertRow(0);

    // Add cells with data for each column
    var cell1 = row.insertCell(0);
    cell1.innerHTML = id;

    var cell2 = row.insertCell(1);
    cell2.innerHTML = name;

    var cell3 = row.insertCell(2);
    cell3.innerHTML = email;

    var cell4 = row.insertCell(3);
    cell4.innerHTML = balance;
}
  document.getElementById('transferBtn').addEventListener('click', function () {
    // Get selected user and entered amount
    var senderDropdown = document.getElementById('sender');
    var recipientDropdown = document.getElementById('recipient');

    var sender = senderDropdown.options[senderDropdown.selectedIndex].value;
    var recipient = recipientDropdown.options[recipientDropdown.selectedIndex].value;
    var enteredAmount = parseFloat(document.getElementById('amount').value);


    // Validate the selected user
    if (sender === '' || recipient === '' || sender === recipient) {
        alert('Please select valid sender and recipient accounts.');
        return;
      }
  
      if (isNaN(enteredAmount) || enteredAmount <= 0) {
        alert('Please enter a valid positive amount.');
        return;
      }

      var senderBalance = parseFloat(senderDropdown.options[senderDropdown.selectedIndex].dataset.balance);
      var recipientBalance = parseFloat(recipientDropdown.options[recipientDropdown.selectedIndex].dataset.balance);

      if (enteredAmount > senderBalance) {
        alert('Insufficient balance in the sender account.');
        return;
      }
      var newSenderBalance = senderBalance - enteredAmount;
      var newRecipientBalance = recipientBalance + enteredAmount;

      senderDropdown.options[senderDropdown.selectedIndex].dataset.balance = newSenderBalance;
    recipientDropdown.options[recipientDropdown.selectedIndex].dataset.balance = newRecipientBalance;
    document.getElementById("senderInfo").textContent = "Sender: " + newSenderBalance ;
    document.getElementById("receiverInfo").textContent = "Receiver: " + newRecipientBalance;

    
    alert('Transfer Successful: ' + enteredAmount + ' from ' + sender + ' to ' + recipient + '. New balances: Sender - ' + newSenderBalance + ', Recipient - ' + newRecipientBalance);  });

   
