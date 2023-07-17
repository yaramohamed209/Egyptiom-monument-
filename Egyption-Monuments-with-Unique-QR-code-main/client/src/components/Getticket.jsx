import React, { useState, useEffect } from "react";
import axios from 'axios';

 
export default function Getticket() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    tickets: ''
  });
  
  const handleChange = (event) =>{
    setValues({...values, [event.target.name]:[event.target.value]})
  }
    
  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8081/graduation',values)
    .then(res => console.log("Booked Successfully !! "))
    .catch(err => console.log(err));

  }
  const [data , setBackendData]=useState([{}])
    useEffect(()=> {
    getTickets();
 
    }, [])

 const getTickets =async()=>{
    axios.get("http://localhost:8081/graduation")
    .then(res => setBackendData(e => res.data))
  } 
  
  return (
    <center style={{padding:"35px"}}>
      <div className="card3">
        <div className="container">
      <br></br>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={handleSubmit}>
          <div className="form-input">
           
          <img className="ticketimage" src="images/ticket.jpg" alt=" "></img>
          
            <br></br>
            <br></br>

                <strong style={{fontSize:"20px"}}>Book Your Tickets Now !!
                 {/* Available Tickets:{data[0].number} */}
                </strong>
                
              </div>
              <br></br>
            <div className="form-input">
              <input
                type="text"
                name='username'
                className="form-control1"
                placeholder="Enter your Name"
                onChange={handleChange}
              />
            </div>

            <br></br>

            <div className="form-input">
              
              <input
                type="email"
                name='email'
                className="form-control1"
                placeholder="Enter email"
                onChange={handleChange}
              />
            </div>
            <br></br>
            <div className="form-input">
              
              <input
              type="number"
              name='tickets'
              placeholder="Select number of tickets"
              className="form-control1"
              onChange={handleChange}
              />
            </div>

            <div className="d-flex-count" style={{ height: "54vh", position: "relative", top: "20px" }}>
             

              <br></br>
              <button className="btn btn-primary" onClick={() => alert('Click on payment to continue booking')}>
              Book my tickets
            </button>
              <button type="button" className="btn btn-primary"><a href="/Events">Back</a></button>
              <br></br>
              <br></br>
              <button  className="btn btn-primary"><a href="/Payment">Payment</a></button>

            </div>
          </form>
        
        </div>
  </div>
  </div>
    </div>
    </center>
  )
};