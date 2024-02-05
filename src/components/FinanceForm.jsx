import { useState } from "react";

import Label from "./Label";
import Input from "./Input";
import Option from "./Option";
import Button from "./Button";

const FinanceForm = ({ transactions, setTransactions }) => {
  const [formData, setFormData] = useState({
    description: "",
    value: "",
    type: ""
  });

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formData);

    setTransactions([...transactions, formData]);

    setFormData({
      description: "",
      value: "",
      type: ""
    })
  }

  return (
    <form onSubmit={submitForm}>
      <div>
        <Label htmlFor="description">
          Descrição
          <Input id="description" onChange={(e) => setFormData({
            ...formData,
            description: e.target.value
          })} type="text" name="description" placeholder="Digite aqui sua descrição"
            value={formData.description}
            required />
        </Label>
        <Label htmlFor="value">
          Valor (R$)
          <Input id="value" type="number" name="value" placeholder="1" onChange={(e) => setFormData({
            ...formData,
            value: e.target.value
          })}
            value={formData.value}
            required />
        </Label>
        <Label htmlFor="typeSelect">
          Tipo de valor
          <select name="types" id="typeSelect" onChange={(e) => setFormData({
            ...formData,
            type: e.target.value
          })}
            value={formData.type}
            required >
            <Option value="">Selecione uma opção</Option>
            <Option value="entry">Entrada</Option>
            <Option value="exit">Saída</Option>
          </select>
        </Label>
        <Button type="submit">
          Inserir valor
        </Button>
      </div>
    </form>
  )
}

export default FinanceForm;