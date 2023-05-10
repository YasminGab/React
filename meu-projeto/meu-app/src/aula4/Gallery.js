// function Profile1(){
//     return(

//         <img
//             // src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson"
//             src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart"
//         />

//     );
// }

export function Profile1() {
    
    return (

        <img
            src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart"
        />

    );
}

export default function Gallery() {
    return (
        
        <section>
            <h1>Amazing scientists</h1>
            <Profile1 />
            <Profile1 />
            <Profile1 />
        </section>
    );
}


