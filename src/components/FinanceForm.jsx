import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import Option from "./Option";

const FinanceForm = () => {
  return (
    <form>
      <div>
        <Label htmlFor="description">
          Descrição
          <Input id="description" type="text" name="description" placeholder="Digite aqui sua descrição" />
        </Label>
        <Label htmlFor="value">
          Valor (R$)
          <Input id="value" type="number" name="value" placeholder="1" />
        </Label>
        <Label htmlFor="typeSelect">
          Tipo de valor
          <select name="types" id="typeSelect">
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