import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    contacts: [
        {id:"1", firstName:"John", lastName:"Dow", address:"121 Dever ave", phone:"9998887777", email:"john@yahoo.com"},
        {id:"2", firstName:"Robert", lastName:"Smith", address:"501 Boardway ave", phone:"9998887777", email:"robert@yahoo.com"},
        {id:"3", firstName:"Casy", lastName:"Farmer", address:"100 Highway dr", phone:"9998887777", email:"casy@yahoo.com"}
    ]
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