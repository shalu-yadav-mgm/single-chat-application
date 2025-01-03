document.getElementById("donation-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form input values
    const donorName = document.getElementById("donor-name").value;
    const donorPhone = document.getElementById("donor-phone").value;
    const donationAmount = document.getElementById("donation-amount").value;
    const donationDate = document.getElementById("donation-date").value;

    // Check if all fields are filled
    if (donorName && donorPhone && donationAmount && donationDate) {
        addDonation(donorName, donorPhone, donationAmount, donationDate);

        // Clear form fields
        document.getElementById("donor-name").value = "";
        document.getElementById("donor-phone").value = "";
        document.getElementById("donation-amount").value = "";
        document.getElementById("donation date").value = "";
    } else {
        alert("Please fill in all fields.");
    }
});

function addDonation(name, phone, amount, date) {
    const tableBody = document.querySelector("#donation-table tbody");

    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = name;
    row.appendChild(nameCell);

    const phoneCell = document.createElement("td");
    phoneCell.textContent = phone;
    row.appendChild(phoneCell);

    const amountCell = document.createElement("td");
    amountCell.textContent = `$${parseFloat(amount).toFixed(2)}`;
    row.appendChild(amountCell);

    const dateCell = document.createElement("td");
    dateCell.textContent = date;
    row.appendChild(dateCell);

    tableBody.appendChild(row);
}
