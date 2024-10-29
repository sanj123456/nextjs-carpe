"use client";
import React, { useState } from "react";
import "./contactus.scss";
import { Icons } from "@/assets/img/Icons";
import Button from "@/Components/Button/Index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContactUsSendEmail } from "@/Redux/Features/contactUsSlice";
import { useDispatch } from "react-redux";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import { useRouter } from "next/navigation";

const Contactus = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loader,setLoader] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateField("name", formData.name);
    validateField("email", formData.email);
    validateField("mobile", formData.mobile);
    validateField("message", formData.message);
    // console.log("formData>", formData)
    if (
      !errors.name.length &&
      !errors.email.length &&
      !errors.mobile.length &&
      !errors.message.length
    ) {
      setLoader(true);
      const data = {
        email: formData.email,
        name: formData.name,
        mobile: formData.mobile,
        description: formData.message,
      };
      dispatch(ContactUsSendEmail({ data })).then((res) => {
        if (res?.payload?.status == 200) {
          toast.success(res?.payload?.data?.message);
          setLoader(false);
          router.push("/contact-thankyou")
        } else {
          toast.error(res?.payload?.data?.error?.message?.message);
          setLoader(false);
        }
        setFormData({
          name: "",
          email: "",
          mobile: "",
          message: "",
        });
      });
    }
  };
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        setErrors((prevErrors) => ({
          ...prevErrors,
          name:
            value.trim().length === 0
              ? `Please enter first name`
              : value.trim().length < 3
                ? "Please enter a valid name (at least 3 characters)"
                : "",
        }));

        break;
      case "email":
        setErrors((prevErrors) => ({
          ...prevErrors,
          email:
            value.trim().length === 0
              ? `Please enter a email address`
              : !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value.trim())
              ? "Please enter a valid email address"
              : "",
        }));
        break;
      case "mobile":
        setErrors((prevErrors) => ({
          ...prevErrors,
          mobile:
            value.trim().length === 0
              ? `Please enter Mobile number`
              : value.trim().length !== 10
              ? "Mobile number must be exactly 10 digits"
              : "",
        }));
        break;
      case "message":
        setErrors((prevErrors) => ({
          ...prevErrors,
          message: value.trim().length === 0 ? "Please enter your message" : "",
        }));
        break;
      default:
        break;
    }
  };

  return (
    <div id="main-div-contactus">
      <iframe
        className="map-img"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14687.615650721413!2d72.5717104!3d23.027300000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85a2e14af69d%3A0x4403661b86f6b6c5!2sEnvision%20Business%20Solution%20(Car%20Pe%20Cash)!5e0!3m2!1sen!2sin!4v1717154691251!5m2!1sen!2sin"
        width="100%"
        height="400"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      />
      <MaxWidthWrapper>
        <div className="main-section">
          <div className="right-sec">
            <h1>Turn your used car into instant cash with ease!</h1>
            <div className="right-container">
                <div className="phone">
                  <div>
                    <img src={Icons.PhoneIcon.src} />
                  </div>
                  <div className="phone-sec">
                    <h2 className="topic">Call the helpline</h2>
              <a href="tel:+917779070444">
                    <p className="info">+91 777 9070 444</p>
              </a>
              <a href="tel:+917779020444">
                    <p className="info">+91 777 9020 444</p>
              </a>
                  </div>
                </div>
                <div className="phone">
                  <div>
                    <img src={Icons.MailICon.src} />
                  </div>
                  <div className="phone-sec">
                    <h2 className="topic">Email us</h2>
              <a href="mailto:hello@carpecash.in" rel="noopener noreferrer">
                    <p className="info">hello@carpecash.in</p>
              </a>
                  </div>
                </div>
              <div className="phone">
                <div>
                  <img src={Icons.LocationIcon.src} />
                </div>
                <div className="phone-sec">
                  <h2 className="topic">Location</h2>
                  <p className="info">
                    <span className="titleSmall">ENVISION BUSINESS SOLUTION</span><br/>3RD FLOOR A/311-312 ,SAKAR-7,
                    NEHRU BRIDGE CORNER , ASHRAM ROAD, AHMEDABAD, AHMEDABAD,
                    Gujarat , 380009
                  </p>
                </div>
              </div>
              {/* </div> */}
              {/* <div className='second'> */}

              <div className="phone">
                <div>
                  <img src={Icons.ClockIcon.src} />
                </div>
                <div className="phone-sec">
                  <h2 className="topic">Office hours</h2>
                  <p className="info">
                    Monday – Saturday: 09:30 AM – 07:00 PM Sunday: Closed
                  </p>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
          <div className="left-sec">
            <form onSubmit={handleSubmit}>
              <div className="first-row">
                <div className="form-div">
                  <label>Name</label>
                  <input
                    className="input-div "
                    type="text"
                    name="name"
                    placeholder="First Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="error form-div ">{errors.name}</div>
                  )}
                </div>

                <div className="form-div ">
                  <label>Email</label>
                  <input
                    className="input-div"
                    type="email"
                    name="email"
                    // pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="error form-div">{errors.email}</div>
                  )}
                </div>
              </div>
              <div className="form-div">
                <label>Mobile</label>
                <input
                  className="input-div"
                  type="tel"
                  name="mobile"
                  pattern="[0-9]{10}"
                  placeholder="+91 XXX XXX XXX"
                  value={formData.mobile}
                  onChange={handleChange}
                />
                {errors.mobile && <div className="error">{errors.mobile}</div>}
              </div>
              <div className="form-div">
                <label>Message</label>
                <textarea
                  className="input-div"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <div className="error">{errors.message}</div>
                )}
              </div>
              <Button className="submit-btn" name={loader ? "Submitting.." : "Submit"} type="submit" />
            </form>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Contactus;
