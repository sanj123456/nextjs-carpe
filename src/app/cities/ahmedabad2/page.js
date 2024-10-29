'use client';
import React, { useEffect, useState } from 'react'
import "./city.scss"
import { useParams } from 'next/navigation'
import { cities } from '@/util/cityData'
import Button from '@/Components/Button/Index';
import Image from 'next/image';
import Link from 'next/link';
import { InquiryButton } from '@/Components/InquiryButton';
import MaxWidthWrapper from '@/Components/MaxWidthWrapper';
import FAQSection from "@/Components/FaqSection";
// import { InquiryButton } from '@/Components/InquiryButtonContainer';
export default function Page({ }) {
  // const { city } = useParams()

  const [curruntCity, setCurruntCity] = useState(null)
  useEffect(() => {
    // console.log(city)
    // setCurruntCity(cities.find(({ cityName }) => cityName.toLowerCase() === city.toLowerCase()))
    // console.log(cities.find(({ cityName }) => cityName.toLowerCase() === city.toLowerCase()))
  }, [])
  // if (!curruntCity) return null
  return (
    <div id='main-div-city' className=''>
      <section className='section1 bg-cover outer-padding'>
        <MaxWidthWrapper>
          <h1>
            Get used car loan in <span>{curruntCity?.areaName || "Prahlad Nagar"}</span>,<br /> <span>{curruntCity?.cityName || "Ahmedabad"}</span>
          </h1>
        </MaxWidthWrapper>
        <Link href={"/"}><Button name={"Check Eligibility"} className={"bg-sky-blue-btn"} /></Link>
      </section>
      <section >
        <MaxWidthWrapper>
          {/* <div className="city-details outer-padding">
            <div className='img-div'>
              <img src="/Rectangle 5.svg" />
            </div>
            <div className='div-float-right'>
              <h1>
                Lorem Ipsum is simply dummy text of the printing.
              </h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                <br /> <br />
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                <br /> <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                <br /> <br />
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                <br /> <br />
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </div> */}
          <div className="city-details outer-padding">
            <img src={"/Rectangle 5.svg"} />
            <h1>
              Get a Used Car Loan in Ahmedabad with Affordable Interest Rates!
            </h1>
            <p>Ahmedabad, a city in Gujarat, is India's fifth-largest city and among the world's rapidly growing urban centers. It is renowned for its abundant culture, prospering industries, and dynamic lifestyle. Ahmedabad, located by the Sabarmati River, is known for its culture, history, and business. It's renowned for the celebration of vibrant festivals, landmarks like the Sabarmati Ashram, and the impressive Akshardham Temple. Ahmedabad flawlessly blends tradition with modern life, creating a vibrant environment for its residents.
              <br /> <br />
              As a large industrial center in India, it attracts people from various domains, including professionals, entrepreneurs, and families.
              <br /> <br />
              Car Pe Cash is the best car loan company in Ahmedabad. It offers financial services, including loans for a wide variety of used cars, including hatchbacks, premium hatchbacks, sedans, MUVs, and SUVs from various brands.
              <br /> <br />
              A large number of people in Ahmedabad wish to own a car for comfort, business, or exploring the city. Car Pe Cash recognizes this and offers Used Car Loans in Ahmedabad to make owning a pre-owned car simpler and smoother.
              <br /> <br />
              With our customer-oriented procedure and transparent loan process, we are dedicated to being the best car loan interest rate company to help residents achieve their dream of owning a pre-owned car.</p>

          </div>

          <div className='city-sub-details outer-padding '>
            <h1>
              Features and Benefits of Used Car Loan in Ahmedabad
            </h1>
            <h3>
              Quick and Convenient
            </h3>
            <p>
              A quick and easy process makes our client feel relaxed while getting the funds needed for a used car.
            </p>
            <h3>
              Affordable Interest Rates
            </h3>
            <p>
              Our attractive interest rates ensure that the repayments are budget-friendly and fit the financial needs of our clients.
            </p>
            <h3>
              100% Car Value Loan
            </h3>
            <p>
              Car Pe Cash is the best car loan in Ahmedabad. We make car ownership accessible by providing loans up to 100% of the car's value so our clients can enjoy buying their choice of car without any compromises.
            </p>
            {/* <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              <br /> <br />
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              <br /> <br />
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p> */}
          </div>
          <div className='city-sub-details outer-padding '>
            <h1>
              What you need to Apply for a Used Car Loan in Ahmedabad
            </h1>
            <p>
              Apply for a car loan if you are 21 years old and your income and job are both stable. Usually, anyone who is employed will have to be at least 21 years old, make at least Rs20,000 per month regularly over the period, and have held his or her current job for not less than one year. A person running their own business must prove earning consistency over at least three years from a successful business, deciding from the creditor's perspective.
              <br /> <br />
              Apply now with Car Pe Cash, an Affordable Car Loan Interest Rate Company, for Your Used Car Loan in Ahmedabad!
              <br />
            </p>
          </div>
        </MaxWidthWrapper>
      </section>

      <div className='link'>
        <InquiryButton className={"bg-sky-blue"} />
      </div>
      <MaxWidthWrapper>
        <FAQSection pageName="cityPage" />
      </MaxWidthWrapper>
    </div>
  )
}
