import React from "react";
import { useState } from 'react';
function Roadmap() {
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
      const [showPhoto, setShowPhoto] = useState(false);
      const [photoSource, setPhotoSource] = useState('');
    
      function handleShowPhoto(photoSourceName) {
        setPhotoSource(photoSourceName);
        setShowPhoto(true);
      }
    
      function handleHidePhoto() {
        setShowPhoto(false);
      }
        
      
    return(
      
      <div className='Panorama'>
      <div className="box">
      <img style={{ display: "inline-block",verticalAlign: " middle",width:"87%",marginLeft:"22px" }} src='./images/mainhall.jpg' alt="" />
      <div  className="def"><img style={{ display: "inline-block",verticalAlign: " middle",width:"66%",marginLeft:"-10px",marginTop:"20px" }} src='./images/def.jpg' alt="" /></div>
      </div>
      <div className="show">
        <button className="Ico"
          style={{ backgroundColor: "transparent", border: "transparent", color: "blue" }}
          onClick={() => handleShowPhoto('./images/r1.jpg')}
        >
          <p><ion-icon name="location-outline"></ion-icon></p>
        </button>
      </div>
      <div className="show1">
        <button
          style={{ backgroundColor: "transparent", border: "transparent", color: "blue" }}
          onClick={() => handleShowPhoto('./images/r2.jpg')}
        >
          <p><ion-icon name="location-outline"></ion-icon></p>
        </button>
      </div>
      <div className="show2">
        <button
          style={{ backgroundColor: "transparent", border: "transparent", color: "blue" }}
          onClick={() => handleShowPhoto('./images/r3.jpg')}
        >
          <p><ion-icon name="location-outline"></ion-icon></p>
        </button>
      </div>
      <div className="show3">
        <button
          style={{ backgroundColor: "transparent", border: "transparent", color: "blue" }}
          onClick={() => handleShowPhoto('./images/r4.jpg')}
        >
          <p><ion-icon name="location-outline"></ion-icon></p>
        </button>
      </div>
      <div className="show4">
        <button
          style={{ backgroundColor: "transparent", border: "transparent", color: "blue" }}
          onClick={() => handleShowPhoto('./images/r5.jpg')}
        >
          <p><ion-icon name="location-outline"></ion-icon></p>
        </button>
      </div>
      <div className="show5">
        <button
          style={{ backgroundColor: "transparent", border: "transparent", color: "blue" }}
          onClick={() => handleShowPhoto('./images/r6.jpg')}
        >
          <p><ion-icon name="location-outline"></ion-icon></p>
        </button>
      </div>
      <div className="show6">
        <button
          style={{ backgroundColor: "transparent", border: "transparent", color: "blue" }}
          onClick={() => handleShowPhoto('./images/r7.jpg')}
        >
          <p><ion-icon name="location-outline"></ion-icon></p>
        </button>
      </div>
      <div className="show7">
        <button
          style={{ backgroundColor: "transparent", border: "transparent", color: "blue" }}
          onClick={() => handleShowPhoto('./images/r8.jpg')}
        >
          <p><ion-icon name="location-outline"></ion-icon></p>
        </button>
      </div>
      {showPhoto && (
        <div id="cont1">
          {photoSource === './images/r1.jpg' && (
            <img className="photo"  src='./images/r1.jpg' alt="" />
          )}
          {photoSource === './images/r2.jpg' && (
            <img className="photo"  src='./images/r2.jpg' alt="" />
          )}
          {photoSource === './images/r3.jpg' && (
            <img className="photo" src='./images/r3.jpg' alt="" />
          )}
          {photoSource === './images/r4.jpg' && (
            <img className="photo"  src='./images/r4.jpg' alt="" />
          )}
          {photoSource === './images/r5.jpg' && (
            <img className="photo"  src='./images/r5.jpg' alt="" />
          )}
          {photoSource === './images/r6.jpg' && (
            <img  className="photo" src='./images/r6.jpg' alt="" />
          )}
          {photoSource === './images/r7.jpg' && (
            <img className="photo"  src='./images/r7.jpg' alt="" />
          )}
          {photoSource === './images/r8.jpg' && (
            <img className="photo"  src='./images/r8.jpg' alt="" />
          )}
          <button className="hide" onClick={handleHidePhoto}>
           <p ><ion-icon style={{backgroundColor:"red",color:"white",borderRadius:"50%"}} className="Tcon" name="close-circle-outline"></ion-icon></p>
          </button>
        </div>
      )}
    </div>
  );
}

export default Roadmap;