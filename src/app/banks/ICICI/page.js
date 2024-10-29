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
                    Get Used Car Loan From ICICI Bank
                </h1>
                <Link href={"#"}>

                    <Button name={"Check Eligibility"} className="btn-Check-eligibility" />
                </Link>
            </section>
            <MaxWidthWrapper>
                <div className="bank-details outer-padding">
                    <img src={"/hdfc.svg"} />
                    <h1>
                        Car Loan Service Provider Company - Car Pe Cash
                    </h1>
                    <p>Buying a used car is common in India because it's more affordable. Additionally, new drivers like to practise driving a used car before purchasing a more expensive model. Whatever the reason, Car Pe Cash, with the assistance of ICICI Bank in India, offers car loans for used cars at affordable interest rates. These loans are an essential part of any bank's offerings.</p>
                    <p>Car Pe Cash is a car loan service provider company. We are proud to have served a large group of customers over the years by providing car loans for used cars. At Car Pe Cash, we perceive the prominence of giving credit where it's needed and are excited about the opportunities this sector offers.
                    </p>
                </div>

                <div className='bank-sub-details outer-padding '>
                    <h1>
                        Acquire a Car Loan for Used cars from ICICI Bank through Car Pe Cash with Ease.
                    </h1>
                    <p>
                        ICICI Bank offers used car loans for purchasing used cars or cars older than 30 days. ICICI has a straightforward online application process that involves providing car details and completing the application. With ICICI Bank Second-Hand Car Loans, it's a relaxed process with easy documentation, immediate verification, and quick loan disbursal.

                    </p>
                </div>
                <div className='bank-sub-details outer-padding '>
                    <h1>
                        The Process with ICICI Bank for Used Car Loans
                    </h1>
                    <ul className='bank-feature-list'>
                        <li> <img src={Icons.checkCircle.src} /> Offline Loan Application
                        </li>
                        <li> <img src={Icons.checkCircle.src} /> Home Verification
                        </li>
                        <li> <img src={Icons.checkCircle.src} /> Office Verification If Have</li>
                        <li> <img src={Icons.checkCircle.src} /> Used Car Valuation
                        </li>
                        <li> <img src={Icons.checkCircle.src} />Approval Within Working 48 Hours</li>
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
