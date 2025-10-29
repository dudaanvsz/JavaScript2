function Media({ nota1, nota2 }) {
  const media = (nota1 + nota2) / 2
  return (
    <>
      <h2>4- Cálculo da Média</h2>
      <p>Nota 1: {nota1}</p>
      <p>Nota 2: {nota2}</p>
      <p><strong>Média:</strong> {media}</p>
    </>
  )
}

export default Media