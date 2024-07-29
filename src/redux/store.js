import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: (state = { name: '' }, action) => {
      switch (action.type) {
        case 'contacts/setFilter':
          return { ...state, name: action.payload };
        default:
          return state;
      }
    }
  }
});





