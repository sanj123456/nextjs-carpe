"use client";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "./Carousel.scss";

const CarouselComp = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const sliderImageUrl = [
    //First image url
    {
      url: "https://s3-alpha-sig.figma.com/img/e5f0/abb7/e68f423669c080cb1220c36dd451bcd2?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OlY5zLMOaeX4R9rFexmwUGgi48Dz8I45owLtnXI-FlVv8liYm1ddVRRBD7H7tXPSQg6uoyQM6pkpUO5GB599kfuzGgOYS03R8HZEyHdSiIno-G79ZEk~Cyv5FCiIAWTyk0F33KhloKmKX6Aw0gjGib2jWod65KXTawRW83LyM-Mwlfyqt~J9YAqxaO4RVbQmO8w5VJTK3vjl5NGIszeqHxpXMML4YV5RIOKrjdt819zNab2sIwz5O~waR5IQkM-xeDpsqDcxOWR5zwf7rsjPQFTYdAq51500gHpyiZW~QqUJYgkpnvqHkKQ~RQDBV5ybb9Pj-NGUa-lwy8WhLCl~pA__",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/e5f0/abb7/e68f423669c080cb1220c36dd451bcd2?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OlY5zLMOaeX4R9rFexmwUGgi48Dz8I45owLtnXI-FlVv8liYm1ddVRRBD7H7tXPSQg6uoyQM6pkpUO5GB599kfuzGgOYS03R8HZEyHdSiIno-G79ZEk~Cyv5FCiIAWTyk0F33KhloKmKX6Aw0gjGib2jWod65KXTawRW83LyM-Mwlfyqt~J9YAqxaO4RVbQmO8w5VJTK3vjl5NGIszeqHxpXMML4YV5RIOKrjdt819zNab2sIwz5O~waR5IQkM-xeDpsqDcxOWR5zwf7rsjPQFTYdAq51500gHpyiZW~QqUJYgkpnvqHkKQ~RQDBV5ybb9Pj-NGUa-lwy8WhLCl~pA__",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/e5f0/abb7/e68f423669c080cb1220c36dd451bcd2?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OlY5zLMOaeX4R9rFexmwUGgi48Dz8I45owLtnXI-FlVv8liYm1ddVRRBD7H7tXPSQg6uoyQM6pkpUO5GB599kfuzGgOYS03R8HZEyHdSiIno-G79ZEk~Cyv5FCiIAWTyk0F33KhloKmKX6Aw0gjGib2jWod65KXTawRW83LyM-Mwlfyqt~J9YAqxaO4RVbQmO8w5VJTK3vjl5NGIszeqHxpXMML4YV5RIOKrjdt819zNab2sIwz5O~waR5IQkM-xeDpsqDcxOWR5zwf7rsjPQFTYdAq51500gHpyiZW~QqUJYgkpnvqHkKQ~RQDBV5ybb9Pj-NGUa-lwy8WhLCl~pA__",
    },
    // {
    //   url:
    //     "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*"
    // },
    // //Second image url
    // {
    //   url:
    //     "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*"
    // },
    // //Third image url
    // {
    //   url:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU"
    // },

    // //Fourth image url

    // {
    //   url:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU"
    // }
  ];
  return (
    <>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl?.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img width={100} height={100} src={imageUrl?.url} alt="movie" />
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default CarouselComp;
