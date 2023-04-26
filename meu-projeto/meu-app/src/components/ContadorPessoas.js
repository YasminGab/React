// import React, { useState, useEffect } from 'react';


// export default function App() {

//     const [homens, setHomens] = useState(0); //variável de estado para homens, mulheres e total
//     const [mulheres, setMulheres] = useState(0);
//     const [total, setTotal] = useState(0);

//     const atualizarTotal = () => { //atualiza o total
//         setTotal(homens + mulheres);
//     };

//     useEffect(atualizarTotal, [homens, mulheres]);

//     const incrementarHomens = () => {
//         setHomens(homens + 1);
//     };

//     const decrementarHomens = () => {
//         if (homens > 0) {
//             setHomens(homens - 1);
//         }
//     };

//     const incrementarMulheres = () => {
//         setMulheres(mulheres + 1);
//     };

//     const decrementarMulheres = () => {
//         if (mulheres > 0) {
//             setMulheres(mulheres - 1);
//         }
//     };

//     return (
//         <div className="contador">
//             <h1>Contador de Pessoas</h1>
//             <div className="total">
//                 <h2>Total: {total}</h2>
//             </div>
//             <div className="genero">
//                 <h2>Homens: {homens}</h2>
//                 <button onClick={incrementarHomens}>+H</button>
//                 <button onClick={decrementarHomens}>-H</button>
//             </div>
//             <div className="genero">
//                 <h2>Mulheres: {mulheres}</h2>
//                 <button onClick={incrementarMulheres}>+M</button>
//                 <button onClick={decrementarMulheres}>-M</button>
//             </div>
//         </div>
//     );
// }

import React, { useState } from 'react';

export default function App() {

    const [homens, setHomens] = useState(0); //variável de estado para homens e mulheres
    const [mulheres, setMulheres] = useState(0);

    const resetar = () => { //reseta as quantidades de homens e mulheres para zero
        setHomens(0);
        setMulheres(0);
    };

    const incrementar = (genero) => { //incrementa a quantidade do gênero passado como parâmetro
        if (genero === 'H') {
            setHomens(homens + 1);
        } else if (genero === 'M') {
            setMulheres(mulheres + 1);
        }
    };

    const decrementar = (genero) => { //decrementa a quantidade do gênero passado como parâmetro
        if (genero === 'H' && homens > 0) {
            setHomens(homens - 1);
        } else if (genero === 'M' && mulheres > 0) {
            setMulheres(mulheres - 1);
        }
    };

    return (
        <div className="contador">
            <h1>Contador de Pessoas</h1>
            <div className="total">
                <h2>Total: {homens + mulheres}</h2>
                <button onClick={resetar}>Resetar</button>
            </div>
            <div className="genero">
                <h2>Homens: {homens}</h2>
                <button onClick={() => incrementar('H')}>+H</button>
                <button onClick={() => decrementar('H')}>-H</button>
            </div>
            <div className="genero">
                <h2>Mulheres: {mulheres}</h2>
                <button onClick={() => incrementar('M')}>+M</button>
                <button onClick={() => decrementar('M')}>-M</button>
            </div>
        </div>
    );
}
