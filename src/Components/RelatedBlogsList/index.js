import React from 'react'




export default function index() {


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 650 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 650, min: 0 },
            items: 1,
        },
    };
    const CustomRightArrow = ({ onClick }) => {
        return (
            <button className="swiperBtn" onClick={onClick} style={{
                position: 'absolute',
                right: "20px",
                zIndex: 9
            }}>

                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.18774 13L7.23892 7L1.18774 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        )
    }

    const CustomleftArrow = ({ onClick }) => {
        return (
            <button onClick={onClick} className="swiperBtn" style={{
                position: 'absolute',
                left: "20px",
                zIndex: 9
            }}>
                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.2386 1L1.18743 7L7.2386 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </button>
        )
    }
  return (
    <div>
      
    </div>
  )
}
