import { useState } from 'react'
import viteLogo from '/vite.svg'
import { useIncrementar } from './funciones/useIncrementar'
//import './App.css'

function App() {
  //Ejemplo de uso de los hooks personalizados

  //En este arreglo se obtiene de una función externa (hook) el valor de 
  //regreso y la función implementada en ese mismo archivo (función que contiene el hook específico)
  const [resultado, fncIncrementar] = useIncrementar(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <div>
        <h2>Vite + React</h2>
      </div>
      <div className="card">        
        <button 
        onClick={(e)=>fncIncrementar(e)} 
        className='btn btn-primary'>
          count is {resultado}
        </button>
      </div>
      <p className="read-the-docs">
        Nunca pares de aprender...
      </p>
    </>
  )
}

export default App
