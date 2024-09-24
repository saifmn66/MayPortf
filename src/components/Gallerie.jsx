import { useState } from "react";
import c11 from "../img/PORT/c1.jpg";
import c12 from "../img/PORT/c2.png";
import c13 from "../img/PORT/c3.jpg";
import c14 from "../img/PORT/ph4.jpg";
import c15 from "../img/PORT/c5.jpg";
import c16 from "../img/PORT/c6.png";
import c17 from "../img/PORT/c7.png";


import c21 from "../img/PORT/2c2.jpeg";
import c22 from "../img/PORT/2c1.jpg";
import c24 from "../img/PORT/2c4.jpg";
import c25 from "../img/PORT/2c5.jpg";
import c26 from "../img/PORT/2c6.jpg";
import c27 from "../img/PORT/2c7.jpg";
import c28 from "../img/PORT/2c8.jpg";
import c29 from "../img/PORT/2c9.png";
import c210 from "../img/PORT/2c10.png";

import c31 from "../img/PORT/3c1.jpg";
import c32 from "../img/PORT/3cc2.jpg";
import c33 from "../img/PORT/3c3.jpg";
import c34 from "../img/PORT/3c4.jpg";
import c35 from "../img/PORT/3c5.jpg";
import c36 from "../img/PORT/3c6.png";
import c37 from "../img/PORT/3c7.jpg";
import c38 from "../img/PORT/3c8.jpg";



