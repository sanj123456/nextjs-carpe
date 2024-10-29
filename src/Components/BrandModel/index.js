import React from 'react'

const BrandModal = (props) => {
    let close = props.onClose;
  return (
    <div onClick={() => props.onClose()}>I am Brand</div>
  )
}

export default BrandModal