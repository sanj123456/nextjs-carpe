"use client";
import CheckEligibility from '@/Components/CheckEligibility'
import HappyCustomers from '@/Components/HappyCustomers'
import Image from 'next/image'
import React from 'react'
import "./purchaseServices.scss"
import Button from '@/Components/Button/Index'
import Link from 'next/link'
import { openInquiryModel } from '@/Redux/Features/inquiryModelSlice'
import { useDispatch } from 'react-redux'
import MaxWidthWrapper from '@/Components/MaxWidthWrapper';
export default function Page() {
    const dataPurchase = 'Car Pe Cash is one of the most progressive used car purchase loan companies. With a mission to empower Indians and support their ambitions. Our extensive branch network spans Gujarat, ensuring accessible and reliable service for all your financial needs.'
    const dispatch = useDispatch();
    return (
        <div className='main-div-services'>

            <CheckEligibility />
            <MaxWidthWrapper>
                <div className='quickestPurchase outer-padding'>
                    <img className='car-img' src="/car-money.png" alt='Used Car Purchase Loan' />
                    <div className='data'>
                        <h1>Get Your Used Car Purchase Loan Quickly</h1>
                        <p>
                            Car Pe Cash understands the significance of buying a car and provides flexible, appropriate financing options for purchasing a used car. We have easy and flexible Used Car Loan options to ensure an easy and hassle-free car-buying process. Through attractive interest rates and repayment options customised to your budget, the Car Pe Cash Pre-Owned Car Loan application is fast and easy.
                            <br /> <br />
                            Car Pe Cash offers an affordable car loan for used cars with a smooth process and quick approval. Apply for a Car Pe Cash Used Car Loan today and make your dream car a reality.
                        </p>
                        <div className='button-container'> <Button onClick={() => dispatch(openInquiryModel())} name="Inquire Now" className="btn" /> </div>
                    </div>
                </div>

                <section className='key-features-container outer-padding'>
                    <h2>Key Features</h2>
                    <div className='features'>
                        <div className='feature-card'>
                            <Image height={100} width={100} src={"/quick-process.svg"} />
                            <h3>Quick Process</h3>
                            <p>Acquiring a Used Car Loan is fast and easy with Car Pe Cash's simple online application.</p>
                        </div>
                        <div className='feature-card'>
                            <Image height={100} width={100} src={"/instant-approval.svg"} />
                            <h3>Instant Approval within 48 hrs</h3>
                            <p>Our process is quick and simple, offering quick approval with minimal paperwork for Used Car Loans.</p>
                        </div>
                        <div className='feature-card'>
                            <Image height={100} width={100} src={"/no-impact.svg"} />
                            <h3>No Impact on Cibil</h3>
                            <p>Car Pe Cash ensures your CIBIL score remains intact with no impact from loan inquiries.</p>
                        </div>
                    </div>
                </section>

                <section className='checkout-unlimited-benefits outer-padding'>
                    <h2>Checkout Unlimited Benefits
                    </h2>
                    <div className='benefits-card-container'>
                        <div className='benefits-card'>
                            <Image height={50} width={37} src={"/money-bag.svg"} />
                            <h3>High Value Financing</h3>
                            <p>Car Pe Cash offers a Used Car Purchase Loan, offering maximum financing on a pre-owned car based on your suitability. Car Pe Cash offers competitive car loan interest rates for used cars.</p>
                        </div>
                        <div className='benefits-card'>
                            <Image height={50} width={37} src={"/Group33.svg"} />
                            <h3>Minimal Documentation</h3>
                            <p>Our process is easy and quick. We require minimal documentation so that you can get the loan quickly and easily. Car Pe Cash offers convenient, best-used car top-up loans to satisfy your requirements.</p>
                        </div>
                        <div className='benefits-card'>
                            <Image height={50} width={37} src={"/Group11.svg"} />
                            <h3>Quick Disbursal</h3>
                            <p>Car Pe Cash offers Used Car Purchase Loans with the comfort of financing your second-hand car through fast approvals.</p>
                        </div>
                        <div className='benefits-card'>
                            <Image height={50} width={37} src={"/Group22.svg"} />
                            <h3>Flexible Repayments</h3>
                            <p>Car Pe Cash offers a Used Car Purchase Loan with a flexible and suitable repayment tenure over a flexible period of months.</p>
                        </div>
                    </div>
                </section>
            </MaxWidthWrapper>
            <div className='happycustomers-services-div'>
                <HappyCustomers info={dataPurchase} />
            </div>
        </div>
    )
}
