import React from "react";
import { Link } from "react-router-dom";
import atom from '../src/assets/imagens/atom.png'


const Home = () =>
{
    
    return(
    
        <div className="containerAtividade">

            <h1>Atividades de React</h1>
            <div>
            <img src={atom} alt="ícone react"/>
            </div>
        
            <Link to= "/Atv01" className="cardAtividade" style={{ textDecoration: 'none' }} >
                <h2>Atividade 1</h2>
                <p>Aula 02: Data e Hora - Letreiro</p>
            </Link>

            <Link to= "/Atv02" className="cardAtividade" style={{ textDecoration: 'none' }}>
                <h2>Atividade 2</h2>
                <p>Aula 03: Contador de Pessoas</p>
            </Link>

            <Link to= "/Atv03" className="cardAtividade" style={{ textDecoration: 'none' }}>
                <h2>Atividade 3</h2>
                <p>Aula 04: Gallery - TodoList</p>
            </Link>

            <Link to= "/Atv04" className="cardAtividade" style={{ textDecoration: 'none' }}>
                <h2>Atividade 4</h2>
                <p>Aula 05: Toolbar - Gallery - Counter - Form - MovingDot - Form2 - Form3 - List - List 2 - ShapeEditor - Counter List - List 3 - List 4 - Bucket List</p>
            </Link>

            <Link to= "/Atv05" className="cardAtividade" style={{ textDecoration: 'none' }}>
                <h2>Atividade 5</h2>
                <p>Aula 06: Form Quiz - Form Ticket - Acoordion - Contact List e Chat</p>
            </Link>

            <Link to= "/Atv06" className="cardAtividade" style={{ textDecoration: 'none' }}>
                <h2>Atividade 6</h2>
                <p>Calculadora</p>
            </Link>

            <Link to= "/Atv07" className="cardAtividade" style={{ textDecoration: 'none' }}>
                <h2>Atividade 7</h2>
                <p>Jogo da Memória</p>
            </Link>

            <Link to= "/Atv08" className="cardAtividade" style={{ textDecoration: 'none' }}>
                <h2>Atividade 8</h2>
                <p>Carrinho de Compras</p>
            </Link>

        </div>
    );
}

export default Home;