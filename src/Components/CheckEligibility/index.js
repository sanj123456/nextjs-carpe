"use client";
import React, { useEffect, useState } from "react";
import "./check-eligibility.scss";
import Model from "@/Components/common/Modal";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import {
  CalculatorAPI,
  ManufacturingYears,
  getCarBrandDetails,
  getCarRestDetails,
  getCarRestDetailswithYear,
  postAllDetails,
} from "@/Redux/Features/calculatorSlice";
import { toast } from "react-toastify";
import { BASE_URL } from "@/util/constant";
import { useRouter } from "next/navigation";
import Image from "next/image";



export default function CheckEligibility() {
  const [openYearModal, setOpenYearModal] = useState(false);
  const [openOwnership, setOpenOwnership] = useState(false);
  const [openKilometersModal, setOpenKilometersModal] = useState(false);
  const [openCarValuation, setOpenCarValuation] = useState(false);
  const [openBrandModal, setOpenBrandModal] = useState(false);
  const [openSelectModal, setOpenSelectModal] = useState(false);
  const [openVariantModal, setOpenVariantModal] = useState(false);
  const [dynamicMedia, setdynamicMedia] = useState("");
  const [dynamicImage, setDynamicImage] = useState("");
  const [brandData, setBrandData] = useState("");
  const [loader, setLoader] = useState(false);
  const [carBrand, setCarBrand] = useState("");
  const [calculatorLoader, setCalculatorLoader] = useState(false);
  const [carVarientItem, setCarVarientItem] = useState("");
  const [carVarientNameForYear, setCarVarientNameForYear] = useState("");
  const [carRestDetails, setCarRestDetails] = useState("");
  const [carTransmission, setCarTransmission] = useState("");
  const [carRestDetailsWithYear, setCarRestDetailsWithYear] = useState("");
  const [carSpecificData, setCarSpecificData] = useState("");
  const [menuYear, setMenuYear] = useState("");
  const [fuelType, setFuelType] = useState("Petrol");
  const [selectedFuelType, setSelectedFuelType] = useState(null);
  const [transmissionType, setTransmissionType] = useState("Manual");
  const [carTransmissiondata, setCarTransmissiondata] = useState();
  const [selectedCarBrand, setSelectedCarBrand] = useState(null);
  const [selectedCarModel, setSelectedCarModel] = useState(null);
  const [selectedCarYear, setSelectedCarYear] = useState(null);
  const [selectedCarModelName, setSelectedCarModelName] = useState(null);
  const [selectedVarientValue, setSelectedVarientValue] = useState(null);
  const [finalCarBrand, setFinalCarBrand] = useState("");
  const [finalCarModel, setFinalCarModel] = useState("");
  const [finalCarModelUrl, setFinalCarModelUrl] = useState("");
  const [finalCarYear, setFinalCarYear] = useState("");
  const [finalCarVarient, setFinalCarVarient] = useState("");
  const [finalCarMinValue, setFinalCarMinValue] = useState("");
  const [finalCarMaxValue, setFinalCarMaxValue] = useState("");
  const [submitLoader, setSubmitLoader] = useState(false);
  const [finalCarKilometers, setFinalCarKilometers] = useState("");
  const [finalCarOwner, setFinalCarOwner] = useState("");
  const [years, setYears] = useState(null);
  const [value, setValue] = useState({
    name: "",
    phone: "",
  });
  const [selectedOwnership, setSelectedOwnership] = useState(null);
  const [search, setSearch] = useState("");
  const [searchVarient, setSearchVarient] = useState("");
  const [errors, setErrors] = useState("");
  // const [filteredCarBrand,setFilteredCarBrand] = useState([carBrand]);
  const dispatch = useDispatch();
  const carDetailssss = useSelector((state) => state);
  const [isIOS, setIsIOS] = useState(false);
 
   
  
  //   console.log(brands?.cars?.data?.map((item)=>item?.attributes?.carImage?.data?.attributes?.url),"brandssssssss")
  // console.log(brands.brandList?.data, "brandssssssss");
  // console.log(carDetailssss, "bransefsedssssddfssss");
  const router = useRouter();
  useEffect(() => {
    if ( window.innerWidth < 600) return;
    setLoader(true);
    axios
      .get(
        // "https://carapp-strapi.testyourapp.online/api/banner-image-and-videos?populate=*"
        `${BASE_URL}api/banner-image-and-videos?populate=*`
      )
      .then((response) => {
        const data = response?.data?.data;
        // console.log(data, "dataaaaaaaa");

        const mediaUrls = data
          .filter((item) => item?.attributes?.bannerMedia?.data)
          .map((item) => item.attributes.bannerMedia.data.attributes.url);

        const imageUrls = data
          .filter((item) => item?.attributes?.bannerImage?.data)
          .map((item) => item.attributes.bannerImage.data.attributes.url);

        if (mediaUrls.length > 0) {
          setdynamicMedia(mediaUrls[0]);
        }

        if (imageUrls.length > 0) {
          setDynamicImage(imageUrls[0]);
        }
        setLoader(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // console.log("carTransmission", carTransmission);
  const modelsOpening = () => {
    if (finalCarModel) {
    }
  };
  const handleBrand = () => {
    setOpenBrandModal(true);
    setFinalCarModel("");
    setFinalCarYear("");
    setFinalCarVarient("");
    setFinalCarMinValue("");
    setFinalCarMaxValue("");
    setSelectedOwnership("");
    setCalculatorLoader(true);
    dispatch(CalculatorAPI()).then((res) => {
      if (res?.payload?.status && res?.payload?.status == 200) {
        // console.log(res?.payload?.data, "ressssssss");
        setBrandData(res?.payload?.data?.data);
        setCalculatorLoader(false);
      } else {
        toast.error(res?.payload?.data?.message);
      }
    });
  };
  const handleImageModal = (item) => {
    // console.log(item, "itemmsmsss");
    setFinalCarBrand(item);
    setSelectedCarBrand(item);
    // setCarModal(item);
    setCarVarientItem(item);
    setOpenBrandModal(false);
    setOpenSelectModal(true);
    dispatch(
      getCarBrandDetails({
        car_brand: item,
      }), setCalculatorLoader(true)
    ).then((res) => {
      // console.log(res, "response from dispatchhh");
      if (res?.payload?.status == 200) {
        // toast.success("success")
        setCarBrand(res?.payload?.data?.data);
        setCalculatorLoader(false)
        // setFilteredCarBrand(res?.payload?.data?.data);
        // console.log(res?.payload?.data?.data, "resedefeef");
      } else {
        console.error(res, "erorororroro");
        setCalculatorLoader(false)
      }
    });
  };
  const handleModal = () => {
    setOpenSelectModal(false);
    setSearch("")
    setOpenBrandModal(true);
  };
  // const handleVarient = async (item, url) => {
  //   try {
  //     setFinalCarModel(item);
  //     setFinalCarModelUrl(url);
  //     console.log(item, url, "dfsdfs");
  //     setSelectedCarModel(item);
  //     setCarVarientNameForYear(item);
  //     setOpenSelectModal(false);
  //     setOpenYearModal(true);

  //     const res1 = await dispatch(
  //       getCarRestDetails({
  //         car_brand: carVarientItem,
  //         car_variant: item,
  //       })
  //     );

  //     console.log(res1, "response from dispatchhh");

  //     if (res1?.payload?.status == 200) {
  //       setCarRestDetails(res1?.payload?.data?.data);
  //       console.log(res1?.payload?.data, "resedefeeff");
  //     } else {
  //       console.error(res1, "erorororroro");
  //       return; // Exit if the first API call fails
  //     }

  //     const res2 = await dispatch(
  //       ManufacturingYears({
  //         car_brand: finalCarBrand,
  //         car_model: item, // Use the current model as it's being set
  //       })
  //     );

  //     if (res2?.payload?.status && res2?.payload?.status == 200) {
  //       console.log(res2?.payload?.data?.data, "redfggssssssdfgsssdfsdf");
  //       setCalculatorLoader(false);
  //     } else {
  //       toast.error(res2?.payload?.data?.message);
  //     }
  //   } catch (error) {
  //     console.error("Error in handleVarient:", error);
  //   }
  // };

  const handleVarient = (item, url) => {
    setFinalCarModel(item);
    setFinalCarModelUrl(url);
    // console.log(item, url, "dfsdfs");
    setSelectedCarModel(item);
    // setCarVarientName(item);
    setCarVarientNameForYear(item);
    setOpenSelectModal(false);
    setOpenYearModal(true);
    // console.log(url,"urllllllll")
    dispatch(
      getCarRestDetails({
        car_brand: carVarientItem,
        car_variant: item,
      })
    ).then((res) => {
      // console.log(res, "response from dispatchhh");
      if (res?.payload?.status == 200) {
        // toast.success("success")
        setCarRestDetails(res?.payload?.data?.data);
        setSearch("");
        // console.log(res?.payload?.data, "resedefeeff");
      } else {
        console.error(res, "erorororroro");
      }
    });
    dispatch(
      ManufacturingYears({
        car_brand: finalCarBrand,
        car_model: item,
      }), setCalculatorLoader(true)
    ).then((res) => {
      if (res?.payload?.status && res?.payload?.status == 200) {
        // console.log(
        //   res?.payload?.data?.data[0]?.attributes?.variants,
        //   "redfggssssssdfgsssdfsdf"
        // );
        setMenuYear(res?.payload?.data?.data[0]?.attributes?.variants);
        // console.log(
        //   res?.payload?.data?.data.map((item) => item?.attributes?.date),
        //   "redfggssssssdfgsssdfsdf"
        // );
        setCalculatorLoader(false);
      } else {
        toast.error(res?.payload?.data?.message);
      }
    });
  };
  const handleYearModal = () => {
    setOpenYearModal(false);
    setOpenSelectModal(true);
  };
  const handleYearApiCall = (year) => {
    // console.log(year, "yearrrr");
    // console.log(year, "sdhfsjhgdhgasdh");
    // if (year !== finalCarYear) {
    //   setFuelType("");
    //   setTransmissionType("");
    // }

    setFinalCarYear((prev) => year);
    setOpenYearModal(false);
    setOpenVariantModal(true);
    // setCarRestDetailsWithYear(year);
    setSelectedCarYear(year);
    //  setFuelType("Petrol");
    //     setTransmissionType("Manual")
    dispatch(
      getCarRestDetailswithYear({
        car_brand: carVarientItem,
        car_variant: carVarientNameForYear,
        // menu_year: year,
      }),
      setCalculatorLoader(true)
    ).then((res) => {
      // console.log(res, "response from dispatchhh");
      if (res?.payload?.status == 200) {
        // console.log(res, "responsodeosmslknf");
        // toast.success("success")
        const data1 = JSON.parse(JSON.stringify(res?.payload?.data?.data));
        const data2 = JSON.parse(JSON.stringify(res?.payload?.data?.data));
        let models = [];
        data1?.forEach((item) => {
          item.attributes.variants.forEach((variant) => {
            // console.log(variant, finalCarYear, "sdhfsjhgdhgasdh");
            if (variant?.manufacturingYear == finalCarYear) {
              // if (variant.fuelType === fuelType && variant.transmissionType === transmissionType) {
              models.push(...variant.model);
              // }
            }
          });
        });
        setCarTransmission(models);
        setCalculatorLoader(false)
        // setCarTransmissiondata(data2);
        // console.log(res?.payload?.data?.data, "resedsdsdefeeff");
      } else {
        console.error(res, "erorororroro");
        setCalculatorLoader(false)
      }
    });
  };
  useEffect(() => {
    // Check for iOS only on the client side
    const checkIsIOS = () => {
      const userAgent = window.navigator.userAgent;
      return /iPad|iPhone|iPod|Macintosh/.test(userAgent) && !window.MSStream;
    };
    setIsIOS(checkIsIOS());
  }, []);
  // const isIOS = /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent) && !window.MSStream;
  useEffect(() => {
    if (finalCarYear) {
      if (isIOS) {
        const timeoutId = setTimeout(() => {
          handleYearApiCall(finalCarYear);
        }, 500); // 500ms delay for iOS devices, adjust as needed

        return () => clearTimeout(timeoutId);
      } else {
        // For non-iOS devices, call the function immediately
        handleYearApiCall(finalCarYear);
      }
    }
  }, [finalCarYear, isIOS]);
  // const validate = () => {
  //   let formErrors = {};

  //   if (!value.name.trim()) {
  //     formErrors.name = "Name is required";
  //   }

  //   const phoneRegex = /^[0-9]{10}$/;
  //   if (!value.phone) {
  //     formErrors.phone = "Phone number is required";
  //   } else if (!phoneRegex.test(value.phone)) {
  //     formErrors.phone = "Invalid phone number format";
  //   }

  //   setErrors(formErrors);
  //   return Object.keys(formErrors).length === 0;
  // };
  const validate = () => {
    let isValid = true;
    let errors = {};

    if (!finalCarBrand) {
      isValid = false;
      toast.error("Brand is required");
    }
    if (!finalCarModel) {
      isValid = false;
      // errors.carName = "Car Name is required";
      toast.error("Car Name is required");
    }
    if (!finalCarModelUrl) {
      isValid = false;
      // errors.imageUrl = "Image URL is required";
      toast.error("Image URL is required");
    }
    if (!finalCarYear) {
      isValid = false;
      // errors.manufacturingYear = "Manufacturing Year is required";
      toast.error("Manufacturing Year is required");
    }
    if (!finalCarVarient) {
      isValid = false;
      // errors.model = "Model is required";
      toast.error("Model is required");
    }
    // if (!finalCarMinValue) {
    //   isValid = false;
    //   // errors.minKms = "Minimum Kilometers is required";
    //   toast.error("Minimum Kilometers is required");
    // }
    if (!finalCarMaxValue) {
      isValid = false;
      // errors.maxKms = "Maximum Kilometers is required";
      toast.error("Maximum Kilometers is required");
    }
    if (!selectedOwnership) {
      isValid = false;
      // errors.owner = "Owner is required";
      toast.error("Owner is required");
    }
    if (!value.name.trim()) {
      isValid = false;
      // toast.error("Name is required");
      errors.name = "Please enter your name";
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (!value.phone) {
      isValid = false;
      // toast.error("Phone is required");
      errors.phone = "Please enter your mobile number";
    } else if (!phoneRegex.test(value.phone)) {
      isValid = false;
      // toast.error("Please enter number up to 10 digits");
      errors.phone = "Please enter number up to 10 digits";
    }
    setErrors(errors);
    return isValid;
  };

  useEffect(() => {
    // console.log(fuelType, transmissionType, "transmissionType");
    if (finalCarYear) {
      const handleCarBrandsDetails = () => {
        let models = [];
        carTransmissiondata?.forEach((item) => {
          item.attributes.variants.forEach((variant) => {
            // console.log(variant, "sdjkfbsdjkfs");
            if (
              // variant.fuelType === fuelType &&
              variant.manufacturingYear == finalCarYear
              // variant.transmissionType === transmissionType
            ) {
              models.push(...variant.model);
            }
          });
        });
        // console.log("modelsmodels", models);
        setCarTransmission(models);
      };
      handleCarBrandsDetails();
    }
  }, [finalCarYear]);

  const handleVariantModal = () => {
    //petrol/cng/diesel
    setOpenVariantModal(false);
    setSearchVarient("")
    setOpenYearModal(true);
  };
  const handleModelName = (item) => {
    setSelectedCarModelName(item);
    setFinalCarVarient(item);
    setSearchVarient("")
    // setSelectedVarientValue(item);
    setOpenVariantModal(false);
    setOpenKilometersModal(true);
    // console.log(item, "dnfjdksv");
  };

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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitLoader(true);
      const data = {
        brand: finalCarBrand,
        carName: finalCarModel,
        imageUrl: finalCarModelUrl,
        manufacturingYear: finalCarYear,
        model: finalCarVarient,
        minKms: finalCarMinValue,
        maxKms: finalCarMaxValue,
        owner: selectedOwnership,
        userName: value.name,
        userMobile: value.phone,
      };
      // console.log(data, "kdklak");
      dispatch(postAllDetails({ data })).then((res) => {
        if (res?.payload?.status == 201) {
          // console.log(res?.payload?.data?.carData?.id, "responsieeeee");
          const ID = res?.payload?.data?.carData?.id;
          setOpenCarValuation(false);
          setSubmitLoader(false);
          setValue({
            name: "",
            phone: "",
          });
          setErrors({});
          router.push(`/calculator-result?id=${ID}`);
        } else {
          toast?.error(res?.payload?.data?.message);
          setSubmitLoader(false);
        }
      });
    }
  };

  // const handleFuelTypeClick = (fuelType) => {
  //   setSelectedFuelType(fuelType);
  // };
  const kilometerRanges = [
    { minValue: 0, maxValue: 10000 },
    { minValue: 10000, maxValue: 20000 },
    { minValue: 20000, maxValue: 30000 },
    { minValue: 30000, maxValue: 40000 },
    { minValue: 40000, maxValue: 50000 },
    { minValue: 50000, maxValue: 60000 },
    { minValue: 60000, maxValue: 70000 },
    { minValue: 70000, maxValue: 80000 },
    { minValue: 80000, maxValue: 90000 },
    { minValue: 90000, maxValue: 100000 },
    { minValue: 100000, maxValue: 150000 },
    { minValue: 150000, maxValue: 200000 },
  ];

  const handleRange = (min, max) => {
    // console.log(min, max, "asdsfsdf");
    setFinalCarMinValue(min);
    setFinalCarMaxValue(max);
    setYears(min);
    setOpenKilometersModal(false);
    setOpenOwnership(true);
  };

  const handlekilometersBack = () => {
    setOpenKilometersModal(false);
    setOpenVariantModal(true);
  };
  const handleOwnershipClick = (option) => {
    // console.log(option, "optionnnnn");
    setSelectedOwnership(option);
    setOpenOwnership(false);
    setOpenCarValuation(true);
  };

  const ownershipOptions = ["1st owner", "2nd owner", "3rd owner", "4th owner"];
  const handleOwnershipModal = () => {
    setOpenOwnership(false);
    setOpenKilometersModal(true);
  };
  const getBoxClass = (type) => {
    return fuelType === type ? "box-1 active" : "box-1";
  };
  const getBoxClassTransmission = (type) => {
    return transmissionType === type ? "box-2 active" : "box-2";
  };

  const handleAllModels = (item) => {
    if (finalCarBrand) {
      if (item == "Model") {
        // console.log("I am Model");
        setOpenSelectModal(true);
        setFinalCarYear("");
        setFinalCarVarient("");
        setFinalCarMinValue("");
        setFinalCarMaxValue("");
        setSelectedOwnership("");
      }
    }
    if (finalCarBrand && finalCarModel) {
      if (item == "Year") {
        // console.log("I am Year");
        setOpenYearModal(true);
        setFinalCarVarient("");
        setFinalCarMinValue("");
        setFinalCarMaxValue("");
        setSelectedOwnership("");
      }
    }
    if (finalCarBrand && finalCarModel && finalCarYear) {
      if (item == "Variant") {
        // console.log("I am Variant");
        setOpenVariantModal(true);
        // setFuelType("")
        // setTransmissionType("")
        setFinalCarMinValue("");
        setFinalCarMaxValue("");
        setSelectedOwnership("");
      }
    }
    if (finalCarBrand && finalCarModel && finalCarYear && finalCarVarient) {
      if (item == "Kilometers") {
        // console.log("I am Kilometer");
        setOpenKilometersModal(true);
        setSelectedOwnership("");
      }
    }
    if (
      finalCarBrand &&
      finalCarModel &&
      finalCarYear &&
      finalCarVarient &&
      finalCarMinValue &&
      finalCarMaxValue
    ) {
      if (item == "Ownership") {
        // console.log("I am Kilometer");
        setOpenOwnership(true);
      }
    }
  };

  const handleEligibility = () => {
    const data = {
      brand: finalCarBrand,
      carName: finalCarModel,
      manufacturingYear: finalCarYear,
      model: finalCarVarient,
      minKms: finalCarMinValue,
      maxKms: finalCarMaxValue,
      owner: selectedOwnership,
      userName: value.name,
      userMobile: value.phone,
    };
    if (data.brand) {
      setOpenSelectModal(true);
    } else {
      handleBrand();
    }
    if (data.brand && data.carName) {
      setOpenSelectModal(false);
      setOpenYearModal(true);
    }
    if (data.brand && data.carName && data.manufacturingYear) {
      setOpenSelectModal(false);
      setOpenYearModal(false);
      setOpenVariantModal(true);
    }
    if (data.brand && data.carName && data.manufacturingYear && data.model) {
      setOpenSelectModal(false);
      setOpenYearModal(false);
      setOpenVariantModal(false);
      setOpenKilometersModal(true);
      // setSelectedOwnership("");
    }
    if (
      data.brand &&
      data.carName &&
      data.manufacturingYear &&
      data.model &&
      data.maxKms
    ) {
      setOpenSelectModal(false);
      setOpenYearModal(false);
      setOpenVariantModal(false);
      setOpenKilometersModal(false);
      setOpenOwnership(true);
    }
    if (
      data.brand &&
      data.carName &&
      data.manufacturingYear &&
      data.model &&
      data.maxKms &&
      data.owner
    ) {
      setOpenSelectModal(false);
      setOpenYearModal(false);
      setOpenVariantModal(false);
      setOpenKilometersModal(false);
      setOpenOwnership(false);
      setOpenCarValuation(true);
    }
    // toast.success('Please fill the required field!')
  };
  const handleCarEvaluation = () => {
    setOpenCarValuation(false);
    setOpenOwnership(true);
  };
  // useEffect(() => {
  //   if (addressSearch) {
  //     setListProperty(
  //       singleOrgData.agency_address.filter((item) =>
  //         item?.zipcode?.toLowerCase().includes(addressSearch.toLowerCase())
  //       )
  //     );
  //   } else {
  //     setListProperty(singleOrgData.agency_address);
  //   }
  // }, [addressSearch]);
  // const filteredCarBrand = Array.isArray(carBrand)
  //   ? carBrand.filter((item) =>
  //       item?.attributes?.carName?.toLowerCase().includes(search.toLowerCase())
  //     )
  //   : [];
  const filteredCarBrand = Array.isArray(carBrand) && search.trim() !== ""
    ? carBrand.filter((item) =>
      item?.attributes?.carName?.toLowerCase().includes(search.trim().toLowerCase())
    )
    : carBrand;
  const filteredCarVarient = Array.isArray(carTransmission) && searchVarient.trim() !== ""
    ? carTransmission.filter((item) =>
      item?.model?.toLowerCase().includes(searchVarient.toLowerCase())
    )
    : carTransmission;

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSearchVarient = (e) => {
    setSearchVarient(e.target.value);
  };
  const handleSearchText = () => {
    setSearch("")
  }
  const handleSearchVarientText = () => {
    setSearchVarient("")
  }
  // console.log(dynamicImage, "eeeeeeeeeee")
  // console.log(dynamicMedia, "eeeeeeeeeee")
  let desktopScreen = true;
  if (typeof window !== "undefined") {
    // Safe to use window here
    desktopScreen = window.innerWidth >=600;
  }
  return (
    <>
      {loader ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '600px' }} >
          <img className="img-loader" src="/spinner-loader.svg" />
        </div>
      ) :  desktopScreen && dynamicMedia && dynamicMedia.length > 0 ? (
        <div className="check-eligiblity-wrapper">
          <div className="video-wrapper">
            <video
              className="videooo"
              style={{ width: "100%" }}
              src={BASE_URL + dynamicMedia}
              autoPlay
              muted
              loop
            />
            <div className="video-div"></div>
          </div>
          <div class="caption">
            <h1 className="caption-heading">
              <bold>CHECK YOUR CAR VALUE AND GET INSTANT FUND</bold>
            </h1>
            <p className="caption-childtext">Enter your car details</p>
            <div className="popups-wrapper">
              <div className="popups">
                <p className="popups-brand">Brand*</p>
                <p className="popups-brand-select" onClick={handleBrand}>
                  {finalCarBrand ? (
                    <span className="SelectedItem">{finalCarBrand}</span>
                  ) : (
                    <span className="">
                      <>Select Brand</>
                    </span>
                  )}{" "}
                  <Image
                    className="polygon"
                    height={6}
                    width={12}
                    alt="dropdown-icon"
                    src="/Polygon 2.svg"
                  />
                </p>
              </div>
              <div className="popups">
                <p className="popups-brand">Model*</p>
                <p
                  className="popups-brand-select"
                  // onClick={() => setOpenSelectModal(true)}
                  onClick={() => handleAllModels("Model")}
                >
                  {finalCarModel ? (
                    <span className="SelectedItem">{finalCarModel}</span>
                  ) : (
                    <span className="SelectedItem">Select Model</span>
                  )}{" "}
                  <Image
                    className="polygon"
                    height={6}
                    width={12}
                    alt="dropdown-icon"
                    src="/Polygon 2.svg"
                  />
                </p>
              </div>
              <div className="popups">
                <p className="popups-brand">Year*</p>
                <p
                  className="popups-brand-select"
                  // onClick={() => setOpenYearModal(true)}
                  onClick={() => handleAllModels("Year")}
                >
                  {finalCarYear ? (
                    <span className="SelectedItem">{finalCarYear}</span>
                  ) : (
                    <span className="SelectedItem">Select Year</span>
                  )}{" "}
                  <Image
                    className="polygon"
                    height={6}
                    width={12}
                    alt="dropdown-icon"
                    src="/Polygon 2.svg"
                  />
                </p>
                {/* <p className="popups-brand-select">Select   Year <img src="/Polygon 2.svg" /></p> */}
              </div>
              <div className="popups">
                <p className="popups-brand">Variant*</p>
                <p
                  className="popups-brand-select"
                  // onClick={() => setOpenVariantModal(true)}
                  onClick={() => handleAllModels("Variant")}
                >
                  {finalCarVarient ? (
                    <span className="SelectedItem">{finalCarVarient}</span>
                  ) : (
                    <span>Select Variant</span>
                  )}{" "}
                  <Image
                    className="polygon"
                    height={6}
                    width={12}
                    alt="dropdown-icon"
                    src="/Polygon 2.svg"
                  />
                </p>
              </div>
              <div className="popups">
                <p className="popups-brand">Kilometers*</p>
                <p
                  className="popups-brand-select"
                  // onClick={() => setOpenKilometersModal(true)}
                  onClick={() => handleAllModels("Kilometers")}
                >
                  {finalCarMinValue ? (
                    `${finalCarMinValue}-${finalCarMaxValue}`
                  ) : (
                    <>Select KM</>
                  )}{" "}
                  <Image
                    className="polygon"
                    height={6}
                    width={12}
                    alt="dropdown-icon"
                    src="/Polygon 2.svg"
                  />
                </p>
                {/* <p className="popups-brand-select">Select KM <img src="/Polygon 2.svg" /></p> */}
              </div>
              <div className="popups">
                <p className="popups-brand">Owner*</p>
                <p
                  className="popups-brand-select"
                  // onClick={() => setOpenOwnership(true)}
                  onClick={() => handleAllModels("Ownership")}
                >
                  {selectedOwnership ? selectedOwnership : <>Select Owner</>}{" "}
                  <Image
                    className="polygon"
                    height={6}
                    width={12}
                    alt="dropdown-icon"
                    src="/Polygon 2.svg"
                  />
                </p>
                {/* <p className="popups-brand-select" >Select Owner <img src="/Polygon 2.svg" /></p> */}
              </div>
            </div>
            <div className="check-eligiblity-btn-wrapper">
              <button
                className="check-eligiblity-btn"
                onClick={handleEligibility}
              // onClick={() => setOpenCarValuation(true)}
              >
                Check Eligibility
              </button>
            </div>
          </div>
          {openYearModal && (
            <Model setOpenModel={setOpenYearModal}>
              <div className="year-modal-container">
                <div className="year-modal-header">
                  <img src="/back-arrow.svg" onClick={handleYearModal} />
                  <h2 className="title">Select the car manufacturing year</h2>
                </div>
                {calculatorLoader ? <>
                  <div
                    style={{
                      display: "block",
                      gridColumn: "1/5",
                      textAlign: "center"
                    }}
                  // className="loader-div"
                  >
                    <img
                      className="img-loader"
                      src="/spinner-loader.svg"
                    />
                  </div>
                </> :
                  <>
                    <div className="year-modal-body">
                      {menuYear &&
                        [...new Set(menuYear.map((item) => item.manufacturingYear))]
                          .sort((a, b) => new Date(b) - new Date(a))
                          .map((year) => (
                            <div
                              onClick={() => handleYearApiCall(year)}
                              // onTouchStart={() => handleYearApiCall(year)}
                              key={year}
                              className={`box ${year === selectedCarYear ? "active" : ""
                                }`}
                            >
                              {year}
                            </div>
                          ))}
                    </div>
                  </>}
                {/* <div className="year-modal-body">
                  {menuYear &&
                    [...menuYear]
                      .sort(
                        (a, b) =>
                          new Date(b.manufacturingYear) -
                          new Date(a.manufacturingYear)
                      )
                      .map((item) => (
                        <>
                          <div
                            onClick={() =>
                              handleYearApiCall(item?.manufacturingYear)
                            }
                            key={item.id}
                            className={`box ${
                              item?.manufacturingYear === selectedCarYear
                                ? "active"
                                : ""
                            }`}
                          >
                            {item?.manufacturingYear}
                          </div>
                        </>
                      ))}
                </div> */}
              </div>
            </Model>
          )}
          {openOwnership && (
            <Model setOpenModel={setOpenOwnership}>
              <div className="ownership-modal-container">
                <div className="ownership-modal-header">
                  <img src="/back-arrow.svg" onClick={handleOwnershipModal} />
                  <h2 className="title">
                    Select the ownership history of your car
                  </h2>
                </div>
                <div className="ownership-modal-body">
                  {ownershipOptions.map((option, index) => (
                    <div
                      key={index}
                      className={`box ${option === selectedOwnership ? "active" : ""
                        }`}
                      onClick={() => handleOwnershipClick(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </div>
            </Model>
          )}
          {openKilometersModal && (
            <Model setOpenModel={setOpenKilometersModal}>
              <div className="kilometer-modal-container">
                <div className="kilometer-modal-header">
                  <img
                    src="/back-arrow.svg"
                    // onClick={() => setOpenKilometersModal(false)}
                    onClick={handlekilometersBack}
                  />
                  <h2 className="title">
                    Select the kilometers driven by your car
                  </h2>
                </div>
                <div className="kilometer-modal-body">
                  {kilometerRanges.map((range, index) => (
                    <div
                      key={index}
                      onClick={() =>
                        handleRange(range?.minValue, range?.maxValue)
                      }
                      className={`box ${range?.minValue === years ? "active" : ""
                        }`}
                    >
                      {range.maxValue === "or more"
                        ? `${range.minValue.toLocaleString()} Km - ${range.maxValue
                        }`
                        : `${range.minValue.toLocaleString()} Km - ${range.maxValue.toLocaleString()} Km`}
                    </div>
                    // <div key={index} className="box">{`${range?.minValue} - ${}`}
                    // </div>
                  ))}
                </div>
              </div>
            </Model>
          )}
          {openCarValuation && (
            <Model setOpenModel={setOpenCarValuation}>
              <div className="car-validation-modal-container">
                <div className="car-validation-modal-header">
                  <img
                    src="/back-arrow.svg"
                    // onClick={() => setOpenCarValuation(false)}
                    onClick={handleCarEvaluation}
                  />
                  <h2 className="title">
                    Enter your name and mobile no to see your car valuation
                  </h2>
                </div>
                <div className="car-validation-modal-body">
                  <div className="form-div">
                    <label>Enter Name</label>
                    <input
                      className="input-div"
                      type="text"
                      name="name"
                      placeholder="Enter you name"
                      value={value.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <div className="error form-div ">{errors.name}</div>
                    )}
                  </div>
                  <div className="form-div">
                    <label>Enter Mobile No.</label>
                    <input
                      className="input-div"
                      type="tel"
                      name="phone"
                      // pattern="[0-9]{10}"
                      placeholder="+91 777 9070 444"
                      value={value.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <div className="error">{errors.phone}</div>
                    )}
                  </div>
                  <div className="btn">
                    {submitLoader ? (
                      <>
                        <button type="disabled" className="submit-btn">
                          Submitting..
                        </button>
                      </>
                    ) : (
                      <>
                        <button onClick={handleSubmit} className="submit-btn">
                          Submit
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Model>
          )}
          {openBrandModal && (
            <Model setOpenModel={setOpenBrandModal}>
              <div className="brand-modal-container">
                <div className="brand-modal-header">
                  <img
                    src="/back-arrow.svg"
                    onClick={() => {
                      document.body.style.overflow = "auto";
                      setOpenBrandModal(false);
                    }}
                  />
                  <h2 className="title">Select Brand</h2>
                </div>
                {calculatorLoader ?
                  <>
                    <div style={{ textAlign: "center" }}  >
                      <img className='img' src='/spinner-loader.svg' />
                    </div>
                  </> :
                  <>
                    <div className="brand-modal-body">
                      {brandData &&
                        brandData?.map((item) => (
                          <div
                            key={item?.id}
                            onClick={() =>
                              handleImageModal(item?.attributes?.brandName)
                            }
                            className={`box ${item?.attributes?.brandName === selectedCarBrand
                              ? "active"
                              : ""
                              }`}
                          >
                            <div className="img-container">
                              <img
                                src={
                                  BASE_URL +
                                  item?.attributes?.brandImage?.data?.attributes
                                    ?.url
                                }
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                  </>}
              </div>
            </Model>
          )}
          {openSelectModal && (
            <Model setOpenModel={setOpenSelectModal}>
              <div className="select-modal-container">
                <div className="select-modal-header">
                  <img
                    src="/back-arrow.svg"
                    // onClick={() => setOpenSelectModal(false)}
                    onClick={handleModal}
                  />
                  <h2 className="title">Select the model of your car</h2>
                </div>
                {carBrand && carBrand.length > 0 ? <>
                  <div style={{ position: "relative", marginBottom: "10px" }}>
                    <input
                      style={{ display: "block", width: "100%", padding: "10px", borderRadius: "5px", marginTop: "10px", border: "1px solid blue", outline: "none" }}
                      type="text"
                      className="search-div"
                      value={search}
                      placeholder="Search Your Model..."
                      onChange={(e) => handleSearch(e)}
                    />
                    {search ? <><span onClick={handleSearchText} style={{ position: "absolute", top: "25%", right: "5px", cursor: "pointer" }}><RxCross2 style={{ fontSize: "20px" }} /></span></> : <></>}
                  </div>
                </> : <></>}
                <div className="select-modal-body">
                  {calculatorLoader ? (
                    <div
                      style={{
                        display: "block",
                        gridColumn: "1/5",
                        textAlign: "center"
                      }}
                    // className="loader-div"
                    >
                      <img
                        className="img-loader"
                        src="/spinner-loader.svg"
                      />
                    </div>
                  ) : (
                    <>
                      
                      {filteredCarBrand.length > 0 ? (
                        <>
                          {filteredCarBrand?.map((item) => (
                            // selectedCarModel
                            <div
                              key={item?.id}
                              onClick={() =>
                                handleVarient(
                                  item?.attributes?.carName,
                                  item?.attributes?.carImage?.data?.attributes
                                    ?.url
                                )
                              }
                              className={`box ${item?.attributes?.carName === selectedCarModel
                                ? "active"
                                : ""
                                }`}
                            >
                              <div className="img-container">
                                {" "}
                                {/* <img src="Car-modal.svg" /> */}
                                <img
                                  src={
                                    BASE_URL +
                                    item?.attributes?.carImage?.data?.attributes
                                      ?.url
                                  }
                                />
                              </div>
                              <div className="modal-name">
                                {item?.attributes?.carName}
                              </div>
                            </div>
                          ))}
                        </>
                      ) : (
                        <>
                          <h1
                            className="no-data-font"
                            style={{
                              gridColumn: "1/5",
                              display: "block",
                              textAlign: "center",
                              color: "grey",
                              fontSize: "20px"
                              // position: "absolute",
                              // left: "25%",
                              // top: "50%",
                              // color: "grey",
                            }}
                          >
                            Oops! No Data
                          </h1>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            </Model>
          )}
          {openVariantModal && (
            <Model setOpenModel={setOpenVariantModal}>
              <div className="variant-modal-container">
                <div className="variant-modal-header">
                  <img src="/back-arrow.svg" onClick={handleVariantModal} />
                  <h2 className="title">Select the variant of your car</h2>
                </div>
                {carTransmission && carTransmission.length > 0 ? <>
                  <div style={{ marginBottom: "10px", position: "relative" }}>
                    <input
                      style={{ display: "block", width: "100%", padding: "10px", borderRadius: "5px", marginTop: "10px", border: "1px solid blue", outline: "none" }}
                      type="text"
                      className="search-div"
                      value={searchVarient}
                      placeholder="Search Your Variant..."
                      onChange={(e) => handleSearchVarient(e)}
                    />
                    {searchVarient ? <><span onClick={handleSearchVarientText} style={{ position: "absolute", top: "25%", right: "5px", cursor: "pointer" }}><RxCross2 style={{ fontSize: "20px" }} /></span></> : <></>}
                  </div>
                </> : <></>}
                <div className="variant-modal-body">
                  {/* <div className="section-1">
                    <div
                      onClick={() => setFuelType("Petrol")}
                      className={getBoxClass("Petrol")}
                    >
                      <div className="img-container-1">
                        <img src="petrol-icon.svg" />
                      </div>
                      <div className="modal-name">Petrol</div>
                    </div>
                    <div
                      onClick={() => setFuelType("Diesel")}
                      className={getBoxClass("Diesel")}
                    >
                      <div className="img-container-1">
                        <img src="diesel-icon.svg" />
                      </div>
                      <div className="modal-name">Diesel</div>
                    </div>
                    <div
                      onClick={() => setFuelType("CNG")}
                      className={getBoxClass("CNG")}
                    >
                      <div className="img-container-1">
                        {" "}
                        <img src="cng-icon.svg" />
                      </div>
                      <div className="modal-name">CNG</div>
                    </div>
                  </div>
                  <div className="div-variant">SELECT VARIANT</div>
                  <div className="section-2">
                    <div
                      onClick={() => setTransmissionType("Manual")}
                      className={getBoxClassTransmission("Manual")}
                    >
                      <div className="img-container-2">
                        {" "}
                        <img src="manual.svg" />
                      </div>
                      <div className="modal-name">Manual</div>
                    </div>
                    <div
                      onClick={() => setTransmissionType("Automatic")}
                      className={getBoxClassTransmission("Automatic")}
                    >
                      <div className="img-container-2">
                        <img src="automatic.svg" />
                      </div>
                      <div className="modal-name">Automatic</div>
                    </div>
                  </div> */}
                  {calculatorLoader ? <>
                    <div
                      style={{
                        display: "block",
                        gridColumn: "1/5",
                        textAlign: "center"
                      }}
                    // className="loader-div"
                    >
                      <img
                        className="img-loader"
                        src="/spinner-loader.svg"
                      />
                    </div>
                  </> : <>
                    <div className="section-3">
                      <div className="section-3">
                        {filteredCarVarient.length > 0 ? <>
                          {filteredCarVarient.map((item) => (
                            <>
                              <div
                                onClick={() => handleModelName(item?.model)}
                                className={`models-div ${item?.model === selectedCarModelName
                                  ? "active"
                                  : ""
                                  }`}
                                key={item?.id}
                              >
                                {item?.model}
                              </div>
                            </>
                          ))}
                        </> : <>
                          <h1
                            className="no-data-font"
                            style={{
                              gridColumn: "1/5",
                              display: "block",
                              textAlign: "center",
                              color: "grey",
                              fontSize: "20px"
                              // position: "absolute",
                              // left: "25%",
                              // top: "50%",
                              // color: "grey",
                            }}
                          >
                            Oops! No Data
                          </h1>
                        </>}
                      </div>
                    </div>
                  </>}

                </div>
              </div>
            </Model>
          )}
        </div>
      ) : (
        <>
          <div className="check-eligiblity-wrapper2">
            <div className="video-wrapper">
                  <Image loading="eager" height={500} width={500}  className="banner-image" alt="banner-image"  src={"/fallbackimgg.png"} />
              <div className="video-div"></div>
            </div>
            <div class="caption">
              <h1 className="caption-heading">
                <bold>CHECK YOUR CAR VALUE AND GET INSTANT FUND</bold>
              </h1>
              <p className="caption-childtext">Enter your car details</p>
              <div className="popups-wrapper">
                <div className="popups">
                  <p className="popups-brand">Brand*</p>
                  <p className="popups-brand-select" onClick={handleBrand}>
                    {finalCarBrand ? (
                      <span className="SelectedItem">{finalCarBrand}</span>
                    ) : (
                      <span className="">
                        <>Select Brand</>
                      </span>
                    )}{" "}
                    <Image
                      className="polygon"
                      height={6}
                      width={12}
                      alt="dropdown-icon"
                      src="/Polygon 2.svg"
                    />
                  </p>
                </div>
                <div className="popups">
                  <p className="popups-brand">Model*</p>
                  <p
                    className="popups-brand-select"
                    // onClick={() => setOpenSelectModal(true)}
                    onClick={() => handleAllModels("Model")}
                  >
                    {finalCarModel ? (
                      <span className="SelectedItem">{finalCarModel}</span>
                    ) : (
                      <span className="SelectedItem">Select Model</span>
                    )}{" "}

                    <Image
                      className="polygon"
                      height={6}
                      width={12}
                      alt="dropdown-icon"
                      src="/Polygon 2.svg"
                    />
                  </p>
                </div>
                <div className="popups">
                  <p className="popups-brand">Year*</p>
                  <p
                    className="popups-brand-select"
                    // onClick={() => setOpenYearModal(true)}
                    onClick={() => handleAllModels("Year")}
                  >
                    {finalCarYear ? (
                      <span className="SelectedItem">{finalCarYear}</span>
                    ) : (
                      <span className="SelectedItem">Select Year</span>
                    )}{" "}
                    <Image
                      className="polygon"
                      height={6}
                      width={12}
                      alt="dropdown-icon"
                      src="/Polygon 2.svg"
                    />
                  </p>
                  {/* <p className="popups-brand-select">Select   Year <img src="/Polygon 2.svg" /></p> */}
                </div>
                <div className="popups">
                  <p className="popups-brand">Variant*</p>
                  <p
                    className="popups-brand-select"
                    // onClick={() => setOpenVariantModal(true)}
                    onClick={() => handleAllModels("Variant")}
                  >
                    {finalCarVarient ? (
                      <span className="SelectedItem">{finalCarVarient}</span>
                    ) : (
                      <span>Select Variant</span>
                    )}{" "}
                    <Image
                      className="polygon"
                      height={6}
                      width={12}
                      alt="dropdown-icon"
                      src="/Polygon 2.svg"
                    />
                  </p>
                </div>
                <div className="popups">
                  <p className="popups-brand">Kilometers*</p>
                  <p
                    className="popups-brand-select"
                    // onClick={() => setOpenKilometersModal(true)}
                    onClick={() => handleAllModels("Kilometers")}
                  >
                    {finalCarMinValue ? (
                      `${finalCarMinValue}-${finalCarMaxValue}`
                    ) : (
                      <>Select KM</>
                    )}{" "}
                    <Image
                      className="polygon"
                      height={6}
                      width={12}
                      alt="dropdown-icon"
                      src="/Polygon 2.svg"
                    />
                  </p>
                  {/* <p className="popups-brand-select">Select KM <img src="/Polygon 2.svg" /></p> */}
                </div>
                <div className="popups">
                  <p className="popups-brand">Owner*</p>
                  <p
                    className="popups-brand-select"
                    // onClick={() => setOpenOwnership(true)}
                    onClick={() => handleAllModels("Ownership")}
                  >
                    {selectedOwnership ? selectedOwnership : <>Select Owner</>}{" "}
                    <Image
                      className="polygon"
                      height={6}
                      width={12}
                      alt="dropdown-icon"
                      src="/Polygon 2.svg"
                    />
                  </p>
                  {/* <p className="popups-brand-select" >Select Owner <img src="/Polygon 2.svg" /></p> */}
                </div>
              </div>
              <div className="check-eligiblity-btn-wrapper">
                <button
                  className="check-eligiblity-btn"
                  onClick={handleEligibility}
                // onClick={() => setOpenCarValuation(true)}
                >
                  Check Eligibility
                </button>
              </div>
            </div>
            {openYearModal && (
              <Model setOpenModel={setOpenYearModal}>
                <div className="year-modal-container">
                  <div className="year-modal-header">
                    <img src="/back-arrow.svg" onClick={handleYearModal} />
                    <h2 className="title">Select the car manufacturing year</h2>
                  </div>
                  {calculatorLoader ? <>
                    <div
                      style={{
                        display: "block",
                        gridColumn: "1/5",
                        textAlign: "center"
                      }}
                    // className="loader-div"
                    >
                      <img
                        className="img-loader"
                        src="/spinner-loader.svg"
                      />
                    </div>
                  </> :
                    <>
                      <div className="year-modal-body">
                        {menuYear &&
                          [...new Set(menuYear.map((item) => item.manufacturingYear))]
                            .sort((a, b) => new Date(b) - new Date(a))
                            .map((year) => (
                              <div
                                onClick={() => handleYearApiCall(year)}
                                key={year}
                                className={`box ${year === selectedCarYear ? "active" : ""
                                  }`}
                              >
                                {year}
                              </div>
                            ))}
                      </div>
                    </>}
                  {/* <div className="year-modal-body">
                  {menuYear &&
                    [...menuYear]
                      .sort(
                        (a, b) =>
                          new Date(b.manufacturingYear) -
                          new Date(a.manufacturingYear)
                      )
                      .map((item) => (
                        <>
                          <div
                            onClick={() =>
                              handleYearApiCall(item?.manufacturingYear)
                            }
                            key={item.id}
                            className={`box ${
                              item?.manufacturingYear === selectedCarYear
                                ? "active"
                                : ""
                            }`}
                          >
                            {item?.manufacturingYear}
                          </div>
                        </>
                      ))}
                </div> */}
                </div>
              </Model>
            )}
            {openOwnership && (
              <Model setOpenModel={setOpenOwnership}>
                <div className="ownership-modal-container">
                  <div className="ownership-modal-header">
                    <img src="/back-arrow.svg" onClick={handleOwnershipModal} />
                    <h2 className="title">
                      Select the ownership history of your car
                    </h2>
                  </div>
                  <div className="ownership-modal-body">
                    {ownershipOptions.map((option, index) => (
                      <div
                        key={index}
                        className={`box ${option === selectedOwnership ? "active" : ""
                          }`}
                        onClick={() => handleOwnershipClick(option)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              </Model>
            )}
            {openKilometersModal && (
              <Model setOpenModel={setOpenKilometersModal}>
                <div className="kilometer-modal-container">
                  <div className="kilometer-modal-header">
                    <img
                      src="/back-arrow.svg"
                      // onClick={() => setOpenKilometersModal(false)}
                      onClick={handlekilometersBack}
                    />
                    <h2 className="title">
                      Select the kilometers driven by your car
                    </h2>
                  </div>
                  <div className="kilometer-modal-body">
                    {kilometerRanges.map((range, index) => (
                      <div
                        key={index}
                        onClick={() =>
                          handleRange(range?.minValue, range?.maxValue)
                        }
                        className={`box ${range?.minValue === years ? "active" : ""
                          }`}
                      >
                        {range.maxValue === "or more"
                          ? `${range.minValue.toLocaleString()} Km - ${range.maxValue
                          }`
                          : `${range.minValue.toLocaleString()} Km - ${range.maxValue.toLocaleString()} Km`}
                      </div>
                      // <div key={index} className="box">{`${range?.minValue} - ${}`}
                      // </div>
                    ))}
                  </div>
                </div>
              </Model>
            )}
            {openCarValuation && (
              <Model setOpenModel={setOpenCarValuation}>
                <div className="car-validation-modal-container">
                  <div className="car-validation-modal-header">
                    <img
                      src="/back-arrow.svg"
                      // onClick={() => setOpenCarValuation(false)}
                      onClick={handleCarEvaluation}
                    />
                    <h2 className="title">
                      Enter your name and mobile no to see your car valuation
                    </h2>
                  </div>
                  <div className="car-validation-modal-body">
                    <div className="form-div">
                      <label>Enter Name</label>
                      <input
                        className="input-div"
                        type="text"
                        name="name"
                        placeholder="Enter you name"
                        value={value.name}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <div className="error form-div ">{errors.name}</div>
                      )}
                    </div>
                    <div className="form-div">
                      <label>Enter Mobile No.</label>
                      <input
                        className="input-div"
                        type="tel"
                        name="phone"
                        // pattern="[0-9]{10}"
                        placeholder="+91 777 9070 444"
                        value={value.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && (
                        <div className="error">{errors.phone}</div>
                      )}
                    </div>
                    <div className="btn">
                      {submitLoader ? (
                        <>
                          <button type="disabled" className="submit-btn">
                            Submitting..
                          </button>
                        </>
                      ) : (
                        <>
                          <button onClick={handleSubmit} className="submit-btn">
                            Submit
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Model>
            )}
            {openBrandModal && (
              <Model setOpenModel={setOpenBrandModal}>
                <div className="brand-modal-container">
                  <div className="brand-modal-header">
                    <img
                      src="/back-arrow.svg"
                      onClick={() => {
                        document.body.style.overflow = "auto";
                        setOpenBrandModal(false);
                      }}
                    />
                    <h2 className="title">Select Brand</h2>
                  </div>
                  {calculatorLoader ?
                    <>
                      <div style={{ textAlign: "center" }}  >
                        <img className='img' src='/spinner-loader.svg' />
                      </div>
                    </> :
                    <>
                      <div className="brand-modal-body">
                        {brandData &&
                          brandData?.map((item) => (
                            <div
                              key={item?.id}
                              onClick={() =>
                                handleImageModal(item?.attributes?.brandName)
                              }
                              className={`box ${item?.attributes?.brandName === selectedCarBrand
                                ? "active"
                                : ""
                                }`}
                            >
                              <div className="img-container">
                                <img
                                  src={
                                    BASE_URL +
                                    item?.attributes?.brandImage?.data?.attributes
                                      ?.url
                                  }
                                />
                              </div>
                            </div>
                          ))}
                      </div>
                    </>}
                </div>
              </Model>
            )}
            {openSelectModal && (
              <Model setOpenModel={setOpenSelectModal}>
                <div className="select-modal-container">
                  <div className="select-modal-header">
                    <img
                      src="/back-arrow.svg"
                      // onClick={() => setOpenSelectModal(false)}
                      onClick={handleModal}
                    />
                    <h2 className="title">Select the model of your car</h2>
                  </div>
                  {carBrand && carBrand.length > 0 ? <>
                    <div style={{ marginBottom: "10px" }}>
                      <input
                        style={{ display: "block", width: "100%", padding: "10px", borderRadius: "5px", marginTop: "10px", border: "1px solid blue", outline: "none" }}
                        type="text"
                        className="search-div"
                        placeholder="Search Your Model..."
                        onChange={(e) => handleSearch(e)}
                      />
                    </div>
                  </> : <></>}
                  <div className="select-modal-body">
                    {calculatorLoader ? (
                      <div
                        style={{
                          display: "block",
                          gridColumn: "1/5",
                          textAlign: "center"
                        }}
                      // className="loader-div"
                      >
                        <img
                          className="img-loader"
                          src="/spinner-loader.svg"
                        />
                      </div>
                    ) : (
                      <>
                    
                        {filteredCarBrand.length > 0 ? (
                          <>
                            {filteredCarBrand?.map((item) => (
                              // selectedCarModel
                              <div
                                key={item?.id}
                                onClick={() =>
                                  handleVarient(
                                    item?.attributes?.carName,
                                    item?.attributes?.carImage?.data?.attributes
                                      ?.url
                                  )
                                }
                                className={`box ${item?.attributes?.carName === selectedCarModel
                                  ? "active"
                                  : ""
                                  }`}
                              >
                                <div className="img-container">
                                  {" "}
                                  {/* <img src="Car-modal.svg" /> */}
                                  <img
                                    src={
                                      BASE_URL +
                                      item?.attributes?.carImage?.data?.attributes
                                        ?.url
                                    }
                                  />
                                </div>
                                <div className="modal-name">
                                  {item?.attributes?.carName}
                                </div>
                              </div>
                            ))}
                          </>
                        ) : (
                          <>
                            <h1
                              className="no-data-font"
                              style={{
                                gridColumn: "1/5",
                                display: "block",
                                textAlign: "center",
                                color: "grey",
                                fontSize: "20px"
                                // position: "absolute",
                                // left: "25%",
                                // top: "50%",
                                // color: "grey",
                              }}
                            >
                              Oops! No Data
                            </h1>
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </Model>
            )}
            {openVariantModal && (
              <Model setOpenModel={setOpenVariantModal}>
                <div className="variant-modal-container">
                  <div className="variant-modal-header">
                    <img src="/back-arrow.svg" onClick={handleVariantModal} />
                    <h2 className="title">Select the variant of your car</h2>
                  </div>
                  {carTransmission && carTransmission.length > 0 ? <>
                    <div style={{ marginBottom: "10px", position: "relative" }}>
                      <input
                        style={{ display: "block", width: "100%", padding: "10px", borderRadius: "5px", marginTop: "10px", border: "1px solid blue", outline: "none" }}
                        type="text"
                        className="search-div"
                        value={searchVarient}
                        placeholder="Search Your Variant..."
                        onChange={(e) => handleSearchVarient(e)}
                      />
                      {searchVarient ? <><span onClick={handleSearchVarientText} style={{ position: "absolute", top: "25%", right: "5px", cursor: "pointer" }}><RxCross2 style={{ fontSize: "20px" }} /></span></> : <></>}
                    </div>
                  </> : <></>}
                  <div className="variant-modal-body">
                    {/* <div className="section-1">
                    <div
                      onClick={() => setFuelType("Petrol")}
                      className={getBoxClass("Petrol")}
                    >
                      <div className="img-container-1">
                        <img src="petrol-icon.svg" />
                      </div>
                      <div className="modal-name">Petrol</div>
                    </div>
                    <div
                      onClick={() => setFuelType("Diesel")}
                      className={getBoxClass("Diesel")}
                    >
                      <div className="img-container-1">
                        <img src="diesel-icon.svg" />
                      </div>
                      <div className="modal-name">Diesel</div>
                    </div>
                    <div
                      onClick={() => setFuelType("CNG")}
                      className={getBoxClass("CNG")}
                    >
                      <div className="img-container-1">
                        {" "}
                        <img src="cng-icon.svg" />
                      </div>
                      <div className="modal-name">CNG</div>
                    </div>
                  </div>
                  <div className="div-variant">SELECT VARIANT</div>
                  <div className="section-2">
                    <div
                      onClick={() => setTransmissionType("Manual")}
                      className={getBoxClassTransmission("Manual")}
                    >
                      <div className="img-container-2">
                        {" "}
                        <img src="manual.svg" />
                      </div>
                      <div className="modal-name">Manual</div>
                    </div>
                    <div
                      onClick={() => setTransmissionType("Automatic")}
                      className={getBoxClassTransmission("Automatic")}
                    >
                      <div className="img-container-2">
                        <img src="automatic.svg" />
                      </div>
                      <div className="modal-name">Automatic</div>
                    </div>
                  </div> */}
                    {calculatorLoader ? <>
                      <div
                        style={{
                          display: "block",
                          gridColumn: "1/5",
                          textAlign: "center"
                        }}
                      // className="loader-div"
                      >
                        <img
                          className="img-loader"
                          src="/spinner-loader.svg"
                        />
                      </div>
                    </> : <>
                      <div className="section-3">
                        <div className="section-3">
                          {filteredCarVarient.length > 0 ? <>
                            {filteredCarVarient.map((item) => (
                              <>
                                <div
                                  onClick={() => handleModelName(item?.model)}
                                  className={`models-div ${item?.model === selectedCarModelName
                                    ? "active"
                                    : ""
                                    }`}
                                  key={item?.id}
                                >
                                  {item?.model}
                                </div>
                              </>
                            ))}
                          </> : <>
                            <h1
                              className="no-data-font"
                              style={{
                                gridColumn: "1/5",
                                display: "block",
                                textAlign: "center",
                                color: "grey",
                                fontSize: "20px"
                                // position: "absolute",
                                // left: "25%",
                                // top: "50%",
                                // color: "grey",
                              }}
                            >
                              Oops! No Data
                            </h1>
                          </>}
                        </div>
                      </div>
                    </>}

                  </div>
                </div>
              </Model>
            )}
          </div>
        </>
      )}
    </>
  );
}
