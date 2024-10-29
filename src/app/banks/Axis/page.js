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
                    Get Used Car Loan From Axis Bank
                </h1>
                <Link href={"#"}>

                    <Button name={"Check Eligibility"} className="btn-Check-eligibility" />
                </Link>
            </section>
            <MaxWidthWrapper>
                <div className="bank-details outer-padding">
                    <img src={"/hdfc.svg"} />
                    <h1>
                        Used Vehicle Finance Company - Car Pe Cash
                    </h1>
                    <p>Applying for a loan for a second-hand car in India works much similarly to getting a loan for a new car. Multiple banks and NBFCs (Non-Banking Financial Companies) provide loans, especially for buying used cars. Car Pe Cash has the lowest interest rates for a car loan in Ahmedabad. In recent years, the trading of second-hand car loans has grown widely.  It's now relatively easy to find top-quality used cars at a reasonable cost.</p>
                    <p>Car Pe Cash is a leading used vehicle finance company that makes it easier to buy a pre-owned car. With Axis Bank, Car Pe Cash Finance leads the second-hand car loan market with competing interest rates, low costs, an easy documentation process, and quick loan disbursement.
                    </p>
                </div>

                <div className='bank-sub-details outer-padding '>
                    <h1>
                        Acquire a Second-hand Car Loan from Axis Bank through Car Pe Cash with Comfort.
                    </h1>
                    <p>
                        Axis Bank offers loans for buying used cars, beginning with Rs.1 Lakh and covering up to 85% of the car's value. They ensure quick loan processing and ensure that present customers get additional benefits.
                    </p>
                </div>
                <div className='bank-sub-details outer-padding '>
                    <h1>
                        The Process with Axis Bank for Used Car Loans
                    </h1>
                    <ul className='bank-feature-list'>
                        <li> <img src={Icons.checkCircle.src} /> Online Loan Application
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
