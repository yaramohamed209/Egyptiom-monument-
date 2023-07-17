import React from 'react';

function Events() {
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
 
    <div class="events" >
    <img className='event-background' src='./images/m.jpg' alt=''/>
    <div className='background__content'>
    <div className='Even'>Events</div>
   <p className='X'>Join us at the Museum for tours, demonstrations, lectures, and more.</p>
   </div>
    <div class="events" >
    <div id="google_translate_element"></div>
    <div class="item-container">
            <div class="img-container2">
                <img src="./images/musiccc.jpg" alt=" "/>
            </div>
            <div class="body-container2">
                <div class="overlay"></div>
                <div class="event-info"style={{fontSize:"20px"}}>
                    <p class="title">World Music Day</p>
                    <div class="separator"></div>
                    <div className='time'></div>
           <p><ion-icon name="time-outline "></ion-icon>
              WEDNESDAY , June 21, 2024 at 8:30 PM </p>
            <p> Price of Ticket: 160 L.E.</p>
            <p class="Book"><a href="/Book">Book now</a></p>
           
                  </div>
                </div>
            </div>

        <div class="item-container">
            <div class="img-container2">
                <img src="./images/chesss.jpg" alt=" "/>
            </div>
            <div class="body-container2">
                <div class="overlay"></div>
                <div class="event-info"style={{fontSize:"20px"}}>
                    <p class="title">World Chess Day</p>
                    <div class="separator"></div>
                    <div className='time'></div>
           <p><ion-icon name="time-outline "></ion-icon>
              THURSDAY, July 20, 2023, at 6:00 PM </p>
            <p> Price of Ticket: 160 L.E.</p>
            <p class="Book"><a href="/Book2">Book now</a></p>
                  </div>
                </div>
            </div>

            <div class="item-container">
            <div class="img-container2">
                <img src="./images/omar.jpg" alt=" "/>
            </div>
            <div class="body-container2">
                <div class="overlay"></div>
                <div class="event-info"style={{fontSize:"23px"}}>
                    <p class="title">Omar Khairat</p>
                    <div class="separator"></div>
                    <div className='time'> </div>
           <p><ion-icon name="time-outline"></ion-icon>
            Sunday, August 20, 2023 at 7:00 PM </p>
            <p> Price of Ticket: 160 L.E.</p>

                      <p class="Book">
                       <a href="/Book3">Book now</a></p></div>
                       </div>
                       </div>
            
          <div >
          <h1 className='contact'>If you want to make your event please click her to contact us
          <button type="button" id="speakBtn" class="button1">
            <span class="button__text1"><a href="/Login">contact us</a></span>
            <span class="button__icon1">
            <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
            </span>
          </button></h1>
        </div>
        </div>
        </div>

        
        </center>
  );
}

export default Events;
