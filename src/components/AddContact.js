import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../slices/contactSlice';


const AddContact = () => {
    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        address:"",
        phone:"",
        email:"",
        contactError: null
    });

    const { firstName, lastName, address, phone, email, contactError } = user;
    const dispatch = useDispatch();

    const handleChange = (event) => {
        event.preventDefault();
        setUser({
            ...user,
            [event.target.name]: event.target.value,
            [`${event.target.name}Error`]: null
        });
    }

    const handleAddContact = (event) => {
        event.preventDefault()
        if(firstName === "" || lastName==="" || address === "" || phone === "" || email === ""){
            setUser({
                ...user,
                contactError: "You must fillup the form!"
            });
            return;
        }
        dispatch(addContact({ id: Math.floor(Math.random() * 1000),firstName, lastName, address, phone, email}));
        setUser({
            firstName:"", 
            lastName:"", 
            address:"", 
            phone:"", 
            email:""
        });
    };

    return (
        <>
        <div className="container" style={{padding:"3rem 3rem"}}>
            {contactError ? <div className="error text-center">{contactError}</div> : null}
            <h5 className="card-title">Add New contact Here.</h5>
            <div className="card">
                <div className="card-body">
                    <form onSubmit={handleAddContact}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputFirstName">First Name</label>
                                <input type="text" className="form-control" id="inputFirstName" name="firstName" value={firstName} onChange={handleChange} placeholder="First Name" />
                            </div>
                            <div className="form-group col-md-6 mt-2">
                                <label htmlFor="inputLastName">Last Name</label>
                                <input type="text" className="form-control" id="inputLastName" name="lastName" value={lastName} onChange={handleChange} placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" name="address" value={address} onChange={handleChange} placeholder="1234 Main St" />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPhone">Phone</label>
                                <input type="text" className="form-control" id="inputPhone" name="phone" value={phone} onChange={handleChange} placeholder="0007891231" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail">Email</label>
                                <input type="email" className="form-control" id="inputEmail" name="email" value={email} onChange={handleChange} placeholder="test@gamil.com" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success mt-2">submit</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default AddContact;

