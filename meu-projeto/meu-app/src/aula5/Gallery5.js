import { sculptureList } from './data';
import { useState, useEffect } from 'react';

export default function Gallery5() {
    const [index, setIndex] = useState(0);

    function handleClick() {
        if (index === sculptureList.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    let sculpture = sculptureList[index];

    return (
        <>
            <button onClick={handleClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name}</i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
            <p>
                {sculpture.description}
            </p>
        </>
    );

}