export function Gallerie() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (image) => {
      setSelectedImage(image);
  };

  const closePopup = () => {
      setSelectedImage(null);
  };
    const [gal , setgal] = useState(<>
        <div className=" grid gap-4">
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c11}
              alt="gallery-photo"
              onClick={() => openPopup(c11)}
            />
            
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center "
              src={c12}
              alt="gallery-photo"
              onClick={() => openPopup(c12)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c13}
              alt="gallery-photo"
              onClick={() => openPopup(c13)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c14}
              alt="gallery-photo"
              onClick={() => openPopup(c14)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c15}
              alt="gallery-photo"
              onClick={() => openPopup(c15)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c16}
              alt="gallery-photo"
              onClick={() => openPopup(c16)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c17}
              alt="gallery-photo"
              onClick={() => openPopup(c17)}

            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c21}
              alt="gallery-photo"
              onClick={() => openPopup(c21)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c22}
              alt="gallery-photo"
              onClick={() => openPopup(c22)}

            />
          </div>
          
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c24}
              alt="gallery-photo"
              onClick={() => openPopup(c24)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c25}
              alt="gallery-photo"
              onClick={() => openPopup(c25)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c26}
              alt="gallery-photo"
              onClick={() => openPopup(c26)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c27}
              alt="gallery-photo"
              onClick={() => openPopup(c27)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c28}
              alt="gallery-photo"
              onClick={() => openPopup(c28)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c29}
              alt="gallery-photo"
              onClick={() => openPopup(c29)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c210}
              alt="gallery-photo"
              onClick={() => openPopup(c210)}

            />
          </div>
        </div>
        
        <div className="grid gap-4">
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              
              src={c31}
              alt="gallery-photo"
              onClick={() => openPopup(c31)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c32}
              alt="gallery-photo"
              onClick={() => openPopup(c32)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c37}
              alt="gallery-photo"
              onClick={() => openPopup(c37)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c33}
              alt="gallery-photo"
              onClick={() => openPopup(c33)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c34}
              alt="gallery-photo"
              onClick={() => openPopup(c34)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c38}
              alt="gallery-photo"
              onClick={() => openPopup(c38)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c35}
              alt="gallery-photo"
              onClick={() => openPopup(c35)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c36}
              alt="gallery-photo"
              onClick={() => openPopup(c36)}

            />
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c11}
              alt="gallery-photo"
              onClick={() => openPopup(c11)}
            />
            
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center "
              src={c12}
              alt="gallery-photo"
              onClick={() => openPopup(c12)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c13}
              alt="gallery-photo"
              onClick={() => openPopup(c13)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c14}
              alt="gallery-photo"
              onClick={() => openPopup(c14)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c15}
              alt="gallery-photo"
              onClick={() => openPopup(c15)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c16}
              alt="gallery-photo"
              onClick={() => openPopup(c16)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c17}
              alt="gallery-photo"
              onClick={() => openPopup(c17)}

            />
          </div>
        </div>
        </>)
    const images = (
        <>
        <div className="grid gap-4">
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c11}
              alt="gallery-photo"
              onClick={() => openPopup(c11)}
            />
            
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center "
              src={c12}
              alt="gallery-photo"
              onClick={() => openPopup(c12)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c13}
              alt="gallery-photo"
              onClick={() => openPopup(c13)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c14}
              alt="gallery-photo"
              onClick={() => openPopup(c14)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c15}
              alt="gallery-photo"
              onClick={() => openPopup(c15)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c16}
              alt="gallery-photo"
              onClick={() => openPopup(c16)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c17}
              alt="gallery-photo"
              onClick={() => openPopup(c17)}

            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c21}
              alt="gallery-photo"
              onClick={() => openPopup(c21)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c22}
              alt="gallery-photo"
              onClick={() => openPopup(c22)}

            />
          </div>
          
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c24}
              alt="gallery-photo"
              onClick={() => openPopup(c24)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c25}
              alt="gallery-photo"
              onClick={() => openPopup(c25)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c26}
              alt="gallery-photo"
              onClick={() => openPopup(c26)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c27}
              alt="gallery-photo"
              onClick={() => openPopup(c27)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c28}
              alt="gallery-photo"
              onClick={() => openPopup(c28)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c29}
              alt="gallery-photo"
              onClick={() => openPopup(c29)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c210}
              alt="gallery-photo"
              onClick={() => openPopup(c210)}

            />
          </div>
        </div>
        
        <div className="grid gap-4">
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              
              src={c31}
              alt="gallery-photo"
              onClick={() => openPopup(c31)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c32}
              alt="gallery-photo"
              onClick={() => openPopup(c32)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c37}
              alt="gallery-photo"
              onClick={() => openPopup(c37)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c33}
              alt="gallery-photo"
              onClick={() => openPopup(c33)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c34}
              alt="gallery-photo"
              onClick={() => openPopup(c34)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c38}
              alt="gallery-photo"
              onClick={() => openPopup(c38)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c35}
              alt="gallery-photo"
              onClick={() => openPopup(c35)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c36}
              alt="gallery-photo"
              onClick={() => openPopup(c36)}

            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c11}
              alt="gallery-photo"
              onClick={() => openPopup(c11)}
            />
            
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center "
              src={c12}
              alt="gallery-photo"
              onClick={() => openPopup(c12)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c13}
              alt="gallery-photo"
              onClick={() => openPopup(c13)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c14}
              alt="gallery-photo"
              onClick={() => openPopup(c14)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c15}
              alt="gallery-photo"
              onClick={() => openPopup(c15)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c16}
              alt="gallery-photo"
              onClick={() => openPopup(c16)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c17}
              alt="gallery-photo"
              onClick={() => openPopup(c17)}

            />
          </div>
        </div>
        </>
    )
    const categ2 = (
        <>
        <div className="grid gap-4">
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c11}
              alt="gallery-photo"
              onClick={() => openPopup(c11)}
            />
            
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center "
              src={c12}
              alt="gallery-photo"
              onClick={() => openPopup(c12)}

            />
          </div>
          
          
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c15}
              alt="gallery-photo"
              onClick={() => openPopup(c15)}

            />
          </div>
          
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c17}
              alt="gallery-photo"
              onClick={() => openPopup(c17)}

            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c21}
              alt="gallery-photo"
              onClick={() => openPopup(c21)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c22}
              alt="gallery-photo"
              onClick={() => openPopup(c22)}

            />
          </div>
          
          
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c25}
              alt="gallery-photo"
              onClick={() => openPopup(c25)}

            />
          </div>
          
          
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c28}
              alt="gallery-photo"
              onClick={() => openPopup(c28)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c29}
              alt="gallery-photo"
              onClick={() => openPopup(c29)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c210}
              alt="gallery-photo"
              onClick={() => openPopup(c210)}

            />
          </div>
        </div>
        
        <div className="grid gap-4">
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              
              src={c31}
              alt="gallery-photo"
              onClick={() => openPopup(c31)}

            />
          </div>
          
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c33}
              alt="gallery-photo"
              onClick={() => openPopup(c33)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c34}
              alt="gallery-photo"
              onClick={() => openPopup(c34)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c38}
              alt="gallery-photo"
              onClick={() => openPopup(c38)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c35}
              alt="gallery-photo"
              onClick={() => openPopup(c35)}

            />
          </div>
          
        </div>
        <div className="grid gap-4">
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c11}
              alt="gallery-photo"
              onClick={() => openPopup(c11)}
            />
            
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center "
              src={c12}
              alt="gallery-photo"
              onClick={() => openPopup(c12)}

            />
          </div>
          
          
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c15}
              alt="gallery-photo"
              onClick={() => openPopup(c15)}

            />
          </div>
          
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c17}
              alt="gallery-photo"
              onClick={() => openPopup(c17)}

            />
          </div>
        </div>
        </>
    )

    const categ3 = (
        <>
        <div className="grid gap-4">
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c24}
              alt="gallery-photo"
              onClick={() => openPopup(c24)}

            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c16}
              alt="gallery-photo"
              onClick={() => openPopup(c16)}

            />
          </div>
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c32}
              alt="gallery-photo"
              onClick={() => openPopup(c32)}

            />
          </div>
        </div>
        
        <div className="grid gap-4">
          <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c26}
              alt="gallery-photo"
              onClick={() => openPopup(c26)}

            />
          </div>
          
        </div>
        <div className="grid gap-4">
        <div className="relative max-w-xs shadow-xl rounded-lg rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img 
              className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
              src={c27}
              alt="gallery-photo"
              onClick={() => openPopup(c27)}

            />
          </div>
        </div>
        </>
    )
    const categ4 = (
      <>
      <div className="grid gap-4">
        
        <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
          <img 
            className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
            src={c13}
            alt="gallery-photo"
            onClick={() => openPopup(c13)}

          />
        </div>
        
      </div>
      <div className="grid gap-4">
      <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
          <img 
            className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
            src={c36}
            alt="gallery-photo"
            onClick={() => openPopup(c36)}

          />
        </div>
      </div>
      
      <div className="grid gap-4">
        
        <div className="relative max-w-xs shadow-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
          <img 
            className="h-auto  rounded-lg object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 object-center"
            src={c37}
            alt="gallery-photo"
            onClick={() => openPopup(c37)}

          />
        </div>
        
        
      </div>
      </>
  )
    return (
      <>
        <div className="flex mx-auto sm:w-[20vw] w-[90vw] my-16">
          <button
            onClick={() => { setgal(images); }}
            type="button"
            className="text-black text-base bg-white hover:bg-gray-900 hover:text-white duration-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full px-5 py-2.5 me-2 mb-2 "
          >
            All
          </button>
          <button
            onClick={() => { setgal(categ2); }}
            type="button"
            className="text-black text-base bg-white hover:bg-gray-900 hover:text-white duration-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full px-5 py-2.5 me-2 mb-2 "
          >
            Designs
          </button>
          <button
            onClick={() => { setgal(categ3); }}
            type="button"
            className="text-black text-base bg-white hover:bg-gray-900 hover:text-white duration-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full px-5 py-2.5 me-2 mb-2 "
          >
            
            logos
          </button>
          <button
            onClick={() => { setgal(categ4); }}
            type="button"
            className="text-black text-base bg-white hover:bg-gray-900 hover:text-white duration-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full px-5 py-2.5 me-2 mb-2 "
          >
            UI Designe
          </button>
        </div>
    
        <div className="grid grid-cols-2 gap-4 sm:max-w-[70vw] max-w-[90vw] mx-auto md:grid-cols-4">
          {gal}
        </div>
    
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closePopup}
          >
            <div className="relative">
              <img
                src={selectedImage}
                alt="Popup Image"
                className="max-h-[90vh] sm:max-w-[70vw] max-w-[90vw] rounded-lg"
              />
              <button
                className="absolute top-2 right-2 text-white text-xl font-bold"
                onClick={closePopup}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </>
    );
    
  }