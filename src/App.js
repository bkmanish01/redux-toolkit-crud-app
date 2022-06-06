import React from 'react';
import ContactList from './components/ContactList';


function App() {

  return (
    <div className="App" style={{height:"100vh", marginTop:"80px"}}>
      <div className="container" style={{border:"1px solid black", borderRadius:"20px", backgroundColor:"#b3e5fc", boxShadow:"9px 11px 3px 6px #000000"}}>
        <h1 style={{
            backgroundColor:"#000", 
            color:"#fff", 
            width:"100%", 
            position:"fixed", 
            top:"0", 
            left:"0", 
            margin:"0", 
            padding:"10px", 
            textAlign:"center", 
            letterSpacing:"3px"
            }}>Contact Manager
        </h1>
        <ContactList />
      </div>
    </div>
  );
}

export default App;
