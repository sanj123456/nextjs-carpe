"use client"
import React, { useEffect } from 'react';
import "./contactthankyou.scss";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import Link from 'next/link';
import Button from '../../Components/Button/Index'
const ContactThankyou = () => {
  return (
    <MaxWidthWrapper backgroundColor={"#E4E0E1"}>
    <div className="thankyou-container">
      <div className="content-wrapper">
        <div className="icon-container">
          <svg 
            className="checkmark-icon" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>
        <div className="text-content">
          <h1 className="title">Thank You for Your Loan Inquiry</h1>
          <p className="message">We appreciate your interest in our financing services.</p>
          <p className="sub-message">Our team will reach out to you soon!</p>
        </div>
        {/* <div className="card">
          <h2 className="card-title">What's Next?</h2>
          <ul className="steps-list">
            <li>
              <span className="step-number">1</span>
              <span className="step-text">Vehicle and document verification</span>
            </li>
            <li>
              <span className="step-number">2</span>
              <span className="step-text">Loan terms assessment</span>
            </li>
            <li>
              <span className="step-number">3</span>
              <span className="step-text">Final approval notification</span>
            </li>
          </ul>
        </div> */}
        <div className="contact-info">
          <p>Questions about your loan? Contact us at <span className="highlight"><a href="mailto:carpecash001@gmail.com">carpecash001@gmail.com</a></span></p>
        </div>
        <div className='go-back-button-thankyou'>
        <Link href={"/"}><Button name={"Go Back!"} /></Link>
        </div>
      </div>
    </div>
    </MaxWidthWrapper>
  );
};

export default ContactThankyou;