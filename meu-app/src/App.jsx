import { useState } from 'react'
import './App.css'
import Mensagem from './mensagem.jsx'
import Salario from './salario.jsx'
import Media from './media.jsx'
import Area from './area.jsx'
import Soma from './soma.jsx'
import Subtracao from './subtracao.jsx'
import Multiplicacao from './multiplicacao.jsx'

function App() {
  const [contador, setContador] = useState(0)
  return (
   <>
    {/* 1--------------------------- */}
    <Mensagem nome="Maria"/>
    
    {/* 2--------------------------- */}
    <h2>2- Contador: {contador}</h2>
    <div>
      <button style={{ backgroundColor: "green", color: "white"}} onClick={() => setContador(contador + 1)}> Aumentar</button>
      <button style={{ backgroundColor: "red", color: "white"}} onClick={() => setContador(contador - 1)}> Diminuir</button>
      <button style={{ backgroundColor: "black", color: "white"}} onClick={() => setContador(0)}> Zerar</button>
    </div>

    {/* 3--------------------------- */}
    <div>
      <Salario salario={2500} aumento={350} />
    </div>

    {/* 4--------------------------- */}
    <div>
      <Media nota1={8} nota2={6} />
    </div>

    {/* 5--------------------------- */}
    <div>
      <Area base={5} altura={10} />
    </div>

    {/* 6--------------------------- */}
    <div>
      <Soma n1={3} n2={7} />
    </div>

    {/* 7--------------------------- */}
    <div>
      <Subtracao n1={10} n2={4} />
    </div>

    {/* 8--------------------------- */}
    <div>
      <Multiplicacao n1={6} n2={9} />
    </div>

    </>
  )
}

export default App