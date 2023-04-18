import React, { useState, useEffect } from "react";

function Letreiro() {
  const [texto, setTexto] = useState(""); //define uma variável de estado para o texto
  const [indice, setIndice] = useState(0); //define uma variável para o índice da letra

  useEffect(() => {
    // .useEffect atualiza o texto do letreiro a cada 150ms até que a mensagem inteira tenha sido exibida
    const mensagem = "Venha estudar na Fatec!";
    if (indice < mensagem.length) {
      const timer = setTimeout(() => {
        setTexto((textoAnterior) => textoAnterior + mensagem[indice]); //adiciona a letra correspondente ao texto do letreiro
        setIndice((indiceAnterior) => indiceAnterior + 1); //atualiza o índice
      }, 150);
      return () => clearTimeout(timer); //limpa o cronômetro para uma função de retorno de chamada que foi configurada com o método setTimeout()
    }
  }, [texto, indice]);

  return (
    <h1
      style={{
        color: "#9120bd",
        fontFamily: "Roboto Mono",
        textAlign: "center",
        fontSize: "100px",
      }}
    >
      {texto}
    </h1>
  );
}

export default Letreiro;
