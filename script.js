const form = document.getElementById("expense-form");
const table = document.getElementById("expense-table");
const totalEl = document.getElementById("total");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function renderExpenses() {
    table.innerHTML = "<tr><th>Name</th><th>Amount</th></tr>";
    let total = 0;
    expenses.forEach(exp => {
        let row = table.insertRow();
        row.insertCell(0).innerText = exp.name;
        row.insertCell(1).innerText = "$" + exp.amount;
        total += exp.amount;
    });
    totalEl.innerText = "Total: $" + total;
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const amount = parseFloat(document.getElementById("amount").value);
    if (name && amount > 0) {
        expenses.push({ name, amount });
        renderExpenses();
        form.reset();
    }
});

renderExpenses();
