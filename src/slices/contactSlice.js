import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    contacts: []
};

export const contactSlice = createSlice({
    name:"contact",
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.contacts = [...state.contacts, action.payload]
        },
        editContact: (state, action) => {
            const { contacts } = state;
            state.contacts = contacts.map((item) => item.id === action.payload.id ? action.payload : item);
        },
        removeContact: (state, action) => {
            const { contacts } = state;
            state.contacts = contacts.filter((item) => item.id !== action.payload.id);
        }
    },
});

export const { addContact, editContact, removeContact } = contactSlice.actions;
export default contactSlice.reducer;