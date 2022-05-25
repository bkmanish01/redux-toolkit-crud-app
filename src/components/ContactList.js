import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact, editContact } from '../slices/contactSlice';
import AddContact from './AddContact';




const ContactList = () => {
    const [detail, setDetail] = useState({
        id: "",
        name:"",
        phone:"",
        email:"",
    });

    const [isEditing, setIsEditing] = useState(false);

    const { contacts } = useSelector(state => state.contact)
    const dispatch = useDispatch();

    const { id, name, phone, email} = detail;

    const editToggle = (id, name, phone, email) => {
        setIsEditing(true);
        setDetail({...detail, id, name, phone, email});
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
        dispatch(editContact({id, name, phone, email}));
        setIsEditing(false)
    };

    const handleDelete = (id) => {
        dispatch(removeContact({id}))
        setDetail({ ...detail })
    };


    return (
        <>
        <br /><br />

        { isEditing ?
        <div className="card" style={{margin:"40px 50px", width:"40%", backgroundColor:"#f06292", boxShadow:"0px 10px 13px -7px #000000"}}>
            <form style={{margin:"20px 20px"}}  onSubmit={handleEditContact}>
                <h1 style={{textDecoration:"underline"}}>Edit Contact</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label"><b>Name:</b></label>
                    <input type="text" name="name" value={name || ""}  className="form-control" id="exampleInputName"  onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPhone" className="form-label"><b>Phone:</b></label>
                    <input type="number" name="phone"  value={phone || ""} className="form-control" id="exampleInputPhone"  onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"><b>Email:</b></label>
                    <input type="email" name="email" value={email || ""}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary" style={{background:"blue", color:"white", border:"none"}}>Update</button>
            </form>
        </div> : <AddContact />
        }

        <br /><br />
        <h1 style={{marginLeft:"50px", textDecoration:"underline"}}>Contact List</h1>

        { contacts.length > 0 ?
            <table className="table" style={{width:"80%", margin:"20px 50px", border:"1px solid", backgroundColor:"#689f38", boxShadow:"0px 10px 13px -7px #000000"}}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {contacts.map((conn, index) => (
                    <tr key={conn.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{conn.name}</td>
                        <td>{conn.phone}</td>
                        <td>{conn.email}</td>
                        <td>
                            <button className="btn btn-primary"  style={{border:"none"}} onClick={() => editToggle(conn?.id, conn?.name, conn?.phone, conn?.email)}>Edit</button>
                            <button className="btn btn-danger mx-2"style={{border:"none"}}  onClick={() => handleDelete(conn?.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table> :
            <table className="table" style={{width:"80%", margin:"20px 50px", border:"1px solid", backgroundColor:"#689f38"}}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Empty List!</td>
                    </tr>
                </tbody>
            </table>
        }
        </>
    );
};

export default ContactList;
