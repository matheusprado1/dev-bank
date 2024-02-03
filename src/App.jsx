import FinanceForm from "./components/FinanceForm";
import Header from "./components/Header";

import "./styles/components/app.sass"

function App() {


  return (
    <main>
      <Header children1="Dev " children2="Bank" />
      <div className="container">
        <div>
          <FinanceForm />
        </div>
        <div>
          Resumo Financeiro
        </div>
      </div>
    </main>

  )
}

export default App
