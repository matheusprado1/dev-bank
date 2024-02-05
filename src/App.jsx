import { useState } from "react";

import FinanceList from "./components/FinaceList";
import FinanceForm from "./components/FinanceForm";
import Header from "./components/Header";

import "./styles/components/app.sass"

function App() {
  const [transactions, setTransactions] = useState([]);

  return (
    <main>
      <Header children1="Dev " children2="Bank" />
      <div className="container">
        <div>
          <FinanceForm
            transactions={transactions}
            setTransactions={setTransactions} />
        </div>
        <div>
          Resumo Financeiro
          {transactions.length > 0 ? <FinanceList transactions={transactions} /> : <div>
            <h2>Você ainda não possui nenhum lançamento</h2>
          </div>}

        </div>
      </div>
    </main>
  )
}

export default App
