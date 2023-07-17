import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBCardImage,
  MDBCardTitle,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
export default function Book() {
    React.useEffect(() => {
        var addScript = document.createElement('script');
        addScript.setAttribute(
          'src',
          '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
        );
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
      }, []);
    
      const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            // eslint-disable-next-line no-undef
            layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
          },
          'google_translate_element'
        );}

        const [ccNumber, setCcNumber] = useState("");

        const formatAndSetCcNumber = e => {
          const inputVal = e.target.value.replace(/ /g, "");
          let inputNumbersOnly = inputVal.replace(/\D/g, "");
      
          if (inputNumbersOnly.length > 16) {
            inputNumbersOnly = inputNumbersOnly.substr(0, 16);
          }
      
          const splits = inputNumbersOnly.match(/.{1,4}/g);
      
          let spacedNumber = "";
          if (splits) {
            spacedNumber = splits.join(" ");
          }
      
          setCcNumber(spacedNumber);
      };
      const [number, setNumber] = useState(null);

      useEffect(() => {
        const fetchNumber = async () => {
          try {
            const response = await axios.get('http://localhost:8081/graduation/booking');
            const number = response.data[0].tickets;
            setNumber(number * 160);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchNumber();
      }, []);
      const [cvv, setCVV] = useState('');

  const handleCVVChange = (event) => {
    const value = event.target.value;
    setCVV(value);
  };
      
      return (
        <center  style={{padding:"15px"}}>
      <div>
 <section class="cart" style= {{height:"500px"}}>

       
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="9" lg="7" xl="5">
          <MDBCard>
            <MDBCardImage
              className="eventimage"
              src="images/event.jpg"
              position="top"
              alt="..."
            />
            <br></br>
            <MDBCardBody>
              <MDBCardTitle className="d-flex justify-content-between mb-0">
                
                <p className="text-muted mb-0">The Subtotal :{number} </p>
                {number && (
                 <p>
                 </p>
                )}
                <p>L.E</p>
              </MDBCardTitle>
            </MDBCardBody>
            <div className="rounded-bottom" style={{ backgroundColor: "#eee" }}>
              <MDBCardBody>
                {" "}
                 <MDBInput 
                 type="text"
                 placeholder="Your card number"
                 className="cardnumber"
                  value={ccNumber} onChange={formatAndSetCcNumber}>
                  
                 </MDBInput>
              <br></br>
                <MDBRow className="mb-3">
                  <MDBCol size="12">
                    <MDBInput
                    
                      id="form2"
                      type="month"
                      placeholder="Expire Date"
                      wrapperClass="mb-3"
                      position="center"
                    />
                  </MDBCol>
                  <MDBCol size="6">
                    <MDBInput
                      id="form4"
                      type="password"
                      pattern="[0-9]{3,4}"
                      value={cvv}
                      onChange={handleCVVChange}
                      maxLength="4"
                      required
                      placeholder="CVV"
                      wrapperClass="mb-3"
                    />
                  </MDBCol>
                </MDBRow>
                <button className="btn btn-primary" onClick={() => alert('You have successfully booked your tickets !!  ')}>
              Book Now 
               </button>
              </MDBCardBody>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
</div>
</center>
        );
        
}