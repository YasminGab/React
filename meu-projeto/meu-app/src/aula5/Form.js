import { useState } from "react";

export default function Form() {
    const [to, setTo] = useState('Alice');
    const [message, setMessage] = useState('Hello');

    function handleSubmit(e) {
        e.preventDefault();
        setTimeout(() => {
            alert('You said ${message} to ${to}');
        }, 5000);
    }

    return (
        <div className="cardForm">
            <form onSubmit={handleSubmit} >
                <div>
                    <label>
                        To:{' '}
                        <select
                            value={to}
                            onChange={e => setTo(e.target.value)}
                        >
                            <option value="Alice">Alice</option>
                            <option value="Bob">Bob</option>
                        </select>
                    </label>
                </div>
                <div>
                    <textarea
                        placeholder="Message"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Send</button>
                </div>

            </form>
        </div>
    );
}