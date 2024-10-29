'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'

const Whatsapp = ({ phoneNumber = '70163 08437' }) => {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
  }, []);
  

  const handleClick = () => {
    const message = encodeURIComponent("Hello, I have an inquiry for used car loan");
    const whatsappNumber = phoneNumber.replace(/[^\d]/g, ''); // Remove non-digit characters

    if (isIOS) {
      window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`, '_blank');
    } else {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      if (isMobile) {
        window.location.href = `whatsapp://send?phone=${whatsappNumber}&text=${message}`;
        
        // Fallback for mobile devices without WhatsApp installed
        setTimeout(() => {
          window.location.href = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
        }, 300);
      } else {
        window.open(`https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`, '_blank');
      }
    }
  }

  return (
    <div 
      className="whatsapp-wrapper"
      aria-label="Contact us on WhatsApp"
    >
        <Image style={{position:"fixed", bottom:"50px", right:"30px", cursor:"pointer"}} onClick={handleClick} className='whatsappIconImage' height={40} width={40} src="/Whatsappicon.svg" alt="whatsapp"/>
      {/* <FaWhatsapp style={{position:"fixed", bottom:"50px", right:"30px", fontSize:"40px", color:"white", padding:"10px", backgroundColor:"green", borderRadius:"50%"}} onClick={handleClick} /> */}
    </div>
  )
}

export default Whatsapp