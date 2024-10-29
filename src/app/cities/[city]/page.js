
import React from 'react'
import "./city.scss"

import { cities } from '@/util/cityData'
import Button from '@/Components/Button/Index';
import { InquiryButton } from '@/Components/InquiryButton';
import MaxWidthWrapper from '@/Components/MaxWidthWrapper';
import FAQSection from "@/Components/FaqSection";
import { capitalizeFirstLetter } from '../../../util/helper';
import Link from 'next/link';
// import { InquiryButton } from '@/Components/InquiryButtonContainer';
export async function generateMetadata({ params }) {
    const curruntCity = cities.find(({ cityName }) => "used-car-loan-in-" + cityName.toLowerCase() === params.city.toLowerCase()) || null

    return {
        title: curruntCity?.metaTitle || null,
        description: curruntCity?.metaDescription || null,
    }
}

export default function Page({ params }) {
    const { city } = params
    const curruntCity = cities.find(({ cityName }) => "used-car-loan-in-" + cityName.toLowerCase() === city.toLowerCase()) || null
    // console.log(cities.find(({ cityName }) => cityName.toLowerCase() === city.toLowerCase()))

    if (!curruntCity) return null
    return (
        <div id='main-div-city' className=''>
            <section className='section1 bg-cover outer-padding'>
                <MaxWidthWrapper>
                    <h1>
                        Get used car loan in{curruntCity?.areaName && <> <span>{capitalizeFirstLetter(curruntCity?.areaName)}</span>,<br /></>} <span>{capitalizeFirstLetter(curruntCity?.cityName)}</span>
                    </h1>
                </MaxWidthWrapper>
                <Link href={"/"}>
                    <Button name={"Check Eligibility"} className={"bg-sky-blue-btn"} />
                </Link>
            </section>
            <section >
                <MaxWidthWrapper>


                    <div className="city-details outer-padding">
                        <img alt='city-image' src={curruntCity.img || "/Rectangle 5.svg"} />
                        <h2>
                            {curruntCity?.section1?.head || <>Get a Used Car Loan in  {capitalizeFirstLetter(curruntCity?.cityName)} with Affordable Interest Rates!</>}

                        </h2>
                        <p>{curruntCity?.section1.peragraph}</p>

                    </div>

                    <div className='city-sub-details outer-padding '>
                        <h2>
                            {curruntCity?.section2?.head || <>Features and Benefits of Used Car Loan in {capitalizeFirstLetter(curruntCity?.cityName)}</>}
                        </h2>
                        {curruntCity?.section2.subData.map(({ head, content }) => (<><h3>
                            {head}
                        </h3>
                            <p>
                                {content}
                            </p></>))}


                    </div>
                    <div className='city-sub-details outer-padding '>
                        <h2>
                            {curruntCity?.section3?.head || <>What you need to Apply for a Used Car Loan in {capitalizeFirstLetter(curruntCity?.cityName)}</>}

                        </h2>
                        <p>{curruntCity?.section3.peragraph}
                            <br /> <br />
                            Apply now with Car Pe Cash, an Affordable Car Loan Interest Rate Company, for Your Used Car Loan in {curruntCity.cityName}!<br />
                        </p>
                    </div>
                </MaxWidthWrapper>
            </section>

            <div className='link'>
                <InquiryButton className={"bg-sky-blue"} />
            </div>
            <MaxWidthWrapper>
                <FAQSection pageName="cityPage" />
            </MaxWidthWrapper>
        </div>
    )
}
