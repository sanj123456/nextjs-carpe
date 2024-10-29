import React from 'react'
import "./hdfc.scss"
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
          Get Used Car Loan From HDFC Bank
        </h1>
        <Link href={"#"}>
          <Button name={"Check Eligibility"} className="btn-Check-eligibility" />
        </Link>
      </section>
      <MaxWidthWrapper>
        <div className="bank-details outer-padding">
          <img src={"/hdfc.svg"} />
          <h1>
            Best Car Finance Company - Car Pe Cash
          </h1>
          <p>The second-hand car loan market is multiplying, and possible funding plays a crucial role in making car ownership dreams a reality. Car Pe Cash is the best car finance company. With HDFC Bank, Car Pe Cash Finance leads the way in the used car loan market with competitive interest rates, low costs, a smooth documentation process, and quick loan processing. Car Pe Cash is an affordable car loan interest rates company. With these advantages and the association with HDFC Bank, Car Pe Cash has positioned itself as a key player in the used car loan segment, helping many individuals achieve their best car loan in Ahmedabad ambitions efficiently and affordably.</p>

        </div>

        <div className='bank-sub-details outer-padding '>
          <h1>
            Acquire a Used Car Loan from HDFC Bank through Car Pe Cash with Comfort.
          </h1>
          <p>
            It's simple and convenient to apply for and get approved for a used car loan from HDFC Bank through Car Pe Cash. Our reasonable rates, quick approval, and minimal paperwork will make you relaxed at every step of your journey.
          </p>
        </div>
        <div className='bank-sub-details outer-padding '>
          <h1>
            The Process with HDFC Bank for Auto Loans for used vehicles
          </h1>
          <ul className='bank-feature-list'>
            <li> <img src={Icons.checkCircle.src} /> Offline Loan Application
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
