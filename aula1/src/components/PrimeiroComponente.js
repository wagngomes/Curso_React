import React from 'react'
import SegundoComponente from './SegundoComponente'

const PrimeiroComponente = () => {

    const nome = "Wagner Gomes"
    const aluno = {
        nome: "joão",
        curso: "Curso react",
    }
  return (
    <div>

        <h1>Primeiro componente</h1>
        <p>Olá!! {nome} seja bem vindo!</p>
        <p>Esta matrculado em {aluno.curso}</p>
        <SegundoComponente />
        <img src='logo192.png'></img>


    </div>
  )
}

export default PrimeiroComponente