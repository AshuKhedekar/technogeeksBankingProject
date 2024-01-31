document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from the API
    fetch("https://9df3f92033bb4c948110fe160f3b906b.api.mockbin.io/")
        .then(response => response.json())
        .then(data => {
            // Call a function to populate the table with the received data
            populateTable(data);
        })
        .catch(error => console.error("Error fetching data:", error));

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
            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", function () {
                // Call a function to handle the delete action
                deleteRecord(row);
            });
            cell5.appendChild(deleteButton);
            // Add more cells as needed based on your data structure
        });
    }
    function deleteRecord(row) {
        // Remove the entire row from the table
        row.remove();
    }
});
