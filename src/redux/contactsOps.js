import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Замість 'https://66a798bb53c13f22a3d05c87.mockapi.io/api/contactlist' вставте реальний URL
const BASE_URL = 'https://66a798bb53c13f22a3d05c87.mockapi.io/api/contactlist';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${BASE_URL}/contacts`);
    return response.data; // Повертає дані у форматі масиву
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  try {
    const response = await axios.post(`${BASE_URL}/contacts`, contact);
    return response.data; // Повертає новий контакт
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
  try {
    await axios.delete(`${BASE_URL}/contacts/${id}`);
    return id; // Повертає id видаленого контакту
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});





