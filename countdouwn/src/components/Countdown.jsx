// Vamos a crear un componente "Countdown" que acepte una función por props, 
// que será la función que se va a ejecutar cuando finalice la cuenta atrás.
// El componente mostrará:
// 1. El tiempo restante de la cuenta atrás
// 2. Un botón que permite arrancar la cuenta atrás cuando NO está en marcha
// 3. Un botón que permite parar y reiniciar la cuenta atrás cuando SÍ está en marcha


import React, { useState, useRef } from "react";

function Countdown({ onCountdownFinished }) {
  const initialCountdown = 10;
  const [countdown, setCountdown] = useState(initialCountdown);
  const intervalRef = useRef();

  const startCountdown = () => {
    
    intervalRef.current = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          clearInterval(intervalRef.current);
          onCountdownFinished();
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);
  };


  const stopCountdown = () => {
    clearInterval(intervalRef.current);
  };

  const restartCountdown = () => {
    clearInterval(intervalRef.current);
    setCountdown(initialCountdown);
    startCountdown(initialCountdown)
  };

  return (
    <div>
      <p>Tiempo restante: {countdown} segundos</p>
      <button onClick={startCountdown}>Comenzar cuenta atrás</button>
      <button onClick={stopCountdown}>Detener cuenta atrás</button>
      <button onClick={restartCountdown}>Reiniciar cuenta atrás</button>

    </div>
  );
}

export default Countdown;