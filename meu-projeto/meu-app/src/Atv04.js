import {Link} from "react-router-dom";
import undo from '../src/assets/imagens/undo.png'
import Toolbar from "./aula5/Toolbar";

export default function Atv04()
{
    return(
        
        <>
            <div className='imgVoltar'>
            <Link to="/"> <img src={undo} alt='imagem de seta de retorno' /></Link>
            </div>
            <div className='tituloAtv'>
            <h1>Atividade 04</h1>
            </div>
            <Toolbar/>
        </>
    );
}