function Subtracao({ n1, n2 }) {
  const resultado = n1 - n2
  return (
    <>
      <h2>7- Subtração</h2>
      <p>{n1} - {n2} = <strong>{resultado}</strong></p>
    </>
  )
}

export default Subtracao