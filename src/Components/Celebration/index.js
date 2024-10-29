"use client";
import React from 'react'
import "./celebration.scss"
import Image from 'next/image'
import { useDispatch } from 'react-redux';
import { openInquiryModel } from '@/Redux/Features/inquiryModelSlice';
export default function Celebration(props) {
    const dispatch = useDispatch();
    return (
        <div className="celebration-div">
            <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
                <div className="celebration-heading-wrapper">
                    <h2 className="celebration-text-1">
                        The Car Pe Cash Way
                    </h2>
                    {/* <p className="celebration-text-3">the way to our future</p> */}
                    <p className="celebration-text-2">
                        To be principled, effective, and fair, finance must encompass more than just money. <br />Find out the key milestones that shaped who we are today!
                    </p>
                </div>
                <div className="celebration-wrapper-div">
                    <div className="celebration-card-data">
                        <div className="icon-div">
                            <Image
                                src="Vector.svg"
                                alt="celebration"
                                width={42}
                                height={42}
                            />
                        </div>
                        <p className="celebration-number">1,848+</p>
                        <p className="celebration-submitted">Docs Submitted</p>
                        <p className="celebration-credit">
                            Hassle-Free Financing for All Credit Types
                        </p>
                    </div>
                    <div className="celebration-card-data">
                        <div className="icon-div">
                            <Image src="car.svg" alt="celebration" width={42} height={42} />
                        </div>
                        <p className="celebration-number">98%</p>
                        <p className="celebration-submitted">Loan Approved</p>
                        <p className="celebration-credit">
                            Affordable Car Financing for Everyone
                        </p>
                    </div>
                    <div className="celebration-card-data">
                        <div className="icon-div">
                            <Image
                                src="Group 47.svg"
                                alt="celebration"
                                width={42}
                                height={42}
                            />
                        </div>
                        <p className="celebration-number">2M+</p>
                        <p className="celebration-submitted">Transactions</p>
                        <p className="celebration-credit">
                            Hassle-Free Financing Available
                        </p>
                    </div>
                    <div className="celebration-card-data">
                        <div className="icon-div">
                            <Image
                                src="user.svg"
                                alt="celebration"
                                width={42}
                                height={42}
                            />
                        </div>
                        <p className="celebration-number">99%</p>
                        <p className="celebration-submitted">User Satisfaction</p>
                        <p className="celebration-credit">
                            Apply Online and Get Approved in Minutes
                        </p>
                    </div>
                </div>
                <div className="celebration-inquiry-btn-div">
                    <button onClick={() => dispatch(openInquiryModel())} className="celebration-btn-inquiry">Inquire Now</button>
                </div>
            </div>
        </div>
    )
}
