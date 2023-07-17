import React, {useState } from "react";
import axios from 'axios';


export default function Login() {
  const [values, setValues] = useState({
    eventname: '',
    picture: '',
    qrcodes: '',
    email: ''
  });

  const handleChange = (event) =>{
    setValues({...values, [event.target.name]:[event.target.value]})
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8081/graduation',values)
    .then(res => console.log("Registered Successfully !! "))
    .catch(err => console.log(err));
  }
  
  return (
    <center style={{padding:"15px"}}>
      <div class="card4">
    
      
        <form onSubmit={handleSubmit}>
        {/* <div className='background__content'> */}
        {/* <div className="X" style={{ fontSize:"60px" , */}
        {/* backgroundColor:"beige", */}
        {/* position:"relative", */}
        {/* top:"-16px"}}> */}
          {/* </div> */}
          

          <div className="form-input">
            <label>Event name</label>
            <input
              type="text"
              name='eventname'
              className="form-control1"
              placeholder="Enter Event name"
              onChange={handleChange}
            />
          </div>
          <div className="form-input">
            <label>NUMBER of QR codes</label> 
            <input
              type="number"
              name='qrcodes'
              className="form-control1" 
              placeholder="Select NUMBER of QR codes" 
              onChange={handleChange}
            />
          </div>
          
          <div className="form-input">
            <label>Price of Ticket per person (L.E) </label> 
            <input
              type="number"
              name='price'
              className="form-control1" 
              placeholder="Put a suitable price" 
              onChange={handleChange}
            />
          </div>

          <div className="form-input">
            <label>Date of the Event</label>
            <input
              type="date"
              name='date'
              className="form-control1"
              placeholder="Choose a suitable date "
              onChange={handleChange}
            />
          </div>

          <div className="form-input">
            <label>Time of the Event</label>
            <input
              type="time"
              name='time'
              className="form-control1"
              placeholder="Choose a suitable time "
              onChange={handleChange}
            />
          </div>

          <div className="form-input">
            <label>Email Address</label> 
            <input
              type="email"
              name='email'
              className="form-control1"
              placeholder="Enter email for contact "
              onChange={handleChange}/>
          </div>
          <br></br>
          <div className="form-input">
          <label>Choose a picture you want for the QR code</label> 

          <div className="hero">
          <div className="cards">
            <img src="images/upload.jpg" alt=" "></img>
            <input type="file" name='picture' accept="image/jpeg,image/png,image/jpg" id="input-file"
            onChange={handleChange}/>
            <br></br>
            <button className="btn btn-primary" onClick={() => alert('Your event has been successfully sent to the admin')}
            style={{ top:"2px",}}>Submit
            </button>
          </div>
        </div>
          </div>
          
            
        </form>
        
        <div>
    </div>
    </div>
    </center>
  );
}