import React from 'react'
import "./bank.scss"
import Button from '@/Components/Button/Index'
import Link from 'next/link'
import { Icons } from '@/assets/img/Icons'
import { InquiryButton } from '@/Components/InquiryButton'
import MaxWidthWrapper from '@/Components/MaxWidthWrapper'
import FAQSection from "@/Components/FaqSection";
import { capitalizeFirstLetter } from '../../../util/helper'
import { bankList } from '../../../util/bankData'
export async function generateMetadata({ params }) {
    const curruntBank = bankList.find(({ bankName }) => bankName.toLowerCase() === decodeURI(params.bank).toLowerCase()) || null

    return {
        title: curruntBank?.metaTitle || null,
        description: curruntBank?.metaDescription ||null,
    }
}
export default function page({ params }) {
 
    const { bank } = params
    const curruntBank = bankList.find(({ bankName }) => bankName.toLowerCase() === decodeURI(bank).toLowerCase()) || null
    if (!curruntBank) return null
    return (
        <div className='bank'>
            <section className='bg-cover'>
                <h1 className=''>
                    Get Used Car Loan From {capitalizeFirstLetter(curruntBank.bankName)} Bank
                </h1>
                <Link href={"/"}>
                    <Button name={"Check Eligibility"} className="btn-Check-eligibility" />
                </Link>
            </section>
            <MaxWidthWrapper>
                <div className="bank-details outer-padding">
                    <img src={curruntBank?.img
                        || "/hdfc.svg"} />
                    <h1>
                        {curruntBank?.section1.head}
                    </h1>
                    <p>   {curruntBank?.section1.peragraph}</p>

                </div>

                <div className='bank-sub-details outer-padding '>
                    <h1>
                        {curruntBank?.section2.head}
                    </h1>
                    <p>
                        {curruntBank?.section2.peragraph}
                    </p>
                </div>
                <div className='bank-sub-details outer-padding '>
                    <h1>
                        {curruntBank?.section3.head}

                    </h1>
                    <ul className='bank-feature-list'>
                        {curruntBank?.featureList.map((feature, id) => (<li> <img src={Icons.checkCircle.src} /> {feature}
                        </li>))}

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
