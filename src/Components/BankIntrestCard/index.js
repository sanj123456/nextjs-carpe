
import React from 'react'
import "./bank-intrest-card.scss";
import Link from 'next/link';
import Button from '../Button/Index';
import { Icons } from '@/assets/img/Icons';
import { openInquiryModel } from '@/Redux/Features/inquiryModelSlice';
import { useDispatch } from 'react-redux';
export default function BankIntrestCard({ bankData }) {
    const dispatch = useDispatch();

    const { img, link, above10, below10, tenure, procesingFee } = bankData;
  return (
      <div className='bankInterestCard'>
          <img src={img ||  '/hdfc.svg'} />

          <div className='bank-detail'>
              <div className='text-container'>
                  <div className='big'>TENURE</div>
                  <div className='small'>{tenure }</div>
              </div>
              {/* <div className='text-container'>
                  <div className='big'>LOAN INTEREST RATE</div>
                  <div className='small'>{below10 }	</div>
              </div> */}
              <div className='text-container'>
                  <div className='big'>PROCESING FEES </div>
                  <div className='small'>{procesingFee }</div>
              </div>

              <div className='text-container'>
                  <div className='big'>LOAN INTEREST RATE</div>
                  <div className='small'>{ above10}</div>
              </div>

          </div>
          <div> <Button onClick={()=> dispatch(openInquiryModel())} name={"Inquire Now"} iconSrc={Icons.Redirect.src} />  </div>
      </div>
  )
}
