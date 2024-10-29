"use client"
import { openInquiryModel } from '@/Redux/Features/inquiryModelSlice';
import React from 'react'
import { useDispatch } from 'react-redux';

export default function OurServicesInquiryBtn() {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(openInquiryModel())}
      className="Inquiry-now-btn"
    >
      Inquire Now
    </button>
  );
}
