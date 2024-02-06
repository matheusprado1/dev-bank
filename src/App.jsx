import { useState } from "react";

import Header from "./components/Header";
import FinanceForm from "./components/FinanceForm";
import FinanceList from "./components/FinaceList";
import Total from "./components/Total";

import "./styles/components/app.sass"

function App() {
  const [transactions, setTransactions] = useState([]);

  const handleDelete = (index) => {
    setTransactions(transactions.filter((transaction, i) => i !== index));
  }

  return (
    <div className="app-container">
      <Header title="Dev " subtitle="Bank" />
      <main>
        <div className="container">
          <div>
            <FinanceForm
              transactions={transactions}
              setTransactions={setTransactions} />
            <Total transactions={transactions} />
          </div>
          <div className="resume__container">
            <h4>Resumo Financeiro</h4>
            {transactions.length > 0 ? <FinanceList transactions={transactions} onDelete={handleDelete} /> : <div>
              <h2 className="resume__title">Você ainda não possui nenhum lançamento</h2>
            </div>
            }
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
