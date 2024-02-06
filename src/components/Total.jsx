const Total = ({ transactions }) => {
  // console.log(transactions)

  const handleTotal = () => {
    let total = transactions.reduce((acc, item) => {
      let value = Number(item.value);
      return item.type === "entry" ? acc + value : acc - value;
    }, 0);
    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  return (
    <div className="total__container">
      <div className="value__content">
        <h2>Valor total:</h2>
        <p>O valor se refere ao saldo</p>
      </div>
      <div className="total__content">
        <p className="total">
          {handleTotal()}
        </p>
      </div>
    </div>
  )
}

export default Total