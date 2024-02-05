const FinanceCard = ({ className, description, type, value, children }) => {

  return (
    <li className={className}>
      <div>
        <h3>{description}</h3>
        <span>{type}</span>
      </div>
      <div>
        <p>{value}</p>
        <p>{children}</p>
      </div>
    </li>
  )
}

export default FinanceCard