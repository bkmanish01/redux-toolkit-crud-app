import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact, editContact } from '../slices/contactSlice';



const ContactList = () => {
    const [detail, setDetail] = useState({
        id: "",
        firstName:"", 
        lastName:"", 
        address:"", 
        phone:"", 
        email:""
    });

    const [isEditing, setIsEditing] = useState(false);

    const { contacts } = useSelector(state => state.contact)
    const dispatch = useDispatch();

    const { id, firstName, lastName, address, phone, email} = detail;

    const editToggle = (id, firstName, lastName, address, phone, email) => {
        setIsEditing(true);
        setDetail({...detail, id, firstName, lastName, address, phone, email});
    };

    const handleChange = (event) => {
        event.preventDefault();
        setDetail({
            ...detail,
            [event.target.name]: event.target.value,
        });
    };

    const handleEditContact = (e) => {
        e.preventDefault()
        dispatch(editContact({id, firstName, lastName, address, phone, email}));
        setIsEditing(false)
    };


    const handleDelete = (id) => {
        window.alert("Are you sure, You want to delete?")
        dispatch(removeContact({id}))
        setDetail({ ...detail })
    };


    return (
        <>
        { isEditing ?
            <div className="container" style={{padding:"3rem 3rem"}}>
                <h5 className="card-title">Update contact Here.</h5>
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleEditContact}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputFirstName">First Name</label>
                                    <input type="text" className="form-control" id="inputFirstName" name="firstName" value={firstName || ""} onChange={handleChange}/>
                                </div>
                                <div className="form-group col-md-6 mt-2">
                                    <label htmlFor="inputLastName">Last Name</label>
                                    <input type="text" className="form-control" id="inputLastName" name="lastName" value={lastName || ""} onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputAddress">Address</label>
                                <input type="text" className="form-control" id="inputAddress" name="address"  value={address || ""} onChange={handleChange}/>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPhone">Phone</label>
                                    <input type="text" className="form-control" id="inputPhone" name="phone" value={phone || ""} onChange={handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail">Email</label>
                                    <input type="email" className="form-control" id="inputEmail" name="email" value={email || ""} onChange={handleChange}/>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-danger mt-2">Cancel</button>
                            <button type="submit" className="btn btn-primary mt-2 ms-2">Update</button>
                        </form>
                    </div>
                </div>
            </div>: 
            <div className="list-table">
                { contacts.length > 0 ?
                    <table className="table">
                        <thead className="thead-dark bg-dark text-white text-center">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((conn, index) => (
                                <tr className="text-center" key={conn.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{conn.firstName}</td>
                                    <td>{conn.lastName}</td>
                                    <td>{conn.address}</td>
                                    <td>{conn.phone}</td>
                                    <td>{conn.email}</td>
                                    <td>
                                        <i className="fa-solid fa-pen-to-square text-primary" onClick={() => editToggle(
                                            conn?.id, 
                                            conn?.firstName, 
                                            conn?.lastName, 
                                            conn?.address, 
                                            conn?.phone, 
                                            conn?.email
                                        )}></i>
                                        <i className="fa-solid fa-trash-can text-danger ms-3" onClick={() => handleDelete(conn?.id)}></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table> :
                    <table className="table">
                        <thead className="thead-dark bg-dark text-white text-center">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Contact list is empty now!</td>
                            </tr>
                        </tbody>
                    </table>
                }
            </div>
        }
        </>
    );
};

export default ContactList;
