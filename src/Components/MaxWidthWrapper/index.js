import React from 'react'
import "./max-width-container.scss";
export default function MaxWidthWrapper({ children, backgroundColor ,className}) {


  return (
    <div className={'max-width-container ' + className}  style={{...{ backgroundColor: backgroundColor }}}>

      <div className='max-width'    >
        {children}
      </div>
    </div>
  )



}
