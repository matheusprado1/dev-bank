const FinanceCard = ({ className, description, type, value, children, onDelete }) => {

  const formattedValue = Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <li className={className}>
      <div>
        <h3>{description}</h3>
        <span>{type}</span>
      </div>
      <div className="output__container">
        <p>{formattedValue}</p>
        <a onClick={onDelete} >{children}</a>
      </div>
    </li>
  )
}

export default FinanceCard;