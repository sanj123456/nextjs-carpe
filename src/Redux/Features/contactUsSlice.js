import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import makeRequest from "../../Services/makeRequest";
// const baseURL = process.env.NEXT_PUBLIC_API_URL;
// process.env.NODE_ENV == "development" ? process.env.REACT_APP_DEV_BACKEND_URL : process.env.REACT_APP_PROD_BACKEND_URL;

const initialState = {
    loading: false
};

export const ContactUsSendEmail = createAsyncThunk(
    "api/contactus",
    async (data, thunkAPI) => {
        // console.log("data >", data)
        try {
            const response = await makeRequest(
                "post",
                "api/contact-us",
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

const contactUsSlice = createSlice({
    name: "contactUs",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(ContactUsSendEmail.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(ContactUsSendEmail.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(ContactUsSendEmail.rejected, (state, action) => {
                state.loading = false;
            });
    },
});

export default contactUsSlice.reducer;
