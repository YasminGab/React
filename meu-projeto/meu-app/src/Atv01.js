import { Link } from "react-router-dom";
import Relogio from './components/Relogio';
import Letreiro from './components/Letreiro';
import undo from '../src/assets/imagens/undo.png'

export default function Atv01() {
    return (

        <>
            <div className='imgVoltar'>
                <Link to="/"> <img src={undo} alt='imagem de seta de retorno' /></Link>
            </div>
            <div className='tituloAtv'>
                <h1>Atividade 01</h1>
            </div>
            <div className="subtituloAtv">
            <h2>1 - Data e Hora</h2>
            <Relogio />
            <h2>2 - Letreiro </h2>
            <Letreiro />
            </div>
        </>
    );
}