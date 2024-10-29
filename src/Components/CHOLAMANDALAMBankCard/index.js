import React from 'react'
import "../BankCard/bank-card.scss"
import { BankIcons } from '@/assets/img/banks/bankIcons'
import { Icons } from '@/assets/img/Icons'
import Button from '../Button/Index'
import Link from 'next/link'
import { InquiryButton } from '../InquiryButton'

export default function CHOLAMANDALAMBankCard({ bankInfo }) {
    // const  {logo, name,tagLine,  }
    return (
        <div id="bank-card">
            <img src={BankIcons.axis.src} />
            <div className='bank-detail'>
                <div>
                    <h3 className='bank-name'>CHOLA MANDALAM</h3>
                </div>
                <ul className='bank-feature-list'>
                    <li> <img src={Icons.checkCircle.src} />Cibil Check</li>
                    <li> <img src={Icons.checkCircle.src} />Home Verification</li>
                    <li> <img src={Icons.checkCircle.src} />Office Verification If Have</li>
                    <li> <img src={Icons.checkCircle.src} />Used Car Valuation</li>
                    <li> <img src={Icons.checkCircle.src} />Approval Within Working 72 Hours</li>
                    <li> <img src={Icons.checkCircle.src} />Offline Loan Agreement</li>
                    <li> <img src={Icons.checkCircle.src} />Payment Process</li>
                    <li> <img src={Icons.checkCircle.src} />Rc Transfer/Hpa Transfer</li>
                </ul>
            </div>
            <div className='btns'>
                <InquiryButton iconSrc={Icons.Redirect} />
                <Link href={"banks/hdfc"}>  <Button name="View offer" className={"bg-sky-blue"} iconSrc={Icons.Redirect.src} /> </Link>
            </div>
        </div>
    )
}
