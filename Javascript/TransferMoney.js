document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from the API
    fetch("https://9df3f92033bb4c948110fe160f3b906b.api.mockbin.io/")
        .then(response => response.json())
        .then(data => {
            // Call a function to populate the table with the received data
            populateTable(data);
        })
        .catch(error => console.error("Error fetching data:", error));

    // Continue with the rest of your logic
    // Function to populate the table
    function populateTable(data) {
        var tableBody = document.getElementById("table").getElementsByTagName('tbody')[0];

        // Loop through the data and create a row for each item
        data.forEach(function(item) {
            var row = tableBody.insertRow(tableBody.rows.length);

            // Add cells with data for each column
            var cell1 = row.insertCell(0);
            cell1.innerHTML = item.id;

            var cell2 = row.insertCell(1);
            cell2.innerHTML = item.name;
            
            var cell3 = row.insertCell(2);
            cell3.innerHTML = item.email;

            var cell4 = row.insertCell(3);
            cell4.innerHTML = item.balance;

            var cell5 = row.insertCell(4);
            var transferButton = document.createElement("button");
            transferButton.textContent = "Transfer";
            // transferButton.classList.add("transfer-button"); 

//             First, select the element by using DOM methods such as document.querySelector(). The selected element has the style property that allows you to set the various styles to the element.
// Then, set the values of the properties of the style object.

            // transferButton.style.backgroundColor = 'gray';
          
            // Adding individual style is quite verbose. Fortunately, you can add set multiple styles at once by using the cssText property:
            transferButton.style.cssText += 'color:white;background-color:gray;';
           
            transferButton.addEventListener("click", function () {
                
                // Call a function to handle the transfer action
                transferFunds(item, 100);
            });
            cell5.appendChild(transferButton);
            // Add more cells as needed based on your data structure
        });
    }
    function transferFunds(selectedItem,balance) {
        // Add your logic for transferring funds here
        
        const queryString = `id=${selectedItem.id}&name=${selectedItem.name}&email=${selectedItem.email}&balance=${selectedItem.balance}`;
        window.location.href = `TransactionPage.html?${queryString}`;
        console.log("Transfer funds for user with ID:", selectedItem,balance);

    }
});
