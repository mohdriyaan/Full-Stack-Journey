const balanceEl = document.getElementById("balance");
const incomeAmountEl = document.getElementById("income-amount");
const expenseAmountEl = document.getElementById("expense-amount");
const transactionListEl = document.getElementById("transaction-list");
const transactionFormEl = document.getElementById("transaction-form");
const descriptionEl = document.getElementById("description");
const amountEl = document.getElementById("amount");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

transactionFormEl.addEventListener("submit", addTransaction);

transactionListEl.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const id = Number(e.target.dataset.id);
    removeTransaction(id);
  }
});

function addTransaction(e) {
  e.preventDefault();

  const description = descriptionEl.value.trim();
  const amount = parseFloat(amountEl.value);

  if (!description || isNaN(amount) || amount === 0) {
    alert("Please enter valid data.");
    return;
  }

  transactions.push({
    id: Date.now(),
    description,
    amount,
  });

  saveAndRender();
  transactionFormEl.reset();
}

function updateTransactionList() {
  transactionListEl.innerHTML = "";

  const fragment = document.createDocumentFragment();
  const reversed = [...transactions].reverse();

  reversed.forEach((transaction) => {
    fragment.appendChild(createTransactionElement(transaction));
  });

  transactionListEl.appendChild(fragment);
}

function createTransactionElement(transaction) {
  const li = document.createElement("li");
  li.classList.add("transaction", transaction.amount > 0 ? "income" : "expense");

  const desc = document.createElement("span");
  desc.textContent = transaction.description;

  const right = document.createElement("span");
  right.textContent = formatCurrency(transaction.amount);

  const btn = document.createElement("button");
  btn.className = "delete-btn";
  btn.dataset.id = transaction.id;
  btn.textContent = "x";

  right.appendChild(btn);
  li.append(desc, right);

  return li;
}

function updateSummary() {
  const balance = transactions.reduce((acc, t) => acc + t.amount, 0);
  const income = transactions.filter(t => t.amount > 0).reduce((a, b) => a + b.amount, 0);
  const expenses = transactions.filter(t => t.amount < 0).reduce((a, b) => a + b.amount, 0);

  balanceEl.textContent = formatCurrency(balance);
  incomeAmountEl.textContent = formatCurrency(income);
  expenseAmountEl.textContent = formatCurrency(expenses);
}

function formatCurrency(number) {
  return new Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency: "USD",
  }).format(number);
}

function removeTransaction(id) {
  transactions = transactions.filter((t) => t.id !== id);
  saveAndRender();
}

function saveAndRender() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
  updateTransactionList();
  updateSummary();
}

// Initial render
saveAndRender();
