function Profile1(){
    return(
        <div>
        <img
            src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson"
        />
        </div>
    );
}

export default function Gallery(){
    return(
        <section>
            <h1>Amazing scientists</h1>
            <Profile1/>
            <Profile1/>
            <Profile1/>
        </section>
    );
}