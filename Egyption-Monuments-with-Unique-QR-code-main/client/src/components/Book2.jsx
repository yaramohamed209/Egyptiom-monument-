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
        <img className='Book-background' src='./images/chess.jpg' alt=''/>
        
        <div className="Book-content" style={{height: "210px"}}>
        <div className="Name-of-event" style={{fontSize: "40px" , padding:"9px"}}>World Chess Day</div>
        <div className="Des" >
        <div class="subtitle" style={{top: "32px"}}> <ion-icon name="time-outline" ></ion-icon> Thursday, July 20, 2023 at 6 PM</div>
        <div class="Summary" style={{backgroundColor: "transparent" }}>
        <p >It’s world chess day Learn about the ancient Egyptian game of Senet (A mind game that’s similar to chess); 
it was depicted on their tomb walls (such as in Queen Nefertari's), 
and it was also discovered among funerary objects (such as King Tutankhamun's)
and played by royalty and commoners alike. 
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