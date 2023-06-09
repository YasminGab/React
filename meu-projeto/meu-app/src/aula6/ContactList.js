export default function ContactList({ selectedContact, contacts, onSelect }) {
    return (
        <section className="contact-list">
            <ul className="listApp">
                {contacts.map((contact) => (
                    <li key={contact.email}>
                        <button className="botaoApp"
                            onClick={() => {
                                onSelect(contact);
                            }}
                        >
                            {contact.name}
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}