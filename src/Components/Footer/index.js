
import React from 'react'
import Button from '../Button/Index'

import Link from 'next/link'
import "./footer.scss"
import { Icons } from '@/assets/img/Icons';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer >
      <MaxWidthWrapper backgroundColor={"#56c5d0"}>
        <div className="check-eligibility-footer">
          <div className="left">
            <h2 className="looking-for-cash">
              Looking for a cash?
            </h2>
            <p >
              Choose us for a seamless car loan experience with the best car loan interest rates in the market.
            </p>
          </div>
          <div className="right">
            <Link href={"/"}><Button name={"Check Eligibility"} /></Link>
          </div>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper backgroundColor='#142254'>
        <div className="info-footer">
          <div className="car-info-left">
            <Image height={74} width={170} src={Icons.Car.src} alt='car-pe-cash-logo'/>
            <p>Welcome to Car Pe Cash, Trust us to provide you with the best options for your used car loan requirements in Ahmedabad, ensuring a smooth and hassle-free experience. Contact Car Pe Cash today to embark on a journey of hassle-free and top-notch used car financing services in Ahmedabad.
            </p>
          </div>
          <div className="right">
            <div className="common navigation">
              <h5 className="head-name">
                Navigations
              </h5>
              <ul>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/about-us"}>About us</Link></li>
                <li><Link href={"/blog"}>Blog</Link></li>
                <li><Link href={"/cities"}>Cities</Link></li>
                <li><Link href={"/contact"}>Contact</Link></li>
                <li><Link href={"privacy-policy"}>Privacy Policy</Link></li>
              </ul>
            </div>
            <div className=" common top-services">
              <h5 className="head-name">
                Top Services
              </h5>
              <ul>
                <li><Link href={"/used-car-purchase-loan"}>Used Car Purchase Loan </Link></li>
                <li><Link href={"/used-car-refinance-loan"}>Used Car Refinance Loan</Link></li>
                <li><Link href={"/used-car-top-up-loan"}>Used Car Topup Loan </Link></li>
                <li><Link href={"/used-commercial-vehicle-loan"}>Used Commercial Vehicle Loan</Link></li>
              </ul>
            </div>
            <div className=" common contect-us">
              <h5 className="head-name">
                Contact us
              </h5>
              <ul>
                <li><a href="tel:+917779070444"><div className="img-div"><Image height={24} width={24} alt='telephone-icon' src={"/Group 148.svg"} /></div>+91 777 9070 444 </a></li>
                {/* <li><a href="tel:+917779070444"><div className="img-div"><img src={"/Group 138.svg"} /></div>+91 777 9070 444 </a></li> */}
                <li><a href="tel:+917779020444"><div className="img-div"><Image height={24} width={24}  alt='telephone-icon' src={"/Group 148.svg"} /></div>+91 777 9020 444</a></li>
                <li><a href="mailto:hello@carpecash.in "><div className="img-div"><Image height={24} width={24}  alt='Email-icon' src={"/contactIcon.svg"} /></div> hello@carpecash.in </a></li>

              </ul>

            </div>

          </div>
        </div>
      </MaxWidthWrapper>
      <div className="license-footer">
        © 2024 Car Pe Cash |  All Rights Reserved by ENVISION BUSINESS SOLUTION
      </div>
    </footer>


  )
}

export default Footer