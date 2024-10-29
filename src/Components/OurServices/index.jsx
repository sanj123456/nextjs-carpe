 
import React from 'react'
 
import OurServicesInquiryBtn from './OurServicesInquiryBtn';
import Link from 'next/link';
import Image from 'next/image';
import "./ourSevices.scss";
export default function OurServices() {
  return (
    <div className="Our-Services">
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <h1 className='partnering'>Partnering with Your Passion - Our Top Services</h1>
        <div className="cards-wrapper">
          <div className="card">
            <h3><span className="card-heading">Used Car</span></h3>
            {/* <br /> */}
            <h3><span className="card-heading">Purchase Loan</span></h3>
            <div className="text-wrapper">
              <p className="text-wrapper-p1">
                Quick & Simple <br /> way for <br /> used car Purchase loan
              </p>
              {/* <p className="text-wrapper-p1">
                    Get the dream car within minutes with our pre-approved loans!
                  </p> */}
            </div>
            <Link href={"/used-car-purchase-loan"}>
              <button id="check-eligibility-btn">Check Eligibility</button>
            </Link>
          </div>
          <div className="card-2">
            <h3 className="card-heading">
              Used Car
              <br /> Refinance Loan
            </h3>
            <div className="text-wrapper">
              <p className="text-wrapper-p1">
                Refinance <br /> for Re-shaping <br /> the Future
              </p>
              {/* <p className="text-wrapper-p1"> Shape The Future with Dream Plans
                    Through Easy Interest Rates</p> */}
            </div>
            <Link href={"/used-car-refinance-loan"}>
              <button id="check-eligibility-btn">Check Eligibility</button>
            </Link>
          </div>
          <div className="card-3">
            <h3 className="card-heading">
              Used Car
              <br /> Top Up Loan
            </h3>
            <div className="text-wrapper">
              <p className="text-wrapper-p1">
                TopUp Loans - Quick Approval <br /> & Flexible
              </p>
              {/* <p className="text-wrapper-p1">
                    Fast Approval and Great Interest Rates
                  </p>
                  <p className="text-wrapper-p1">
                    With Flexible EMI Options
                  </p> */}
            </div>
            <Link href={"/used-car-top-up-loan"}>
              <button id="check-eligibility-btn">Check Eligibility</button>
            </Link>
          </div>
        </div>
        <div className="image-content-wrapper">
          <div className="img-div">
            <Image
              className="keyImage"
              height={440}
              width={440}
              src="/Rectangle 555.webp"
              alt='Car Financing Services'
            />
          </div>
          <div className="content-div">
            <h2 className="content-heading">
              Top Car Financing Services in Ahmedabad
            </h2>
            <p className="content-para">
              CAR PE CASH is a dependable car loan service company in Gujarat
              that offers unusual services to customers. We associate with
              various banks to make the loan process fast and easy. Our
              professionals evaluate the client's documents and suggest the best
              bank options according to the client's CIBIL score and profile
            </p>
            <p className="content-para2">
              All of our services at CAR PE CASH are entirely free, which sets
              us apart with no hidden charges. Get in touch with CAR PE CASH for
              a persistent car loan experience and competent interest rates in
              the market.
            </p>
            <div className="btn-div-wrapper">
              <Link href={`about-us`}>
                <button className="know-more-btn">Know More</button>
              </Link>
              <OurServicesInquiryBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


