import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import makeRequest from "../../utils/makeRequest";
export const baseURL = import.meta.env.VITE_BASE_URL_AUTH;
const initialState = {
  loading: false,
  passwordToken: "",
  capatcha: true,
};

function getDynamicEndpoint(currentPath) {
  switch (currentPath) {
    case "/admin/forgotpassword":
      return "?userType=SchoolAdmin";
    case "/teacher/forgotpassword":
      return "?userType=Teacher";
    case "/student/forgotpassword":
      return "?userType=Student";
    default:
      return ""; // Default endpoint
  }
}
export const loginApi = createAsyncThunk(
  "auth/login",
  async ({ userData, currentPath }, thunkAPI) => {
    let endpoint = "login";
    switch (currentPath) {
      case "/admin/login":
        endpoint += "?userType=SchoolAdmin";
        break;
      case "/teacher/login":
        endpoint += "?userType=Teacher";
        break;
      case "/student/login":
        endpoint += "?userType=Student";
        break;
      default:
        endpoint += "";
        break;
    }
    try {
      const response = await makeRequest(baseURL, "post", endpoint, userData, {
        "Content-Type": "application/json",
      });
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response); // Reject with an error message
    }
  }
);

export const ForgetPasswordSendEmail = createAsyncThunk(
  "auth/forgetpasswordsendemail",
  async ({ data, currentPath }, thunkAPI) => {
    const endpoint = getDynamicEndpoint(currentPath);

    try {
      const response = await makeRequest(
        baseURL,
        "post",
        "forgot-password-request" + endpoint,
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

export const VerifyOtpForgetPassword = createAsyncThunk(
  "auth/VerifyOtpForgetPassword",
  async ({ data, currentPath, config }, thunkAPI) => {
    const endpoint = getDynamicEndpoint(currentPath);

    try {
      const response = await makeRequest(
        baseURL,
        "post",
        "forgot-password-verify-otp" + endpoint,
        data,
        config
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response); // Reject with an error message
    }
  }
);

export const ResetPassword = createAsyncThunk(
  "auth/ResetPassword",
  async ({ data, currentPath, config }, thunkAPI) => {
    const endpoint = getDynamicEndpoint(currentPath);
    try {
      const response = await makeRequest(
        baseURL,
        "post",
        "forgot-password-reset-password" + endpoint,
        data,
        config
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response); // Reject with an error message
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearMsg: (state) => {
      state.msg = "";
    },
  },
  extraReducers(builder) {
    builder
      //login async logic
      .addCase(loginApi.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginApi.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(loginApi.rejected, (state, action) => {
        state.loading = false;
        state.capatcha = false;
      });

    builder
      .addCase(ForgetPasswordSendEmail.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(ForgetPasswordSendEmail.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(ForgetPasswordSendEmail.rejected, (state, action) => {
        state.loading = false;
      });

    builder
      .addCase(VerifyOtpForgetPassword.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(VerifyOtpForgetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.passwordToken = action.payload?.data?.passwordResetRequestId;
      })
      .addCase(VerifyOtpForgetPassword.rejected, (state, action) => {
        state.loading = false;
      });

    builder
      .addCase(ResetPassword.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(ResetPassword.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(ResetPassword.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default authSlice.reducer;
