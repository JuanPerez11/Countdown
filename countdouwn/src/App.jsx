import { useState } from 'react'
import './App.css'
import Countdown from './components/Countdown'

function App() {
  // const [count, setCount] = useState(0)

  const handleCountdownFinished = () => {
    // Esta función se ejecutará cuando la cuenta atrás finalice
    alert("¡Cuenta atrás finalizada!");
  };

  return (
    <div>
      <Countdown onCountdownFinished={handleCountdownFinished}></Countdown>
    </div>
   
        
    
  )
}

export default App
