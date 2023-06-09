import {Link} from "react-router-dom";
import undo from '../src/assets/imagens/undo.png'


export default function Atv08()
{
    return(
        
        <>
            <div className='imgVoltar'>
            <Link to="/"> <img src={undo} alt='imagem de seta de retorno' /></Link>
            </div>
            <div className='tituloAtv'>
            <h1>Atividade 08</h1>
            </div>
        </>
    );
}