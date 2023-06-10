import { Link } from "react-router-dom";
import undo from '../src/assets/imagens/undo.png'
import JogoMemoria from "./atividade7/JogoMemoria";

export default function Atv07() {
    return (

        <>
            <div className='imgVoltar'>
                <Link to="/"> <img src={undo} alt='imagem de seta de retorno' /></Link>
            </div>
            <div className='tituloAtv'>
                <h1>Atividade 07</h1>
            </div>
            <div className="subtituloAtv">
                <h2>1 - Jogo da Memória</h2>
                <JogoMemoria/>
            </div>
        </>
    );
}