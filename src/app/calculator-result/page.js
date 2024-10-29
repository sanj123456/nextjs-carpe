"use client";
import React, { useEffect, useRef, useState } from 'react'
import "./calculator-result.scss"
import Button from '@/Components/Button/Index'
import { Icons } from '@/assets/img/Icons';
import BankIntrestCard from '@/Components/BankIntrestCard';
import MaxWidthWrapper from '@/Components/MaxWidthWrapper';
import { useSearchParams } from 'next/navigation'
import { useDispatch } from 'react-redux';
import { getCarCalculatorResult, getCarCalculatorResultTopup } from '@/Redux/Features/calculatorSlice';
import { BASE_URL } from '@/util/constant';
import Link from 'next/link';
const intialBankState = {
  purchaseBank: false,
  refinanceBank: false,
  topUpBank: false
}

const bankIntrestRateName = {
  purchaseBank: "Used Car Purchase Bank Interest Rate",
  refinanceBank: "Used Car Refinance Bank Interest Rate",
  topUpBank: "Used Car Top-up Bank Interest Rate"
}
const purchaseBank = [
  {
    img: "/hdfc.svg",
    link: "",
    tenure: "24 TO 60 MONTH",
    below10: "AS PER BANK NORMS",
    procesingFee: "AS PER BANK NORMS",
    above10: "AS PER BANK NORMS"
  },
  {
    img: "/2560px-ICICI_Bank_Logo 1.svg",
    link: "",
    tenure: "24 TO 60 MONTH",
    below10: "AS PER BANK NORMS",
    procesingFee: "AS PER BANK NORMS",
    above10: "AS PER BANK NORMS"
  },
  {
    img: "/Axis_Bank_logo 1-svg.svg",
    link: "",
    tenure: "24 TO 60 MONTH",
    below10: "AS PER BANK NORMS",
    procesingFee: "AS PER BANK NORMS",
    above10: "AS PER BANK NORMS"
  },
  {
    img: "/Yes_Bank_logo 1.svg",
    link: "",
    tenure: "24 TO 60 MONTH",
    below10: "AS PER BANK NORMS",
    procesingFee: "AS PER BANK NORMS",
    above10: "AS PER BANK NORMS"
  },
  {
    img: "/IDFC_First_Bank_logo-1 1.svg",
    link: "",
    tenure: "24 TO 60 MONTH",
    below10: "AS PER BANK NORMS",
    procesingFee: "AS PER BANK NORMS",
    above10: "AS PER BANK NORMS"
  },
  {
    img: "/bajaj.svg",
    link: "",
    tenure: "24 TO 60 MONTH",
    below10: "AS PER BANK NORMS",
    procesingFee: "AS PER BANK NORMS",
    above10: "AS PER BANK NORMS"
  }, {
    img: "/tatacapital.svg",
    link: "",
    tenure: "24 TO 60 MONTH",
    below10: "AS PER BANK NORMS",
    procesingFee: "AS PER BANK NORMS",
    above10: "AS PER BANK NORMS"
  }, {
    img: "/AU-SMALL-FIN-BANK-1 1.svg",
    link: "",
    tenure: "24 TO 60 MONTH",
    below10: "AS PER BANK NORMS",
    procesingFee: "AS PER BANK NORMS",
    above10: "AS PER BANK NORMS"
  }
]
const refinanceBank = [
  {
    img: "/hdfc.svg",
    link: "",
    tenure: "24 TO 60 MONTH",
    below10: "AS PER BANK NORMS",
    procesingFee: "AS PER BANK NORMS",
    above10: "AS PER BANK NORMS"
  },
  {
    img: "/2560px-ICICI_Bank_Logo 1.svg",
    link: "",
    tenure: "24 TO 60 MONTH",
    below10: "AS PER BANK NORMS",
    procesingFee: "AS PER BANK NORMS",
    above10: "AS PER BANK NORMS"
  },
  {
    img: "/Axis_Bank_logo 1-svg.svg",
    link: "",
    tenure: "24 TO 60 MONTH",
    below10: "AS PER BANK NORMS",
    procesingFee: "AS PER BANK NORMS",
    above10: "AS PER BANK NORMS"
  },
  {
    img: "/Yes_Bank_logo 1.svg",
    link: "",
    tenure: "24 TO 60 MONTH",
    below10: "AS PER BANK NORMS",
    procesingFee: "AS PER BANK NORMS",
    above10: "AS PER BANK NORMS"
  },
  {
    img: "/IDFC_First_Bank_logo-1 1.svg",
    link: "",
    tenure: "24 TO 60 MONTH",
    below10: "AS PER BANK NORMS",
    procesingFee: "AS PER BANK NORMS",
    above10: "AS PER BANK NORMS"
  }, {
    img: "/bajaj.svg",
    link: "",
    tenure: "24 TO 60 MONTH",
    below10: "AS PER BANK NORMS",
    procesingFee: "AS PER BANK NORMS",
    above10: "AS PER BANK NORMS"
  }, {
    img: "/tatacapital.svg",
    link: "",
    tenure: "24 TO 60 MONTH",
    below10: "AS PER BANK NORMS",
    procesingFee: "AS PER BANK NORMS",
    above10: "AS PER BANK NORMS"
  }, {
    img: "/AU-SMALL-FIN-BANK-1 1.svg",
    link: "",
    tenure: "24 TO 60 MONTH",
    below10: "AS PER BANK NORMS",
    procesingFee: "AS PER BANK NORMS",
    above10: "AS PER BANK NORMS"
  }
]
const topUpBank = [
  {
    img: "/hdfc.svg",
    link: "",
    tenure: "24 TO 60 MONTH",
    below10: "AS PER BANK NORMS",
    procesingFee: "AS PER BANK NORMS",
    above10: "AS PER BANK NORMS"
  },
  {
    img: "/2560px-ICICI_Bank_Logo 1.svg",
    link: "",
    tenure: "24 TO 60 MONTH",
    below10: "AS PER BANK NORMS",
    procesingFee: "AS PER BANK NORMS",
    above10: "AS PER BANK NORMS"
  },
  {
    img: "/Axis_Bank_logo 1-svg.svg",
    link: "",
    tenure: "24 TO 60 MONTH",
    below10: "AS PER BANK NORMS",
    procesingFee: "AS PER BANK NORMS",
    above10: "AS PER BANK NORMS"
  },
  {
    img: "/Yes_Bank_logo 1.svg",
    link: "",
    tenure: "24 TO 60 MONTH",
    below10: "AS PER BANK NORMS",
    procesingFee: "AS PER BANK NORMS",
    above10: "AS PER BANK NORMS"
  },
  {
    img: "/IDFC_First_Bank_logo-1 1.svg",
    link: "",
    tenure: "24 TO 60 MONTH",
    below10: "AS PER BANK NORMS",
    procesingFee: "AS PER BANK NORMS",
    above10: "AS PER BANK NORMS"
  },
  , {
    img: "/bajaj.svg",
    link: "",
    tenure: "24 TO 60 MONTH",
    below10: "AS PER BANK NORMS",
    procesingFee: "AS PER BANK NORMS",
    above10: "AS PER BANK NORMS"
  }, {
    img: "/tatacapital.svg",
    link: "",
    tenure: "24 TO 60 MONTH",
    below10: "AS PER BANK NORMS",
    procesingFee: "AS PER BANK NORMS",
    above10: "AS PER BANK NORMS"
  }, {
    img: "/AU-SMALL-FIN-BANK-1 1.svg",
    link: "",
    tenure: "24 TO 60 MONTH",
    below10: "AS PER BANK NORMS",
    procesingFee: "AS PER BANK NORMS",
    above10: "AS PER BANK NORMS"
  }
]


