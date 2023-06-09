import { useState } from "react";

let nextId = 0;
export default function List() {
    const [name, setName] = useState("");
    const [artists, setArtists] = useState([]);
    return (
        <>
        <div className="cardList">
            <h1>Inspiring sculptors</h1>
            <input className="form2" value={name} onChange={(e) => setName(e.target.value)} />
            <button className="botaoList"
                onClick={() => {
                    setArtists([...artists, { id: nextId++, name: name }])
                }}
            >
                Add
            </button>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
            </div>
        </>
    );
}