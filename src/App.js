import React from 'react';
import './styles/style.css';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';


function App() {

  return (
    <div className="App" style={{background:"#d3d3d3", height:"100vh"}}>
      <h1 style={{textAlign:"center", paddingTop:"2rem", fontWeight:"bold", textDecoration:"underline", fontFamily: "Roboto Mono, monospace"}}>Contact Manager</h1>

      <div className="container">
        <div className="col-md-12 mt-5">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button 
                className="nav-link active"
                id="nav-home-tab" 
                data-bs-toggle="tab" 
                data-bs-target="#nav-home" 
                type="button" 
                role="tab" 
                aria-controls="nav-home" 
                aria-selected="true"
                style={{
                  fonFamily: "Roboto, sans-serif",
                  fontWeight:"bold",
                  color:"#000000",
                  border:"1px solid #fff"
                }}
              >My Contact</button>
              <button 
                className="nav-link"
                id="nav-profile-tab" 
                data-bs-toggle="tab" 
                data-bs-target="#nav-profile" 
                type="button" 
                role="tab" 
                aria-controls="nav-profile" 
                aria-selected="false"
                style={{ 
                  fonFamily: "Roboto, sans-serif", 
                  marginLeft:"0.3rem",
                  fontWeight:"bold",
                  color:"#000000",
                  border:"1px solid #fff"
                }}
              >Create New Contact</button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <ContactList />
            </div>
            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <AddContact />
            </div>
          </div>        
        </div>
      </div>
    </div>
  );
}

export default App;
