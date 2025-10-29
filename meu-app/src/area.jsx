function Area({ base, altura }) {
  const area = base * altura
  return (
    <>
      <h2>5- Área do Retângulo</h2>
      <p>Base: {base}</p>
      <p>Altura: {altura}</p>
      <p><strong>Área:</strong> {area}</p>
    </>
  )
}

export default Area