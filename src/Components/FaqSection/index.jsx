"use client";
import React, { useEffect, useRef, useState } from "react";
import "./FaqSection.scss";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Button from "../Button/Index";
import { useDispatch } from "react-redux";
import { faqAPI } from "@/Redux/Features/faqSlice";
import Link from "next/link";
import { toast } from "react-toastify";
import { Icons } from '@/assets/img/Icons';
import Image from "next/image";
// import { AppImages } from "../../Images/images";

export default function FAQSection({ pageName }) {
  const optionsRef = useRef()
  const [isActive, setActive] = useState("");
  const [faqData, setFaqData] = useState("");
  const [faqLoader, setFaqLoader] = useState(false);
  const dispatch = useDispatch();
  const handleClick = (id) => {
    setActive(id);
    if (isActive === id) {
      setActive("");
    }
  };

  useEffect(() => {
    setFaqLoader(true);
    dispatch(faqAPI()).then((res) => {
      if (res?.payload?.status && res?.payload?.status == 200) {
        const data = res?.payload?.data?.data
          ?.flatMap((item) => item?.attributes[pageName] ?? [])
          .filter((item) => item?.show);
        // console.log(data, "Flattened FAQ data");
        setFaqData(data);
        setFaqLoader(false);
      } else {
        toast.error(res?.payload?.data?.message);
      }
    });
  }, []);
  const scrollToDropDownEnd = () => {
    if (optionsRef.current) {
      optionsRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

   useEffect(() => {
     if (isActive) {
       scrollToDropDownEnd();
     }
   }, [isActive]);


  return (
    // <MaxWidthWrapper>
    <div className="FAQsection">
      <div className="faq-que-ans ">
        <div className="question-container">
        <h2 className="faq-heading">Frequently Asked Questions </h2>
          <p>
            Didn't you find everything you were looking for? Find all the
            answers below
          </p>
        </div>
        <div className="faq-wrapper">
          {faqData &&
            faqData.map((item) => (
              <>
                <div  style={{marginRight:"5px"}} key={item?.id}>
                  <div 
                    className={
                      isActive === item?.id
                        ? "question-wrapper borderWrapper"
                        : "question-wrapper"
                    }
                    key={item?.question}
                  >
                    <div
                      className="question"
                      onClick={() => handleClick(item?.id)}
                    >
                      <h3>{item.question}</h3>
                      <button
                        className={
                          isActive === item?.id ? "button active" : "button "
                        }
                        aria-label="Read FAQ"
                      >
                        <Image height={10} 
                        width={12}
                          loading={"lazy"}
                          className={
                            isActive === item?.id
                              ? "faqarrowactive "
                              : "faqarrow"
                          }
                          alt="dropdown-icon"
                          src="/Polygon 2.svg"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    className={
                      isActive === item.id ? "answer active" : "answer"
                    }
                  >
                    {item?.answer}
                  </div>
                </div>
              </>
            ))}
        </div>
        <div className="faq-footer-btn">
          <Link href={"/contact"}>
            <Button className={"contact-us-btn"} name={"Contact Us"} />
            </Link>
            </div>
      </div>
      <div className="img-faq">
        <Image height={603} width={555} src={Icons.Faq.src} alt="FAQ" />
      </div>
    </div>
    // </MaxWidthWrapper>
  );
}
