import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Jill Johnson',
                email: 'jill@gmail.com',
                phone: '111-111-111',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Sara Wilson',
                email: 'sara@gmail.com',
                phone: '222-222-222',
                type: 'personal'
            },
            {
                id: 3,
                name: 'Harry White',
                email: 'harry@gmail.com',
                phone: '333-333-333',
                type: 'professional'
            }
            
        ]
    };

    const [state, dispatch] = useReducer(ContactReducer, initialState);

    //Add Contact
    const addContact = contact => {
        contact.id = uuid();
        dispatch({ type: ADD_CONTACT, payload: contact });
    };

    //Delete Contact
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id });
    };

    //Set Current Contact

    //Clear Current Contact

    //Update Current Contact

    //Filter Contact

    //Clear Filter

    return (
        <ContactContext.Provider 
            value={{
                contacts: state.contacts,
                addContact,
                deleteContact,
            }}
        >
            {props.children}
        </ContactContext.Provider>
    )
};

export default ContactState;