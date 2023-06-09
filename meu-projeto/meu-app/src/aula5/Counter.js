import {useEffect, useState} from 'react';

export default function Counter()
{
    const [number, setNumber] = useState(0);

    return(
        <>
        <div className='cardCounter'>
            <h1>{number}</h1>
            <button className="botaoToolbar" onClick={() =>{
                setNumber(number +3);
                // setNumber(n => n + 1);
                // setNumber(42);
                setTimeout(() =>
                {
                    // alert(number);
                }, 3000);
            }}>
                +3
            </button>
        </div>
        </>
    )
}