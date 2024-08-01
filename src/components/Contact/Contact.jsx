// Contact.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  return (
    <li className={styles.contact}>
      <p>{name}: {number}</p>
      {/* Додайте обробник для видалення контакту */}
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;



