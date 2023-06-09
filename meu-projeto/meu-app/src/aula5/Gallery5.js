import { sculptureList } from './data';
import { useState, useEffect } from 'react';
import Clock from "./Clock";

export default function Gallery5() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleClick() {
        if (index === sculptureList.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];

    return (
        <>
            <div className="cardGallery">
                <button className="botaoToolbar" onClick={handleClick}>
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
                <div>
                    <button className="botaoToolbar" onClick={handleMoreClick}>
                        {showMore ? "Show" : "Show"} details
                    </button>
                    {showMore && <p>{sculpture.description}</p>}
                </div>
            </div>
        </>
    );
}
