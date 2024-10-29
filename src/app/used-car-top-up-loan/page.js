"use client";
import HappyCustomers from '@/Components/HappyCustomers'
import Image from 'next/image'
import React from 'react'
import "./topupServices.scss"
import Button from '@/Components/Button/Index'
import Link from 'next/link'
import { openInquiryModel } from '@/Redux/Features/inquiryModelSlice'
import { useDispatch } from 'react-redux'
import MaxWidthWrapper from '@/Components/MaxWidthWrapper';
import CheckEligibilityTopUpLoan from '@/Components/CheckEligibilityTopUpLoan';
export default function Page() {
    const data = "Car Pe Cash is the best-used car top-up loan company in Ahmedabad for used car purchases, empowering Indians and supporting their ambitions with a reliable branch network across Gujarat."
    const dispatch = useDispatch();
    return (
        <div className='main-div-services'>
            <CheckEligibilityTopUpLoan />
            <MaxWidthWrapper>
              <div className='quickestTopup outer-padding'>
                <Image height={441} width={555}className='car-img' src="/topup.png" alt='Used Car Top-Up Loan' />
                <div className='data'>
                    <h1>Get Your Used Car Top-Up Loan Quickly</h1>
                    <p>
                    Precisely to secure a better deal, study and explore different options to secure funds for your plans. One choice is Car Pe Cash’s Car Loan Top Up, which offers additional financing against your existing Car Loan at better rates compared to unsecured loans. Car Pe Cash offers a suitable used car top-up loan option. These funds can be used to upgrade the existing car or pay any additional expenses. Car Pe Cash provides the advantage of accessing this ability, which makes it easier to manage your financial requirements for a car.
                        <br /> <br />
                        Acquiring a Top-Up on a Used Car Loan is helpful as it involves a very minimal process. Existing customers won't need to repeat the complete documentation process, and the general time for loan approval and disbursal will be decreased. Car Pe Cash provides the best car financing services in Ahmedabad at competitive rates and on flexible terms.
                    </p>
                    <div className='button-container'> <Button onClick={() => dispatch(openInquiryModel())} name="Inquire Now" className="btn"/> </div>
                </div>
            </div>  
            <section className='key-features-container outer-padding'>
                <h2>Key Features</h2>
                <div className='features'>
                    <div className='feature-card'>
                        <Image height={100} width={100} src={"/quick-process.svg"} />
                        <h3>Instant disbursals</h3>
                        <p>Procure instant funds with a pre-approved top-up offer on the existing car loan from Carpe Cash.</p>
                    </div>
                    <div className='feature-card'>
                        <Image height={100} width={100} src={"/instant-approval.svg"} />
                        <h3>Seamless experience</h3>
                        <p>We have a simple online application process until funds are disbursed. Our used commercial vehicle loan process gives you a seamless experience.</p>
                    </div>
                    <div className='feature-card'>
                        <Image height={100} width={100} src={"/no-impact.svg"} />
                        <h3>Anytime, anywhere</h3>
                        <p>Apply for the loan anytime, anywhere, online, and efficiently. Car Pe Cash offers the best car refinance loan options to meet your requirements.</p>
                    </div>
                </div>
            </section>
            <section className='checkout-unlimited-benefits outer-padding'>
                <h2>Checkout Unlimited Benefits
                </h2>
                <div className='benefits-card-container'>
                <div className='benefits-card'>
                            <Image height={50} width={37} src={"/Group11.svg"} />
                            <h3>Flexible loan tenure</h3>
                            <p>Car Pe Cash's top-up loans provide flexible loan tenure options. Select a repayment period that best fits your financial circumstances. Obtain the best-used car top-up loan with Car Pe Cash with flexible loan tenure.</p>
                        </div>
                       
                        <div className='benefits-card'>
                            <Image height={50} width={37} src={"/Group33.svg"} />
                            <h3>Quick loan processing</h3>
                            <p>Quick loan processing is Car Pe Cash's top-up loan's biggest benefit. Enjoy fast approval and disbursal for your financial needs from us, as we are the top car loan service provider company.</p>
                        </div>
                        <div className='benefits-card'>
                            <Image height={50} width={37} src={"/money-bag.svg"} />
                            <h3>The high-value sanction for purchase</h3>
                            <p>The top-up loans from Car Pe Cash offer high-value sanctions for purchases. You can get the extra funds needed for the car upgrade or cover other expenses. Experience a high-value used car loan with Car Pe Cash the best car finance company.</p>
                        </div>
                        <div className='benefits-card'>
                            <Image height={50} width={37} src={"/Group22.svg"} />
                            <h3>Competitive interest rates & charges</h3>
                            
                            <p>Car Pe Cash offers top-up loans with competitive interest rates and charges. As a provider of affordable car loan interest rates, we ensure low-cost financing to meet your changing needs.</p>
                        </div>
                    </div>
                </section>
            </MaxWidthWrapper>
            <div className='happycustomers-services-div'>
            <HappyCustomers info={data} />
            </div>

        </div>
    )
}
