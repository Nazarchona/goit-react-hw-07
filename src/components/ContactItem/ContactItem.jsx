import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactItem.module.css'; // Якщо використовуєте CSS модулі

const ContactItem = ({ contact }) => {
  return (
    <div className={styles.item}>
      <span>{contact.name}</span>
      <span>{contact.phone}</span>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;
