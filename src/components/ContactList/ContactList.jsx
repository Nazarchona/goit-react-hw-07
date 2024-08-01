// ContactList.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

// ContactList.jsx
const ContactList = () => {
  const contacts = useSelector(selectContacts);
  console.log(contacts); // Перевірте, чи є id у кожного контакту

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};


export default ContactList;




















