import React from 'react'
import "./cities.scss"
import Link from 'next/link'
import { cities } from '@/util/cityData'
import MaxWidthWrapper from '@/Components/MaxWidthWrapper'
const Cities = () => {
 
    return (
        <MaxWidthWrapper>
            <div id='main-div-cities' >
                <h1 className='title'>Cities We Service</h1>

                <div className='cities-container'>
                    {
                        cities?.map(({ cityName, id },i) => {
                            return <Link key={i} href={"/cities/used-car-loan-in-" + cityName.toLowerCase()} className='city'>{cityName}</Link>
                        })
                    }
                </div>
            </div></MaxWidthWrapper>
    )
}

export default Cities