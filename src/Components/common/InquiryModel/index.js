"use client";
import React, { useEffect, useRef, useState } from 'react';
import "./inquiry-model.scss";
import Button from '@/Components/Button/Index';
import { useDispatch, useSelector } from 'react-redux';
import { closeInquiryModel } from '@/Redux/Features/inquiryModelSlice';
import { InquiryNowSendEmail } from '@/Redux/Features/InquiryNowSlice';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation"; // Changed to next/navigation

const InquiryModel = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [loader, setLoader] = useState(false);
  const [isRouterReady, setIsRouterReady] = useState(false);
  const [value, setValue] = useState({
    name: "",
    phone: "",
  });
  
  const ref = useRef(null);
  const { isInquiryModelOpen } = useSelector((state) => state?.inquiryModel);

  useEffect(() => {
    setIsRouterReady(true);
  }, []);

  useEffect(() => {
    if (isInquiryModelOpen) document.body.style.overflow = 'hidden';
  }, [isInquiryModelOpen]);

  const backToNormalScroll = () => {
    document.body.style.overflow = 'auto';
    dispatch(closeInquiryModel());
    setValue({
      name: "",
      phone: "",
    });
    setErrors({});
  };

  useEffect(() => {
    if (!isInquiryModelOpen) return;
    
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        backToNormalScroll();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, isInquiryModelOpen]);

  useEffect(() => {
    const phoneInput = document.getElementById('phoneInput');
    
    if (phoneInput) {
      const handleKeyDown = (e) => {
        if (e.key === 'e' || e.key === '.' || e.key === '+' || e.key === '-' || e.key === 'E') {
          e.preventDefault();
        }
      };

      phoneInput.addEventListener('keydown', handleKeyDown);
      return () => {
        phoneInput.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isInquiryModelOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevState) => ({
      ...prevState,
      [name]: "",
    }));
  };

  const validate = () => {
    let formErrors = {};

    if (!value.name.trim()) {
      formErrors.name = "Name is required";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!value.phone) {
      formErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(value.phone)) {
      formErrors.phone = "Mobile number must be exactly 10 digits";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isRouterReady) return;

    if (validate()) {
      setLoader(true);
      const data = {
        name: value.name,
        mobile: value.phone
      };

      try {
        const res = await dispatch(InquiryNowSendEmail({ data })).unwrap();
        if (res?.status === 200) {
          toast.success(res?.data?.message);
          backToNormalScroll();
          router.push("/loan-details-thankyou");
        } else {
          toast.error(res?.data?.error?.message || "Something went wrong");
        }
      } catch (error) {
        toast.error(error?.message || "Something went wrong");
      } finally {
        setLoader(false);
        setValue({
          name: "",
          phone: "",
        });
      }
    }
  };

  return (
    isInquiryModelOpen ? (
      <div className="dropdown-container1">
        <div className="modal-container1">
          <div ref={ref} className="inquiry-form">
            <div className="modal-heading">
              <p>Loan Detail</p>
              <span>
                <img
                  onClick={backToNormalScroll}
                  src="/icon-wrapper.svg"
                  alt="close"
                  className='close'
                />
              </span>
            </div>
            <div className="modal-form-wrapper">
              <form onSubmit={handleSubmit}>
                <label className="label">Enter Name</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  value={value.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
                <label className="label">Enter Mobile No.</label>
                <input
                  className="input"
                  type="number"
                  placeholder="+91 XXX XXX XXX"
                  name="phone"
                  id="phoneInput"
                  value={value.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className="error">{errors.phone}</p>}
                <div className="inquiry-submit-btn">
                  <Button
                    onClick={handleSubmit}
                    name={loader ? "Submitting.." : "Submit"}
                    className={"padding"}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    ) : null
  );
};

export default InquiryModel;