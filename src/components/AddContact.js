import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../slices/contactSlice';


const AddContact = () => {
    const [user, setUser] = useState({
        name:"",
        phone:"",
        email:"",
        contactError: null
    });
    const { name, phone, email, contactError } = user;
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
        if(name === "" || phone === "" || email === ""){
            setUser({
                ...user,
                contactError: "You must fillup the form!"
            });
            return;
        }
        dispatch(addContact({ id: Math.floor(Math.random() * 1000),name, phone, email}));
        setUser({
            name:"",
            phone:"",
            email:""
        });
    };

    return (
        <>
        <div className="card" style={{marginTop:"80px", marginLeft:"50px",width:"40%", backgroundColor:"#bf360c", boxShadow:"0px 10px 13px -7px #000000"}}>
            <form style={{margin:"20px 20px"}} onSubmit={handleAddContact}>
                <h1 style={{textDecoration:"underline", textShadow:"1px -1px 0 #767676"}}>Add Contact</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label"><b>Name:</b></label>
                    <input type="text" name="name" value={name} className="form-control" id="exampleInputName"  onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPhone" className="form-label"><b>Phone:</b></label>
                    <input type="number" name="phone" value={phone} className="form-control" id="exampleInputPhone"  onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"><b>Email:</b></label>
                    <input type="email" name="email"value={email}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary" style={{background:"green", color:"white", border:"none"}}>Add</button>
                {contactError ? <div className="error">{contactError}</div> : null}
            </form>
        </div>
        </>
    );
};

export default AddContact;

