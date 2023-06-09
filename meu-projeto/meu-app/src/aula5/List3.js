import { useState } from "react";

let nextId = 3;

const initialArtistis = [
    { id: 0, name: "Marta Colvin Andrade" },
    { id: 1, name: "Lamidi Olonade Fakeye" },
    { id: 2, name: "Louise Nevelson" },
]

export default function List3() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState(initialArtistis);

    function handleClick() {
        const insertAt = 1;
        const nextArtists = [
            ...artists.slice(0, insertAt),
            { id: nextId++, name: name },
            ...artists.slice(insertAt)
        ]
        setArtists(nextArtists)
        setName('')
    }
    return (
        <>
            <div className="cardList3">
                <input className="form2" value={name} onChange={e => setName(e.target.value)} />
                <button className="botaoconterList" onClick={handleClick}>Insert</button>
                <ul className="ulList3">
                    {artists.map(artist => (<li key={artist.id}>{artist.name}</li>))}
                </ul>
            </div>
        </>
    )
}