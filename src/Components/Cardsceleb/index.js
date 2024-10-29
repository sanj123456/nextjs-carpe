"use client";
import React from "react";
import "./cardscelebs.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Cardscelebs = () => {
  const imageDescriptions = [
    {
      image: "/blogimage-1.svg",
      description: "Navigating the Used Car Finance Process",
      moredescription:
        "Navigating the Used Car Finance Process: A Step-by-Step Guide Buying a used car is a significant decision, one that can save you a considerable amount of ",
    },
    {
      image: "/blogimage-2.svg",
      description: "Navigating the Used Car Finance Process",
      moredescription:
        "Navigating the Used Car Finance Process: A Step-by-Step Guide Buying a used car is a significant decision, one that can save you a considerable amount of ",
    },
    {
      image: "/blogimage-3.svg",
      description: "Navigating the Used Car Finance Process",
      moredescription:
        "Navigating the Used Car Finance Process: A Step-by-Step Guide Buying a used car is a significant decision, one that can save you a considerable amount of ",
    },
    {
      image: "/blogimage-1.svg",
      description: "Navigating the Used Car Finance Process",
      moredescription:
        "Navigating the Used Car Finance Process: A Step-by-Step Guide Buying a used car is a significant decision, one that can save you a considerable amount of ",
    },
    {
      image: "/blogimage-2.svg",
      description: "Navigating the Used Car Finance Process",
      moredescription:
        "Navigating the Used Car Finance Process: A Step-by-Step Guide Buying a used car is a significant decision, one that can save you a considerable amount of ",
    },
    {
      image: "/blogimage-3.svg",
      description: "Navigating the Used Car Finance Process",
      moredescription:
        "Navigating the Used Car Finance Process: A Step-by-Step Guide Buying a used car is a significant decision, one that can save you a considerable amount of ",
    },
    // Add more objects as needed
  ];
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
  return (
    <>
      <Carousel
        itemClass="carouselItem" partialVisible={false}
        // showDots={this?.props?.deviceType !== "mobile" ? false : true}
        infinite={true}
        removeArrowOnDeviceType={[
          "mobile",
          "tablet",
          "desktop",
          "superLargeDesktop",
        ]}
        showDots={true}
        responsive={responsive}
      >
        <div className="main-cele-div">
          <div className="cardceleb-div">
            <h3 className="cardceleb-name">Suresh Dhobi</h3>
            <p className="cardceleb-desc">I have applied for a used car loan and have received verification and approval quickly. The service and staff were great and extremely helpful.</p>
          </div>
        </div>
        <div className="main-cele-div">
          <div className="cardceleb-div-2">
            <h3 className="cardceleb-name">Tushar Shah</h3>
            <p className="cardceleb-desc">This is my first time using Car Pe Cash's car loan service, and I'm pleased with the experience and welcoming staff.</p>
          </div>
        </div>
        <div className="main-cele-div">
          <div className="cardceleb-div-3">
            <h3 className="cardceleb-name">Padhiyar Sanjay</h3>
            <p className="cardceleb-desc"> I took out a loan for a used car. The service and the staff's behaviour were excellent; the process was quite simple and easier.</p>
          </div>
        </div>
        <div className="main-cele-div">
          <div className="cardceleb-div-4">
            <h3 className="cardceleb-name">Uvez</h3>
            <p className="cardceleb-desc"> Quick and professional service for a used car loan. I am Amazed and Thankful.....!</p>
          </div>
        </div>
        <div className="main-cele-div">
          <div className="cardceleb-div-5">
            <h3 className="cardceleb-name">Khant Arvindbhai</h3>
            <p className="cardceleb-desc"> The representatives of Car Pe Cash are excellent. They provide excellent service efficiently and respond quickly. I am satisfied.</p>
          </div>
        </div>
        {/* {imageDescriptions?.map((imageDescription, index) => (
          <div key={index} className="card-wrapper">
            <img
              className="card-image"
              src={imageDescription?.image}
              alt={imageDescription.description}
            />
            <p className="heading">{imageDescription?.description}</p>
            <p className="heading-description">
              {imageDescription?.moredescription}
            </p>
            <button className="read-more-btn">Read More</button>
          </div>
        ))} */}
      </Carousel>
    </>
  );
};

export default Cardscelebs;
