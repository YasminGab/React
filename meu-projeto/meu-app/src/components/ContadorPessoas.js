import React, { useState, useEffect } from 'react';


export default function App() {

    const [homens, setHomens] = useState(0); //variável de estado para homens, mulheres e total
    const [mulheres, setMulheres] = useState(0);
    const [total, setTotal] = useState(0);

    const atualizarTotal = () => { //atualiza o total
        setTotal(homens + mulheres);
    };

    useEffect(atualizarTotal, [homens, mulheres]);

    const incrementarHomens = () => {
        setHomens(homens + 1);
    };

    const decrementarHomens = () => {
        if (homens > 0) {
            setHomens(homens - 1);
        }
    };

    const incrementarMulheres = () => {
        setMulheres(mulheres + 1);
    };

    const decrementarMulheres = () => {
        if (mulheres > 0) {
            setMulheres(mulheres - 1);
        }
    };

    return (
        <div className="contador">
            <h1>Contador de Pessoas</h1>
            <div className="total">
                <h2>Total: {total}</h2>
            </div>
            <div className="genero">
                <h2>Homens: {homens}</h2>
                <button onClick={incrementarHomens}>+H</button>
                <button onClick={decrementarHomens}>-H</button>
            </div>
            <div className="genero">
                <h2>Mulheres: {mulheres}</h2>
                <button onClick={incrementarMulheres}>+M</button>
                <button onClick={decrementarMulheres}>-M</button>
            </div>
        </div>
    );
}