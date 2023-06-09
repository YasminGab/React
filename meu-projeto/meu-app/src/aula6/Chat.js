import { useState } from "react";

export default function Chat({ contact }) {
    const [text, setText] = useState("");

    return (
        <section className="chat">
            <textarea className="textChat"
                value={text}
                placeholder={"Chat to " + contact.name}
                onChange={(e) => setText(e.target.value)}
            />
            <br />
            <button className="botaoEmail">Send to {contact.email}</button>
        </section>
    );
}