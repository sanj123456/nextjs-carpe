"use client";
import CheckEligibility from '@/Components/CheckEligibility'
import HappyCustomers from '@/Components/HappyCustomers'
import Image from 'next/image'
import React from 'react'
import "./RefinanceServices.scss"
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
              <div className='quickestRefinance outer-padding'>
                <Image height={441} width={555} className='car-img' src="/usedcarrefinance.png" alt='Used Car Refinance Loan' />
                <div className='data'>
                    <h1>Get Your Used Car Refinance Loan Quickly</h1>
                    <p>
                    Car Pe Cash provides the best car loans in Ahmedabad at competitive rates and in flexible conditions. A car loan is a credit product that enables lenders to acquire funds from a bank to purchase a car. A secured loan differs from a personal loan, whereas replacing your existing car loan with a new one from a different lender constitutes car loan refinancing. The choice is applicable to those who are already servicing a loan. Car Pe Cash is the most dependable used vehicle finance company.
                        <br /> <br />
                        Depending on the car loan refinance rates united with your lender, you can repay the car loan in instalments or EMIs. Car loans are famous credit products, and Car Pe Cash offers car refinancing options to borrowers. The loan process at Car Pe Cash provides a hassle-free, easy method for car loans for used cars.
                    </p>
                    <div className='button-container'> <Button onClick={() => dispatch(openInquiryModel())} name="Inquire Now" className="btn"/> </div>
                </div>
            </div>  

            

            <section className='key-features-container outer-padding'>
                <h2>Key Features</h2>
                <div className='features'>
                    <div className='feature-card'>
                        <Image height={100} width={100} src={"/quick-process.svg"} />
                        <h3>Car Loans Made Easy</h3>
                        <p>Car Pe Cash simplifies car loans with a streamlined process, minimal paperwork, and fast approvals for your dream car.</p>
                    </div>
                    <div className='feature-card'>
                        <Image height={100} width={100} src={"/instant-approval.svg"} />
                        <h3>No Collateral Needed</h3>
                        <p>Car Pe Cash offers the best car financing services in Ahmedabad, with flexible options and competitive rates, with no collateral needed.</p>
                    </div>
                    <div className='feature-card'>
                        <Image height={100} width={100} src={"/no-impact.svg"} />
                        <h3>Used Car Loans Available</h3>
                        <p>Car Pe Cash provides hassle-free loans for buying second-hand cars, including best car refinance loans options for used vehicles</p>
                    </div>
                </div>
            </section>

            <section className='checkout-unlimited-benefits outer-padding'>
                <h2>Checkout Unlimited Benefits
                </h2>
                <div className='benefits-card-container'>
                    
                        <div className='benefits-card'>
                            <Image height={50} width={37} src={"/money-bag.svg"} />
                            <h3>Lower Interest Rates</h3>
                            <p>Consider refinancing an auto loan at a lower interest rate to save costs, but watch out for down payment penalties. Expanding the loan term reduces monthly payments by spreading them out; however, it increases the total interest paid. Reducing the loan term lessens collective interest charges despite possibly higher monthly payments. Car Pe Cash provides easy second-hand car loans with quick approval and adjustable loan terms.</p>
                        </div>
                        <div className='benefits-card'>
                            <Image height={50} width={37} src={"/Group11.svg"} />
                            <h3>Modify Terms of Auto Loan</h3>
                            <p>If you initially wanted more than your current loan terms, refinancing could offer a chance to find better terms, like lower fees and improved conditions. Car Pe Cash is the best car loan interest rate company in the market, specializing in used car refinancing. Car Pe Cash offers auto loans for used vehicles, ensuring flexible terms and quick approvals customized to your requirements.</p>
                        </div>
                        <div className='benefits-card'>
                            <Image height={50} width={37} src={"/Group33.svg"} />
                            <h3>Adjust Co-Signer Arrangement</h3>
                            <p>Refinancing enables you to add or eliminate a co-signer. If your existing co-signer no longer wishes to take responsibility, refinancing with a new lender can alleviate this obligation. Car Pe Cash offers the lowest interest rates for car loans in Ahmedabad, ensuring cheap financing for vehicle purchases.</p>
                        </div>
                        <div className='benefits-card'>
                            <Image height={50} width={37} src={"/Group22.svg"} />
                            <h3>Enhanced Credit Score</h3>
                            <p>If your credit score has gone up since receiving the loan, you may be qualified for a lower interest rate. When it comes to car refinancing, it is always preferable when financiers give more favorable terms to those who have high credit scores.</p>
                        </div>
                    </div>
                </section>
            </MaxWidthWrapper>  
            <div className='happycustomers-services-div'>
            <HappyCustomers info={dataPurchase}/>
            </div>

        </div>
    )
}
