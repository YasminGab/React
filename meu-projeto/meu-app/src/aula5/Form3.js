import { useState } from "react";

export default function Form3() {
    const [person, setPerson] = useState({
        name: "Niki de Saint Phale",
        artwork: {
            title: "Blue Nana",
            city: "Hamburg",
            image: "https://i.imgur.com/Sd1AgUOm.jpg",
        },
    });
    function handleNameChange(e) {
        setPerson({
            ...person,
            name: e.target.value,
        });
    }
    function handleTitleChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                title: e.target.value,
            },
        });
    }
    function handleCityChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                city: e.target.value,
            },
        });
    }
    function handleImageChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                image: e.target.value,
            },
        });
    }
    return (
        <>
        <div className="cardForm3">
            <label>
                Name:
                <input className="form2" value={person.name} onChange={handleNameChange} />
            </label>
            <br></br>
            <label>
                Title:
                <input className="form2" value={person.artwork.title} onChange={handleTitleChange} />
            </label>
            <br></br>
            <label>
                City:
                <input className="form2" value={person.artwork.city} onChange={handleCityChange} />
            </label>
            <br></br>
            <label>
                Image:
                <input className="form2" value={person.artwork.image} onChange={handleImageChange} />
            </label>
            <br></br>
            <p>
                <i>{person.artwork.title}</i>
                {' by '}
                {person.name}
                <br />
                (localed in {person.artwork.city})
            </p>
            <img src={person.artwork.image} alt={person.artwork.title} />
            </div>
        </>
    );
}