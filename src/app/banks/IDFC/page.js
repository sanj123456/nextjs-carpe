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
                    Get Used Car Loan From IDFC Bank
                </h1>
                <Link href={"#"}>

                    <Button name={"Check Eligibility"} className="btn-Check-eligibility" />
                </Link>
            </section>
            <MaxWidthWrapper>
                <div className="bank-details outer-padding">
                    <img src={"/hdfc.svg"} />
                    <h1>
                        Best  Car Loan in Ahmedabad - Car Pe Cash
                    </h1>
                    <p>Holding your vehicle in busy Indian cities is a dream; however, the crucial aspect of budget constraints often delays this goal. A decision to buy a pre-owned car can be a solution. These cars, earlier owned but in pristine condition, await your ownership. Car Pe Cash is an affordable car loan interest rate company.</p>
                    <p>Car Pe Cash, affiliated with IDFC Bank in India, offers the best car refinance loans for used cars. IDFC First Bank's Used Car Loan aims to make your life easier by helping you own your car.</p>
                </div>

                <div className='bank-sub-details outer-padding '>
                    <h1>
                        Acquire a used car loan from IDFC Bank through Car Pe Cash at an Attractive Rate.
                    </h1>
                    <p>
                        IDFC First Bank offers an affordable interest rate of 11.49 percent for its Pre-owned vehicle loans, and the repayment period is from 12 to 84 months. At the same time, one can borrow an amount equal to 200% of the car price, consequently reducing the down payment amount. There are no issues involved while applying online or in person at any of our branches nearest you because everything has been simplified to ensure we approve within one day after receiving all required documents! Additional advantages include convenient toll road payments using the Fastag mechanism and rebates on gas and parking. Be sure that IDFC First Bank offers safety in full measure.</p>
                </div>
                <div className='bank-sub-details outer-padding '>
                    <h1>
                        The Process with IDFC Bank for Used Car Loans
                    </h1>
                    <ul className='bank-feature-list'>
                        <li> <img src={Icons.checkCircle.src} />Online Loan Application
                        </li>
                        <li> <img src={Icons.checkCircle.src} />Home Verification
                        </li>
                        <li> <img src={Icons.checkCircle.src} />Office Verification If Have</li>
                        <li> <img src={Icons.checkCircle.src} />Used Car Valuation
                        </li>
                        <li> <img src={Icons.checkCircle.src} />Approval Within Working 72 Hours</li>
                        <li> <img src={Icons.checkCircle.src} />Offline Loan Agreement  </li>
                        <li> <img src={Icons.checkCircle.src} />Payment Process</li>
                        <li> <img src={Icons.checkCircle.src} />Rc Transfer / Hpa Transfer</li>
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
