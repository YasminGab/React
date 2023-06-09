import { useState } from "react";

export default function FormQuiz() {
    const [answer, setAnswer] = useState('')
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if (status === 'success') {
        return <h1>That's right!</h1>
    }
    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer)
            setStatus('success')
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    }
    function handleTextareaChange(e) {
        setAnswer(e.target.value);
    }
    return (
        <>
            <div className="cardFormQuiz">
                <h2>City quiz!</h2>
                <p>In which city is there a billboard that turns air into drinkable water?</p>
                <form onSubmit={handleSubmit}>
                    <textarea className="labelForm" value={answer} onChange={handleTextareaChange} disabled={status === 'submitting'}></textarea><br />
                    <button className="botaoToolbar" disabled={answer.length === 0 || status == 'submitting'}>Submit</button>
                    {error !== null && <p className="Error">{error.message}</p>}
                </form>
            </div>
        </>
    )
}

function submitForm(answer) {
    return new Promise((resolve, reject) => {
        let shouldError = answer.toLowerCase() !== 'lima';
        if (shouldError) {
            reject(new Error('Try again'))
        } else {
            resolve()
        }
    }, 1500)
}