import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import makeRequest from "../../Services/makeRequest";
// const baseURL = process.env.NEXT_PUBLIC_API_URL;
// process.env.NODE_ENV == "development" ? process.env.REACT_APP_DEV_BACKEND_URL : process.env.REACT_APP_PROD_BACKEND_URL;

const initialState = {
    loading: false
};

export const InquiryNowSendEmail = createAsyncThunk(
    "/api/loan-inquiry-forms",
    async (data, thunkAPI) => {
        // console.log("data >", data)
        try {
            const response = await makeRequest(
                "post",
                "/api/loan-inquiry-forms",
                data,
                {
                    "Content-Type": "application/json",
                }
            );
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response); // Reject with an error message
        }
    }
);

const InquiryNowSlice = createSlice({
    name: "InquiryNow",
    initialState,
    reducers: {
        clearMsg: (state) => {
            state.msg = "";
        },
    },
    extraReducers(builder) {
        builder
            .addCase(InquiryNowSendEmail.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(InquiryNowSendEmail.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(InquiryNowSendEmail.rejected, (state, action) => {
                state.loading = false;
            });
    },
});

export default InquiryNowSlice.reducer;
