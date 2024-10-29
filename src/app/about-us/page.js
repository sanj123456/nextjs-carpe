import React from "react";
import "./aboutus.scss";
import Cardscelebs from "@/Components/Cardsceleb";
import Image from "next/image";
import Celebration from "@/Components/Celebration";
import HappyCustomers from "@/Components/HappyCustomers";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
export const metadata = {
  title: "About - Your Trusted Partner for Financial Solutions",
  description:
    "Carpe Cash is your trusted partner for all your financial needs. Get to know us better on our About Us page and learn how we can help you achieve your financial goals.",
};
const Aboutus = () => {
  const data =
    "If you're seeking reliable financing for your used car loan in Ahmedabad, choose Car pe Cash. Trusted best car loan company in Ahmedabad for financing services.";
  return (
    <div className="main-div-aboutus ">
      <MaxWidthWrapper>
        <section className="about-us ">
          <div className="data">
            <h1>About Us</h1>
            <p><b>ENVISION BUSINESS SOLUTION</b> is a leading provider of used car and commercial vehicle loans in Ahmedabad and Gujarat.</p>
            <br/>
            <p>
              Car Pe Cash is a dependable <b>commercial vehicle loan company</b>{" "}
              that provides <b>used car loan</b> financing in Ahmedabad. We
              understand that purchasing a used car is a substantial investment.
              Car Pe Cash is the oldest and largest{" "}
              <b>car loan service provider company</b> in India, with a network
              of branches across Gujarat.Car Pe Cash is the <b>best car loan interest rates company,</b> established in 2023.
              <br />
              <br />
              {/* Car Pe Cash is the <b>best car loan interest rates company,</b> established in 2023. 
              <br/> */}
              {/* <br/> */}
              We offer a wide range of loan products, including,  <b>Used car loans,</b><b> Used Car Repurcase loans,</b> <b>Used Car top-up loans</b>, and <b>Used Car Commercial Vehicle loans</b>  Our flexible repayment terms and swift approval process ensure a seamless experience for our customers. We aim to partner with our customers to help them realize their ambitions.
              <br />
              <br />
            </p>
            <h2>Our Vision</h2>
            <p>
            Forming approachable and transparent financial management, dynamic, inventive solutions, and powerful alliances with clients, investors, and communities.
            <br/>
            <br/>
            </p>
            <h2>Our Mission</h2>
            <p>
            We continually enhance our services and modify them to meet market trends and client needs, ensuring a better experience for individuals and businesses.Associating with Car Pe Cash, the <b>best car loan interest rates company</b>, ensures that you will have the best financing options for your used car loan. At the first stage, our professionals understand your financial requirements and, accordingly, will assist in finding a loan that fits your budget, making it easier for you to purchase the car you desire.
            <br/>
            <br/>
            We are a car loan service provider company, and our team is consistently ready to answer all your queries, whether you are looking to buy a used car or have precise questions about financing.Let’s connect today. Trust us for the best financing services with <b>the lowest interest rates on a car loan in Ahmedabad</b>, and get behind the wheel of your dream car today!
            </p>
          </div>
          <img src="./aboutuss.png" alt="About Us"/>
        </section>
      </MaxWidthWrapper>
      <HappyCustomers info={data} />
      <Celebration />
    </div>
  );
};

export default Aboutus;
