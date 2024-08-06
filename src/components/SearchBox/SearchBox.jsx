// SearchBox.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input
      type="text"
      value={filter}
      onChange={handleChange}
      className={styles.searchBox}
      placeholder="Search contacts"
    />
  );
};

export default SearchBox;

