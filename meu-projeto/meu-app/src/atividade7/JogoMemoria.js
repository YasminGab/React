import React, { useState, useEffect } from 'react';
import brazil from '../assets/imagens/brazil.png';
import emirates from '../assets/imagens/emirates.png';
import canada from '../assets/imagens/canada.png';
import kazakhstan from '../assets/imagens/kazakhstan.png';
import israel from '../assets/imagens/israel.png';
import spain from '../assets/imagens/spain.png';
import globe from '../assets/imagens/globe.png';

const JogoMemoria = () => {
    const [cards, setCards] = useState([
        { id: 1, value: brazil, flipped: false, matched: false },
        { id: 2, value: canada, flipped: false, matched: false },
        { id: 3, value: kazakhstan, flipped: false, matched: false },
        { id: 4, value: emirates, flipped: false, matched: false },
        { id: 5, value: kazakhstan, flipped: false, matched: false },
        { id: 6, value: spain, flipped: false, matched: false },
        { id: 7, value: brazil, flipped: false, matched: false },
        { id: 8, value: israel, flipped: false, matched: false },
        { id: 9, value: emirates, flipped: false, matched: false },
        { id: 10, value: spain, flipped: false, matched: false },
        { id: 11, value: canada, flipped: false, matched: false },
        { id: 12, value: israel, flipped: false, matched: false }
    ]);

    const [flippedCards, setFlippedCards] = useState([]);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        checkMatch();
        checkGameOver();
    }, [flippedCards]);

    const handleCardClick = (card) => {
        if (!card.flipped && flippedCards.length < 2 && !gameOver) {
            const updatedCards = cards.map((c) =>
                c.id === card.id ? { ...c, flipped: true } : c
            );
            setCards(updatedCards);
            setFlippedCards([...flippedCards, card]);
        }
    };

    const checkMatch = () => {
        if (flippedCards.length === 2) {
            const [card1, card2] = flippedCards;
            if (card1.value === card2.value) {
                setCards(
                    cards.map((c) =>
                        c.id === card1.id || c.id === card2.id
                            ? { ...c, matched: true }
                            : c
                    )
                );
                setFlippedCards([]);
            } else {
                setTimeout(() => {
                    setCards(
                        cards.map((c) =>
                            c.id === card1.id || c.id === card2.id
                                ? { ...c, flipped: false }
                                : c
                        )
                    );
                    setFlippedCards([]);
                }, 1000);
            }
        }
    };

    const checkGameOver = () => {
        const matchedCards = cards.filter((card) => card.matched);
        if (matchedCards.length === cards.length) {
            setGameOver(true);
        }
    };

    return (
        <div className='cardJogoMemoria'>
            {gameOver && <p>Parabéns, você joga muito bem!</p>}
            <div className="jogo-memoria-container">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className={`card ${card.flipped || card.matched ? 'flipped' : ''}`}
                        onClick={() => handleCardClick(card)}
                        style={{
                            backgroundImage: `url(${card.flipped || card.matched ? card.value : globe})`,
                            backgroundSize: 'cover',
                        }}
                    ></div>
                ))}
            </div>
            
        </div>
    );
};

export default JogoMemoria;

