function Salario({ salario, aumento }) {
  const novoSalario = salario + aumento
  return (
    <>
      <h2>3- Cálculo de Salário</h2>
      <p>Salário atual: R$ {salario}</p>
      <p>Aumento: R$ {aumento}</p>
      <p><strong>Novo salário:</strong> R$ {novoSalario}</p>
    </>
  )
}

export default Salario