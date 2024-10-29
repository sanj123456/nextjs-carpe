import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import makeRequest from "../../Services/makeRequest";
// const baseURL = process.env.NEXT_PUBLIC_API_URL;
// process.env.NODE_ENV == "development" ? process.env.REACT_APP_DEV_BACKEND_URL : process.env.REACT_APP_PROD_BACKEND_URL;

const initialState = {
  loader: false,
  faq:[]
};

export const faqAPI = createAsyncThunk(
  "api/faqAPI",
  async (thunkAPI) => {
    try {
      const response = await makeRequest(
        "get",
        `api/faqs?populate=*`,
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


const faqSlice = createSlice({
  name: "faqSlice",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(faqAPI.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(faqAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.faq = action.payload.data;
      })
      .addCase(faqAPI.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default faqSlice.reducer;
