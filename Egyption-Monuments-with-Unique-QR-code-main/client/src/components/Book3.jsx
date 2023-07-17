import React from "react";

export default function Book2() {
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
        );
      };
      return (
        <center>
        <div className="Book1">
        <div class="Book-now" >
        <div id="google_translate_element"></div>
        <img className='Book-background' src='./images/omarr.jpg' alt=''/>
        
        <div className="Book-content" style={{height: "210px"}}>
        <div className="Name-of-event" style={{fontSize: "40px" , padding:"9px"}}>Omar Khairat</div>
        <div className="Des" >
        <div class="subtitle" style={{top: "32px"}}> <ion-icon name="time-outline" ></ion-icon> Sunday, August 20, 2023 at 7 PM</div>
        <div class="Summary" style={{backgroundColor: "transparent"  }}>
        <p >The National Museum of Egyptian Civilization organized a book-singing event , on the life and the long-established career of Omar Khairat, 
            followed by a live musical concert by the reowned Egyptian musician, as part of the cultral and
             artistic programs offered at the museum.
        </p>
        </div>
        <center>
        <div className="Tic">
          <button type="button" id="speakBtn" class="button1">
            <span class="button__text1"><a href="/Getticket">Get Ticket</a></span>
            <span class="button__icon1">
              <ion-icon name="ticket-outline"></ion-icon>
            </span>
          </button>
        </div> 
        </center>
</div>
        </div>
</div>
</div>    
        </center>
        )
}