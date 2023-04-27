
import React, { useState } from 'react';
import womanloira from '../assets/imagens/womanloira.png'
import manbarba from '../assets/imagens/manbarba.png'
import reset1 from '../assets/imagens/reset1.png'
import addamarelo from '../assets/imagens/addamarelo.png'
import remove from '../assets/imagens/remove.png'


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
        <div className='card'>
            <div className="contador">
                <h1>Contador de Pessoas</h1>
                <div className="total">
                    <h2>Total: {homens + mulheres}</h2>
                    <div className='reset'>
                        <button onClick={resetar}>
                            <img src={reset1} alt='Ícone de reset' />
                        </button>
                    </div>
                </div>
                <div>
                    <div className="genero">
                        <img src={manbarba} alt="Ícone de Mulheres" />
                        <h2>Homens: {homens}</h2>
                        <div className='botaoH'>
                            <button onClick={() => incrementar('H')}>
                                <img src={addamarelo} alt='ìcone de adicionar'/>
                            </button>
                            <button onClick={() => decrementar('H')}>
                                <img src={remove} alt='ícone de remover'/>
                            </button>
                        </div>
                    </div>
                    <div className="genero">
                        <img src={womanloira} alt="Ícone de Mulheres" />
                        <h2>Mulheres: {mulheres}</h2>
                        <div className='botaoM'>
                            <button onClick={() => incrementar('M')}>
                                <img src={addamarelo} alt='Ìcone de adicionar'/>
                            </button>
                            <button onClick={() => decrementar('M')}>
                                <img src={remove} alt='Ícone de remover'/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
