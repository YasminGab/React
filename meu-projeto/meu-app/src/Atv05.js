import { Link } from "react-router-dom";
import undo from '../src/assets/imagens/undo.png'
import FormQuiz from "./aula6/FormQuiz";
import Accordion from "./aula6/Accordion";
import FormTicket from "./aula6/FormTicket";
import Menssenger from "./aula6/App"


export default function Atv05() {
    return (

        <>
            <div className='imgVoltar'>
                <Link to="/"> <img src={undo} alt='imagem de seta de retorno' /></Link>
            </div>
            <div className='tituloAtv'>
                <h1>Atividade 05</h1>
            </div>
            <div className="subtituloAtv">

                <h2>1 - FormQuiz </h2>
                <FormQuiz/>
                <br></br>
                <br></br>

                <h2>2 - FormTicket</h2>
                <FormTicket/>
                <br></br>
                <br></br>

                <h2>3 - Accordion</h2>
                <Accordion/>
                <br></br>
                <br></br>

                <h2>4 - ContactList e Chat</h2>
                <Menssenger/>
                <br></br>
                <br></br>
            </div>

        </>
    );
}