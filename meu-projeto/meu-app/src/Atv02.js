import {Link} from "react-router-dom";
import ContadorPessoas from './components/ContadorPessoas';
import undo from '../src/assets/imagens/undo.png';

export default function Atv02()
{
    return(
        
        <>
            <div className='imgVoltar'>
            <Link to="/"> <img src={undo} alt='imagem de seta de retorno' /></Link>
            </div>
            <div className='tituloAtv'>
            <h1>Atividade 02</h1>
            </div>
            <div className="subtituloAtv">
                <h2>1 - Contador de Pessoas</h2>
                <ContadorPessoas/>
            </div>
        </>
    );
}
