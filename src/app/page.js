import React from "react";
import "./page.scss";
// import "react-multi-carousel/lib/styles.css";

import Link from "next/link";

import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import dynamic from "next/dynamic";
import Image from "next/image";

const OurBlogs = dynamic(() => import("@/Components/OurBlogs"));
const CheckEligibility = dynamic(() => import("@/Components/CheckEligibility"));
const OurServices = dynamic(() => import("@/Components/OurServices"));
const HappyCustomers = dynamic(() => import("@/Components/HappyCustomers"));
const Celebration = dynamic(() => import("@/Components/Celebration"));
const FAQSection = dynamic(() => import("@/Components/FaqSection"));

// useEffect(() => {
//   setLoader(true);
//   axios
//     .get(
//       // "https://carapp-strapi.testyourapp.online/api/banner-image-and-videos?populate=*"
//       `${BASE_URL}api/banner-image-and-videos?populate=*`
//     )
//     .then((response) => {
//       const data = response?.data?.data;
//       console.log(data, "dataaaaaaaa");

//       const mediaUrls = data
//         .filter((item) => item?.attributes?.bannerMedia?.data)
//         .map((item) => item.attributes.bannerMedia.data.attributes.url);

//       const imageUrls = data
//         .filter((item) => item?.attributes?.bannerImage?.data)
//         .map((item) => item.attributes.bannerImage.data.attributes.url);

//       if (mediaUrls.length > 0) {
//         setdynamicMedia(mediaUrls);
//       }

//       if (imageUrls.length > 0) {
//         setDynamicImage(imageUrls);
//       }
//       setLoader(false);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }, []);

const HomePage = async () => {
  const data =
    "If you're seeking reliable financing for your used car loan in Ahmedabad, choose Car pe Cash. Trust us to provide the best financing services, and get behind the wheel of your dream car today!";

  return (
    <>
      <div className="main-div">
        <CheckEligibility />
        <OurServices />
        <div className="just-photo-div-wrapper">
          <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
            <div className="photo-text-wrapper">
              <h2 className="photo-heading">
                Do you want to know <br /> your used car loan eligibility with
                CAR PE CASH?
              </h2>
              <p className="photo-text">
                Car Pe Cash is here to help! Our proficient team associates with
                various banks to define your loan eligibility based on your
                credit score and <br />
                find the best loan options for you.Enjoy the best car loan
                finance charges on the market.
              </p>
            </div>
            <div className="photos-wrapper">
              <picture>
                {/* Mobile image */}
                <source media="(max-width: 650px)" srcSet="/mobile-man.webp" alt="Car Loan Eligibility" />
                {/* Tablet image */}
                {/* <source media="(min-width: 651px) and (max-width: 1024px)" srcSet="/home-man-tablet.svg" /> */}
                {/* Default image (for larger screens) */}
                <Image
                  style={{ width: "100%" }}
                  src="/home-man.png"
                  alt="Car Loan Eligibility"
                  layout="fill"
                  className={"image"}
                />
              </picture>
              {/* <img style={{width:"100%"}} src="/home-man.svg"/> */}
            </div>
          </div>
        </div>
        <HappyCustomers info={data} />
        <Celebration />
        <div className="channel-partners">
          <h2 className="channel-partners-heading">Channel Partners</h2>
          <p className="channel-partners-text">
            The cornerstone of our success story. Together, we navigate
            challenges, unlock opportunities, and deliver value to customers,
            driving growth and innovation.
          </p>
          <div className="patners-img">
            <div className="partners-img-div">
              <Image
                style={{ width: "100%", height: "100%" }}
                width={158}
                height={80}
                src="/2560px-ICICI_Bank_Logo 1.svg"
                alt="ICICI_Bank_Logo"
              />
            </div>
            <div className="partners-img-div">
              <Image width={158} height={80} src="/bajaj.svg" alt="partner" />
            </div>
            <div className="partners-img-div">
              <Image
                width={158}
                height={80}
                src="/Axis_Bank_logo 1-svg.svg"
                alt="Axis_Bank_logo"
              />
            </div>
            <div className="partners-img-div">
              <Image
                width={158}
                height={80}
                src="/AU-SMALL-FIN-BANK-1 1.svg"
                alt="AU-SMALL-FINANCE-BANK"
              />
            </div>
            <div className="partners-img-div">
              <Image
                width={158}
                height={80}
                src="/HDFC-Bank-logo 1.svg"
                alt="HDFC-Bank-logo"
              />
            </div>
            <div className="partners-img-div">
              <Image width={158} height={80} src="/chola.svg" alt="partner" />
            </div>
            <div className="partners-img-div">
              <Image
                width={158}
                height={80}
                src="/Yes_Bank_logo 1.svg"
                alt="Yes_Bank_logo"
              />
            </div>
            <div className="partners-img-div">
              <Image width={158} height={80} src="/kotak.svg" alt="partner" />
            </div>
            <div className="partners-img-div">
              <Image
                width={158}
                height={80}
                src="/herocorp.svg"
                alt="herocorp"
              />
            </div>
            <div className="partners-img-div">
              <Image width={158} height={80} src="/equitas.svg" alt="partner" />
            </div>
            <div className="partners-img-div">
              <Image
                width={158}
                height={80}
                src="/tatacapital.svg"
                alt="tatacapital"
              />
            </div>
            <div className="partners-img-div">
              <Image
                width={158}
                height={80}
                src="/IDFC_First_Bank_logo-1 1.svg"
                alt="IDFC_First_Bank_logo"
              />
            </div>
            {/* </div>
            <div className="bottom-2-images">
            <div style={{ width: '100%', position: 'relative' }}>
            <Image src="/2560px-ICICI_Bank_Logo 1.svg" alt="Mountains" layout="fill" objectFit="contain" />
            </div>
            <div style={{ width: '100%', position: 'relative' }}>
            <Image src="/2560px-ICICI_Bank_Logo 1.svg" alt="Mountains" layout="fill" objectFit="contain" />
            </div> */}
          </div>
          <div className="view-all-div">
            <Link href={"/banks"}>
              <button className="view-all-btn">View All</button>
            </Link>
          </div>
        </div>
        <OurBlogs />

        {/* <div> */}
        {/* <div className="faq-wrapper"> */}
        <MaxWidthWrapper>
          <FAQSection pageName="homePage" />
        </MaxWidthWrapper>
        {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default HomePage;
