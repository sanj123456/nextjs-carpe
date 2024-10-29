"use client";
import React from 'react'
import { useDispatch } from 'react-redux';
 
import { openInquiryModel } from '@/Redux/Features/inquiryModelSlice';
import Button from '../Button/Index';
 

export function InquiryButton({  iconSrc ,className } ) {
    const dispatch = useDispatch();
 

  return (
    <Button iconSrc={iconSrc?.src} onClick={() => dispatch(openInquiryModel())} name={"Inquire Now"} className={className} />
  )
}
