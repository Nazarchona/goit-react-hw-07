// contactsSlice.js
import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const response = await axios.get('https://66a798bb53c13f22a3d05c87.mockapi.io/api/contactlist/contacts');
  return response.data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
  const response = await axios.post('https://66a798bb53c13f22a3d05c87.mockapi.io/api/contactlist/contacts', contact);
  return response.data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id) => {
  await axios.delete(`https://66a798bb53c13f22a3d05c87.mockapi.io/api/contactlist/contacts/${id}`);
  return id;
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(contact => contact.id !== action.payload);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, state => state.filters.name],
  (contacts, filter) => contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
);

export default contactsSlice.reducer;




