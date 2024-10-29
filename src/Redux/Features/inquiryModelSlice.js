import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isInquiryModelOpen:false
};
const inquiryModelSlice = createSlice({
  name: "inquiryModelContex",
  initialState,
  reducers: {
    closeInquiryModel: (state, action) => {
      state.isInquiryModelOpen = false;
    },
    openInquiryModel: (state, action) => {
      state.isInquiryModelOpen = true;
    },
    toggleInquiryModel: (state, action) => {
      state.isInquiryModelOpen = !state.isInquiryModelOpen;
    },
  },
});

export const { closeInquiryModel, openInquiryModel, toggleInquiryModel } =
  inquiryModelSlice.actions;
export default inquiryModelSlice.reducer;

