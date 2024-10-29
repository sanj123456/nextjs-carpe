import React from 'react'
import "../hdfc/hdfc.scss"
import Button from '@/Components/Button/Index'
import Link from 'next/link'
import { Icons } from '@/assets/img/Icons'
import { InquiryButton } from '@/Components/InquiryButton'
import MaxWidthWrapper from '@/Components/MaxWidthWrapper'
import FAQSection from "@/Components/FaqSection";
export default function page() {
    return (
        <div className='bank'>
            <section className='bg-cover'>
                <h1 className=''>
                Get Used Car Loan From YES Bank
                </h1>
                <Link href={"#"}>

                    <Button name={"Check Eligibility"} className="btn-Check-eligibility" />
                </Link>
            </section>
            <MaxWidthWrapper>
                <div className="bank-details outer-padding">
                    <img src={"/hdfc.svg"} />
                    <h1>
                        Best Car Financing Services in Ahmedabad - Car Pe Cash
                    </h1>
                    <p>A used car loan makes it possible to buy a pre-owned vehicle as per the requirement. It's a financial settlement that makes holding a quality used car possible. Car Pe Cash presents the lowest interest rates on car loans in Ahmedabad. Whether you need a small city car or a roomy SUV, Car Pe Cash’s second-hand car loans let you drive in style. Car Pe Cash, associated with ICICI Bank in India, offers second-hand car loans for used cars. These loans are a fundamental part of any bank's offerings.</p>
                    <p>Car Pe Cash provides the best car financing services in Ahmedabad. As a car loan service provider, we understand the ever-increasing demand for second-hand car loans in India and aim to help you get the best deal.
                    </p>
                </div>

                <div className='bank-sub-details outer-padding '>
                    <h1>
                    Acquire a Car Loan for Used cars from YES Bank through Car Pe Cash with Ease Process.
                    </h1>
                    <p>
                    Our used car loans with Yes Bank offer affordable EMIs, flexible repayment options, and competing interest rates, making your dream of a car more of a reality.  We offer financing for a broad range of car models, ensuring you get the perfect fit for your needs.

                    </p>
                </div>
                <div className='bank-sub-details outer-padding '>
                    <h1>
                    The Process with YES Bank for Used Car Loans 
                    </h1>
                    <ul className='bank-feature-list'>
                        <li> <img src={Icons.checkCircle.src} /> Online Loan Application
                        </li>
                        <li> <img src={Icons.checkCircle.src} /> Home Verification
                        </li>
                        <li> <img src={Icons.checkCircle.src} /> Office Verification If Have</li>
                        <li> <img src={Icons.checkCircle.src} /> Used Car Valuation
                        </li>
                        <li> <img src={Icons.checkCircle.src} />Approval Within Working 24 Hours</li>
                        <li> <img src={Icons.checkCircle.src} /> Offline Loan Agreement  </li>
                        <li> <img src={Icons.checkCircle.src} /> Payment Process </li>
                        <li> <img src={Icons.checkCircle.src} /> Rc Transfer / Hpa Transfer</li>
                    </ul>
                </div>
            </MaxWidthWrapper>
            <div className='link'>
                <InquiryButton className={"bg-sky-blue"} />
            </div>
            <MaxWidthWrapper>
                <FAQSection pageName="bankPage" />
            </MaxWidthWrapper>
        </div>
    )
}
