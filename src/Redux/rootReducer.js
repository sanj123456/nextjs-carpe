import { combineReducers } from "@reduxjs/toolkit";
// import authSlice from "./modules/authSlice";
// import employeeSlice from "./modules/admin/employeeSlice";
import contactUsSlice from "./Features/contactUsSlice"
import inquiryModelSlice from "./Features/inquiryModelSlice"
import calculatorSlice from "./Features/calculatorSlice";
import faqSlice from "./Features/faqSlice";

const rootReducer = combineReducers({
    contactUs: contactUsSlice,
    inquiryModel: inquiryModelSlice,
    calculator: calculatorSlice,
    faq:faqSlice
});

export default rootReducer;