export default function Page() {
  const [bankInterestRate, setBankInterestRate] = useState({ ...intialBankState, purchaseBank: true });
  const [selectedBank, setSelectedBank] = useState("Used Car Purchase Bank Interest Rate");
  const [openDroppdown, setOpenDropdown] = useState(false);
  const [selectedBankData, setSelectedBankData] = useState([]);
  const [viewAll, setViewAll] = useState(false);
  const [carData, setCarData] = useState("")
  const DropDownRef = useRef();
  const searchParams = useSearchParams()
  const dispatch = useDispatch()
  const search = searchParams.get('id')
  const searchTopup = searchParams.get('topup')
  // console.log(searchTopup, "shdgjhksc")
  const ref = useRef()
  useEffect(() => {
    document.body.style.overflow = 'auto';
  }, [])

  useEffect(() => {
    if (searchTopup?.length > 0) {
      dispatch(getCarCalculatorResultTopup(search)).then((res) => {
        if (res?.payload?.status == 200) {
          // console.log(res?.payload?.data?.data?.attributes, "responsieeeeeFromCalcccc")
          setCarData(res?.payload?.data?.data?.attributes)
        } else {
          console.error(res?.payload?.data?.message)
        }
      })
    } else {
      dispatch(getCarCalculatorResult(search)).then((res) => {
        if (res?.payload?.status == 200) {
          // console.log(res?.payload?.data?.data?.attributes, "responsieeeeeFromCalcccc")
          setCarData(res?.payload?.data?.data?.attributes)
        } else {
          console.error(res?.payload?.data?.message)
        }
      })
    }
  }, [])


  //new function for decimal points
  function formatNumber(number) {
    // Convert number to string
    let numStr = String(number);
  
    // Split the number into parts separated by decimal point
    let parts = numStr.split('.');
  
    // Format the integer part
    let integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
    return integerPart;
  }
  
  // function formatNumber(number) {
  //   // Convert number to string
  //   let numStr = String(number);

  //   // Split the number into parts separated by decimal point
  //   let parts = numStr.split('.');

  //   // Format the integer part
  //   let integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  //   // If there's a decimal part, append it back
  //   if (parts.length === 2) {
  //     return integerPart + '.' + parts[1];
  //   } else {
  //     return integerPart;
  //   }
  // }
  useEffect(() => {
    if (bankInterestRate.purchaseBank)
      setSelectedBankData(purchaseBank)
    if (bankInterestRate.refinanceBank)
      setSelectedBankData(refinanceBank)
    if (bankInterestRate.topUpBank)
      setSelectedBankData(topUpBank)
  }, [bankInterestRate])
  return (
    <MaxWidthWrapper>


      <div className='main-div-calculator-result'>

        <section className='car-lable'>
          {/* if tester find design issu in this card that means problem with image, transparent background of image also takes space  */}
          <div className='car-price-detail'>
            <h1>Congratulations!</h1>
            {searchTopup?.length > 0 ? <>
              <p>your vehicle is ELIGIBLE for LOAN AMOUNT </p>
              <p>sub to old loan to be closed</p>
              <div className='car-price'>&#x20b9;{formatNumber(carData?.finalPrice)}/-</div>
            </>:
            <>
            <p> your vehicle is ELIGIBLE for LOAN AMOUNT </p>
            {/* change this with api data */}
            <div className='car-price'>&#x20b9; {formatNumber(carData?.finalPrice)}/-</div>
            </>}

          </div>
          <div className='img-container'>
            {/* change this with api data */}

            {/* <img src='https://s3-alpha-sig.figma.com/img/16fb/466d/6feb9a3ba1a6231f1c7bb671f5408f27?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ri86e7RpTfJ1aYyW3sMfMAKQb-TkfdANConlGk1fGu-jUwiI5z6ybCVlzhrozu1QoK5PDE5TqxlKUVflGDpcs-lp5cPl0ulKSx0dZYnIvy7XLYKkv-KJGyQ0ZuJclQGd6TMNvpimtktqkZ3IGRT~yU-8X3MuCLQSvXrzNb4rFpAw9IpIeyt1zp6NZpOk5iwpXTZOOHXETjy7TEcRM3MAs275WaQu8Gy39NgRxBVEQE~NAOhT0HATkzd9zxmvaZH6VVL~-ei~HXecA7Igh-N3X-neqaFqrAq4nh~uZOqqU3EE8TwYCtKxeoO5NuSVqG42z19w2~4Em54FyXqW-PmdUw__' /> */}
            <div>
              <img src={BASE_URL + carData?.imageUrl} />
            </div>
          </div>
        </section>
        <section className='car-value-container'>

          <div className='car-value'>
            <div className='head'> Car Details</div>
            <div className='table'>
              {/* change this with api data */}
              <div>Brand</div> <div>{carData?.brand}</div>
              <div>Model</div> <div>{carData?.carName}</div>
              <div>Year</div> <div>{carData?.manufacturingYear}</div>
              <div>Varient</div> <div>{carData?.model}</div>
              <div>Owner</div> <div>{carData?.owner}</div>
            </div>
          </div>
          <div className='car-price-detail'>
            <h1>Congratulations!</h1>
            {searchTopup?.length > 0 ? <>
              <p>your vehicle is ELIGIBLE for LOAN AMOUNT</p> <p>sub to old loan to be closed</p>
              <div className='car-price'>&#x20b9; {formatNumber(carData?.finalPrice)}/-</div>
            </>:
            <>
            <p>your vehicle is ELIGIBLE for LOAN AMOUNT</p> 
            <div className='car-price'>&#x20b9; {formatNumber(carData?.finalPrice)}/-</div>
            </>}
          </div>
        </section>


        <section className='what-next-container'>
          <img src="/whatsNext.png" />
          <div className='left'>
            <h3>
              What Next?
            </h3>
            <p>
              Expect a call from one of our representative in 24 hours, don’t miss out!
            </p>
            <Link href={"/contact"}> <Button name={"Contact Us Now"} className={"btn"} /></Link>
          </div>
        </section>


        <section className='bank-interest-rate-container'>
          <div className='interest-options-dasktop'>
            <button type='button' onClick={() => { setBankInterestRate({ ...intialBankState, purchaseBank: true }); setSelectedBank(bankIntrestRateName.purchaseBank) }} className={`${bankInterestRate.purchaseBank && "active"}`}>{bankIntrestRateName.purchaseBank}</button>

            <button type='button' onClick={() => { setBankInterestRate({ ...intialBankState, refinanceBank: true }); setSelectedBank(bankIntrestRateName.refinanceBank) }} className={`${bankInterestRate.refinanceBank && "active"}`}>{bankIntrestRateName.refinanceBank}</button>

            <button type='button' onClick={() => { setBankInterestRate({ ...intialBankState, topUpBank: true }); setSelectedBank(bankIntrestRateName.topUpBank) }} className={`${bankInterestRate.topUpBank && "active"}`}>{bankIntrestRateName.topUpBank}</button>

          </div>
          <div ref={DropDownRef} tabIndex={0} onBlur={(event) => {
            if (!DropDownRef?.current?.contains(event.relatedTarget)) {
              setOpenDropdown(false);
            }
          }} className='interest-options-mobile'>
            <button onClick={() => setOpenDropdown(prev => !prev)} type='button' className='dropdown-btn'>
              <span> {selectedBank} </span>    <img src='/bottom-arrow.svg' />
            </button>
            {openDroppdown && <ul className='dropdown-options'>
              <li onClick={() => { setBankInterestRate({ ...intialBankState, purchaseBank: true }); setSelectedBank(bankIntrestRateName.purchaseBank); setOpenDropdown(false) }}>{bankIntrestRateName.purchaseBank}</li>
              <li onClick={() => { setBankInterestRate({ ...intialBankState, refinanceBank: true }); setSelectedBank(bankIntrestRateName.refinanceBank); setOpenDropdown(false) }}> {bankIntrestRateName.refinanceBank}</li>
              <li onClick={() => { setBankInterestRate({ ...intialBankState, topUpBank: true }); setSelectedBank(bankIntrestRateName.topUpBank); setOpenDropdown(false) }}>{bankIntrestRateName.topUpBank}</li>
            </ul>}
          </div>
        </section>
        <section ref={ref} className='banks-card-conatainer'>
          {
            selectedBankData?.map((bankData, i) => {
              if ((i >= 4) && !viewAll) {
                return null;
              }
              return <BankIntrestCard bankData={bankData} />
            })
          }
        </section>
        <section className='viewAll'>
          <Button onClick={() => {
            setViewAll(prev => !prev)

            if (viewAll) {
              if (ref.current) {
                setTimeout(() => {
                  ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100)
              }
            }

          }} name={!viewAll ? "View All" : "View Less"} />
        </section>
      </div ></MaxWidthWrapper>
  )
}
