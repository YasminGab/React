import {Link} from "react-router-dom";
import Gallery from './aula4/Gallery';
import TodoList from "./aula4/TodoList";
import undo from '../src/assets/imagens/undo.png';

export default function Atv03()
{
    return(
        
        <>
            <div className='imgVoltar'>
            <Link to="/"> <img src={undo} alt='imagem de seta de retorno' /></Link>
            </div>
            <div className='tituloAtv'>
            <h1>Atividade 03</h1>
            </div>
            <div className="subtituloAtv">
                <h2>1- Gallery</h2>
                <Gallery/>
                <h2>2- TodoList</h2>
                <TodoList/>
            </div>
        </>
    );
}