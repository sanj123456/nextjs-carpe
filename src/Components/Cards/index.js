"use client";
import React, { useEffect, useState } from "react";
import "./cardss.scss";
// import { Link } from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { BASE_URL } from "@/util/constant";
import axios from "axios";
import BlogCard from "@/Components/BlogCard";
import { formatDate } from "@/util/helper";
import { BASE_URL } from "@/util/constant";
import Link from "next/link";
import { getBlogs } from "@/API/services";


const Cards = ({ blogs = [] }) => {
  const [isMobile, setIsMobile] = useState(false);
  // const [blogs, setBlogs] = useState([]);


  // useEffect(() => {
  //   (async () => {
  //     const { paginationData, blogs } = await getBlogs(1);
  //     setBlogs([...blogs, ...blogs , ...blogs]);

  //   })()


  // })
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize(); // Set the initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // const imageDescriptions = [
  //   {
  //     image: "/blogimage-1.svg",
  //     description: "Navigating the Used Car Finance Process",
  //     moredescription:
  //       "Navigating the Used Car Finance Process: A Step-by-Step Guide Buying a used car is a significant decision, one that can save you a considerable amount of ",
  //   },
  //   {
  //     image: "/blogimage-2.svg",
  //     description: "Navigating the Used Car Finance Process",
  //     moredescription:
  //       "Navigating the Used Car Finance Process: A Step-by-Step Guide Buying a used car is a significant decision, one that can save you a considerable amount of ",
  //   },
  //   {
  //     image: "/blogimage-3.svg",
  //     description: "Navigating the Used Car Finance Process",
  //     moredescription:
  //       "Navigating the Used Car Finance Process: A Step-by-Step Guide Buying a used car is a significant decision, one that can save you a considerable amount of ",
  //   },
  //   {
  //     image: "/blogimage-1.svg",
  //     description: "Navigating the Used Car Finance Process",
  //     moredescription:
  //       "Navigating the Used Car Finance Process: A Step-by-Step Guide Buying a used car is a significant decision, one that can save you a considerable amount of ",
  //   },
  //   {
  //     image: "/blogimage-2.svg",
  //     description: "Navigating the Used Car Finance Process",
  //     moredescription:
  //       "Navigating the Used Car Finance Process: A Step-by-Step Guide Buying a used car is a significant decision, one that can save you a considerable amount of ",
  //   },
  //   {
  //     image: "/blogimage-3.svg",
  //     description: "Navigating the Used Car Finance Process",
  //     moredescription:
  //       "Navigating the Used Car Finance Process: A Step-by-Step Guide Buying a used car is a significant decision, one that can save you a considerable amount of ",
  //   },
  //   // Add more objects as needed
  // ];

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
      <button className="swiperBtn swiper-btn-right   " onClick={onClick}>

        <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.18774 13L7.23892 7L1.18774 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    )
  }

  const CustomleftArrow = ({ onClick }) => {
    return (
      <button onClick={onClick} className="swiperBtn swiper-btn-left ">
        <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.2386 1L1.18743 7L7.2386 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    )
  }
  return (
    <>
      <div
        className="outer-conatiner"
      // if you want chang button position , do changes here
      >


        {!!blogs.length && <Carousel
          // showDots={this?.props?.deviceType !== "mobile" ? false : true}
          infinite={true}
          showDots={isMobile}
          // showDots={false}
          // renderDotsOutside={true}
          // deviceType={this?.props?.deviceType}
          // dotListClass="custom-dot-list-style"
          // itemClass="carousel-item-padding-40-px"
          removeArrowOnDeviceType={['mobile','tablet']}
          customLeftArrow={< CustomleftArrow />}
          customRightArrow={<CustomRightArrow />}
          // autoPlay={true}
          responsive={responsive}
        >

          {blogs?.map(({ title, summary, img, blogDate, blogId, slug }, index) => (

            <div key={index} className="card-wrapper">
              <BlogCard slug={slug}  blogDate={blogDate} blogId={blogId} summary={summary} img={img} title={title} />
            </div>
            // <>
            //   <div key={index} className="card-wrapper">
            //     <img
            //       className="card-image"
            //       src={img}
            //       alt={"blogImg"}
            //     />
            //     <p className="heading">{title}</p>
            //     <p className="heading-description">
            //       {summary}
            //     </p>
            //     <Link href={`/blogs/${blogId}`} className="read-more-btn">Read More</Link>
            //   </div>

            // </>

          ))}
        </Carousel>}
      </div>
    </>
  );
};

export default Cards;
