import React from 'react'
import "./bank-card.scss"
import { BankIcons } from '@/assets/img/banks/bankIcons'
import { Icons } from '@/assets/img/Icons'
import Button from '../Button/Index'
import Link from 'next/link'
import { InquiryButton } from '../InquiryButton'
import { capitalizeFirstLetter } from "../../util/helper"
export default function BankCard({ bankInfo }) {
    const { img, bankName, featureList } = bankInfo;
    return (
        <div id="bank-card">
            <img src={img || "/HdfcIcon.svg"} />
            <div className='bank-detail'>
                <div>
                    <h3 className='bank-name'>{capitalizeFirstLetter(bankName?.toUpperCase())}</h3>
                </div>
                <ul className='bank-feature-list'>
                    {featureList.map((feature, i) => (<li key={i}>  <img src={Icons.checkCircle.src} /><span>{feature}</span> </li>))}

                </ul>
            </div>
            <div className='btns'>


                <InquiryButton iconSrc={Icons.Redirect} />
                <Link href={`banks/${bankName?.toLowerCase()}`}>  <Button name="View offer" className={"bg-sky-blue"} iconSrc={Icons.Redirect.src} /> </Link>

            </div>
        </div>
    )
}
