import { useState } from 'react';
import Chat from './Chat.js';
import ContactList from './ContactList.js';
import { Link } from 'react-router-dom';

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <>
    <div className='cardApp'>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <Chat key={to.email} contact={to} />
    </div>
    </>
  )
}

const contacts = [
  { name: 'Taylor', email: 'taylor@mail.com' },
  { name: 'Alice', email: 'alice@mail.com' },
  { name: 'Bob', email: 'bob@mail.com' }
];