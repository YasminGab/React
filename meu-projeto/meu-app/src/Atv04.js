import {Link} from "react-router-dom";
import undo from '../src/assets/imagens/undo.png'
import Toolbar from "./aula5/Toolbar";
import Gallery5 from "./aula5/Gallery5";

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
            <div className="subtituloAtv">
                <h2>1 - Toolbar</h2>
                    <Toolbar/>
                <h2>2 - Gallery</h2>
                    <Gallery5/>
                <h2>3 - Counter</h2>
                <h2>4 - Form</h2>
                <h2>5 - MovingDot</h2>
                <h2>6 - Form 2</h2>
                <h2>7 - Form 3</h2>
                <h2>8 - List</h2>
                <h2>9 - List 2</h2>
                <h2>10 - ShapeEditor</h2>
                <h2>11 - Counter List</h2>
                <h2>12 - List 3 </h2>
                <h2>13 - List 4</h2>
                <h2>14 - Bucket</h2>
            </div>
        </>
    );
}