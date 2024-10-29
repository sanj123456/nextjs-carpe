"use client";
import CheckEligibility from "@/Components/CheckEligibility";
import HappyCustomers from "@/Components/HappyCustomers";
import Image from "next/image";
import React from "react";
import "./servicesVehicalLoan.scss";
import Button from "@/Components/Button/Index";
import Link from "next/link";
import { openInquiryModel } from "@/Redux/Features/inquiryModelSlice";
import { useDispatch } from "react-redux";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
export default function Page() {
  const dataLoan =
    "Car Pe Cash is the best car loan company in Ahmedabad, specialising in used commercial vehicle loans for buying used cars. We aim to empower Indians and support their ambitions. Our branch network across Gujarat ensures easy and dependable service for all your financial requirements.";
  const dispatch = useDispatch();

  return (
    <div className="main-div-services">
      {/* <CheckEligibility /> */}
      <MaxWidthWrapper>
        <div className="quickestVehicle outer-padding">
          <img className="car-img" src="/truckss.webp" alt="Used Commercial Vehicle Loan"/>
          <div className="data">
            <h1>Your Quickest Way To Get Instant Used Commercial Vehicle Loan</h1>
            <p>
              At Car Pe Cash, discover the best car loans in Ahmedabad, with
              options for used car loans and used commercial vehicle loans.
              <br /> <br />
              Car Pe Cash is a top commercial vehicle loan company. We offer
              various used car loans and used commercial vehicle loans,
              guaranteeing an easy and smooth lending experience. Our qualified
              sales staff visits customers conveniently to provide quick loan
              approval.
            </p>
            <div className="button-container">
              {" "}
              <Button
                onClick={() => dispatch(openInquiryModel())}
                name="Inquire Now"
                className={"Inquiry-now-btn"}
              />
              <a style={{ width: "100%" }} href="tel:+917779070444">
                <Button
                  name={"Call on:-917779070444"}
                  className={"call-on-btn"}
                />
              </a>{" "}
            </div>
          </div>
        </div>

        <section className="key-features-container outer-padding">
          <h2>Key Features</h2>
          <div className="features">
            <div className="feature-card">
              <Image height={100} width={100} src={"/quick-process.svg"} />
              <h3>Decrease Loan Burden</h3>
              <p>
                Save money by opting for used commercial vehicles instead of new
                ones, with Car Pe Cash offering the lowest interest rates on car
                loans in Ahmedabad.
              </p>
            </div>
            <div className="feature-card">
              <Image height={100} width={100} src={"/instant-approval.svg"} />
              <h3>Flexible Financing Options</h3>
              <p>
                Choose a loan repayment plan that suits your budget and cash
                flow. We are a car loan service provider that makes financing
                easier.
              </p>
            </div>
            <div className="feature-card">
              <Image height={100} width={100} src={"/no-impact.svg"} />
              <h3>Fast Approval</h3>
              <p>
                Get swift financing approval to minimize downtime and focus on
                business growth with Car Pe Cash.
              </p>
            </div>
          </div>
        </section>

        <section className="checkout-unlimited-benefits outer-padding">
          <h2>Checkout Unlimited Benefits</h2>
          <div className="benefits-card-container">
            <div className="benefits-card">
              <Image height={50} width={37} src={"/money-bag.svg"} />
              <h3>Enhanced Cash Flow</h3>
              <p>
              Expand your payments to simplify monthly costs and manage your business's cash flow more competently.
              </p>
            </div>
            <div className="benefits-card">
              <Image height={50} width={37} src={"/Group33.svg"} />
              <h3>Wide range of Vehicle Selection</h3>
              <p>
              We have a wide range of used commercial vehicle loans provided by reliable dealers, customized to meet your precise transportation requirements
              </p>
            </div>
            <div className="benefits-card">
              <Image height={50} width={37} src={"/Group11.svg"} />
              <h3>Quicker Approvals</h3>
              <p>
              The application process is easy, smooth, and efficient, minimizing delays and ensuring you get access to funds quickly.
              </p>
            </div>
            <div className="benefits-card">
              <Image height={50} width={37} src={"/Group22.svg"} />
              <h3>Stay on Track</h3>
              <p>
              Receive notifications on your mobile and email about your EMIs to remain up-to-date and never miss a payment.
              </p>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
      <div className="happycustomers-services-div">
        <HappyCustomers info={dataLoan} />
      </div>
    </div>
  );
}
