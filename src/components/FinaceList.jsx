import FinanceCard from "./FincanceCard"

const FinanceList = ({ transactions, onDelete }) => {

  return (
    <ul>
      {transactions.map((transaction, index) => {
        if (transaction.type === "entry") {
          return (
            <FinanceCard
              key={index}
              description={transaction.description}
              type="Entrada"
              value={transaction.value}
              className="card__entry"
              onDelete={() => onDelete(index)}
            >
              Excluir
            </FinanceCard>
          );
        } else {
          return (
            <FinanceCard
              key={index}
              description={transaction.description}
              type="Saída"
              value={transaction.value}
              className="card__exit"
              onDelete={() => onDelete(index)}
            >
              Excluir
            </FinanceCard>
          );
        }
      })}
    </ul>
  )
}

export default FinanceList
