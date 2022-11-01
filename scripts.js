const Modal = {
  open() {
    // Abrir modal
    // Adicionar a class active ao modal
    document.querySelector(".modal-overlay").classList.add("active");
  },
  close() {
    // fechar o modal
    // remover a class active do modal
    document.querySelector(".modal-overlay").classList.remove("active");
  },
};

const transactions = [
  {
    id: 1,
    description: "Luz",
    amount: -500000,
    date: "30/10/2022",
  },
  {
    id: 2,
    description: "Website",
    amount: 500000,
    date: "30/10/2022",
  },
  {
    id: 3,
    description: "Internet",
    amount: -20000,
    date: "30/10/2022",
  },
  {
    id: 4,
    description: "App",
    amount: 20000,
    date: "30/10/2022",
  },
];

const Transaction = {
  all: transactions,
  add(transaction) {
      Transaction.all.push(transaction)

      console.log(Transaction.all)
  },

  incomes() {
    let income = 0;

    Transactional.all.forEach((transaction) => {
      if (transaction.amount > 0) {
        income += transaction.amount;
      }
    });
    return income;
  },
  expenses() {
    let expense = 0;

    Transaction.all.forEach((transaction) => {
      if (transaction.amount < 0) {
        expense += transaction.amount;
      }
    });
    return expense;
  },
  total() {
    return Transaction.incomes() + Transaction.expenses();
  },
};

const DOM = {
  transactionsContainer: document.querySelector("#data-table tbody"),

  addTransaction(transaction, index) {
    const tr = document.createElement("tr");
    tr.innerHTML = DOM.innerHTMLTransaction(transaction);

    DOM.transactionsContainer.appendChild(tr);

    console.log(tr.innerHTML);
  },
  innerHTMLTransaction(transaction) {
    const CSSclass = transaction.amount > 0 ? "income" : "expense";

    const amount = Utils.formatCurrency(transaction.amount);

    const html = `     
     <td class="description">${transaction.description}</td>
     <td class="${CSSclass}">${amount}</td>
     <td class="date">${transaction.date}</td>
     <td>
       <img src="./assets/minus.svg" alt="Remover transação" />
     </td>    
     `;
    return html;
  },

  updateBalance() {
    document.getElementById("incomeDisplay").innerHTML = Utils.formatCurrency(Transaction.incomes());
    document.getElementById("expenseDisplay").innerHTML = Utils.formatCurrency(Transaction.expenses());
    document.getElementById("totalDisplay").innerHTML = Utils.formatCurrency(Transactions.total());
  },

  clearTransactions () {
      DOM.transactionsContainer.innerHTML = ""
  }
};

const Utils = {
  formatCurrency(value) {
    const signal = Number(value) < 0 ? "-" : "";

    value = String(value).replace(/\D/g, "");

    value = Number(value) / 100;

    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return signal + value;
  },
};

const App = {
  init() {
    
    Transaction.all.forEach(transaction => {
      DOM.addTransaction(transaction);
    })
    
    DOM.updateBalance();


},
  reload() {
    DOM.clearTransactions();
    DOM.init();

  },
}

App.init()

Transaction.add ({
  id:39,
  description: 'Alo',
  amount: 200,
  date: "30/10/2022",
})




