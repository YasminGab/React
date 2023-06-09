import { useState } from "react";

export default function Form2() {
    const [person, setPerson] = useState({
        firstName: "Barbara",
        lastName: "Hepworth",
        email: "bhepworth@sculpture.com",
    });
    function handleFirstName(e) {
        setPerson({
            ...person,
            firstName: e.target.value,
        });
    }
    function handleLastName(e) {
        setPerson({
            ...person,
            lastName: e.target.value,
        });
    }
    function handleEmail(e) {
        setPerson({
            ...person,
            email: e.target.value,
        });
    }
    return (
        <>
            <div className="cardForm2">
                <div>
                    <label>
                        First name:
                        <input className="form2"value={person.firstName} onChange={handleFirstName} />
                    </label>
                </div>
                <br></br>
                <div>
                    <label>
                        Last name:
                        <input className="form2" value={person.lastName} onChange={handleLastName} />
                    </label>
                </div>
                <br></br>
                <div>
                    <label>
                        Email:
                        <input className="form2" value={person.email} onChange={handleEmail} />
                    </label>
                </div>
     
                <div>
                    <p>
                        {person.firstName} {person.lastName} {person.email}{" "}
                    </p>
                </div>
            </div>
        </>
    );
}