const Input = ({ type, placeholder, name, id, onChange, required, value }) => {
  return (
    <input type={type} placeholder={placeholder} name={name} id={id} onChange={onChange} required={required} value={value} />
  )
}

export default Input;