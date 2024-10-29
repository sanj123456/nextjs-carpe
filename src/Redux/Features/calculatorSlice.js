import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import makeRequest from "../../Services/makeRequest";
// const baseURL = process.env.NEXT_PUBLIC_API_URL;
// process.env.NODE_ENV == "development" ? process.env.REACT_APP_DEV_BACKEND_URL : process.env.REACT_APP_PROD_BACKEND_URL;

const initialState = {
  loader: false,
  cars: [],
  brandList: [],
  carList: [],
  carRestDetails:[],
  carRestDetailswithYear:[],
  finalCarDetails:[],
  carGetAllDetails:[],
  carGetCalculatorResult:[],
  carGetAllDetailsTopup:[],
  carGetCalculatorTopupResult:[]
};

export const CalculatorAPI = createAsyncThunk(
  "api/calculatorAPI",
  async (thunkAPI) => {
    try {
      const response = await makeRequest(
        "get",
        `api/brands?populate=*`,
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
export const ManufacturingYears = createAsyncThunk(
  "api/manufacturingyears",
  async ({ car_brand, car_model },thunkAPI) => {
    // console.log(car_brand,car_model,"carmodelllll")
    try {
      const response = await makeRequest(
        "get",
        `api/all-cars-data?filters[brand][brandName][$eq]=${car_brand}&filters[carName][$eq]=${car_model}&populate[0]=variants.manufacturingYear`,
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

export const getCarBrandDetails = createAsyncThunk(
  "api/all-cars-data",
  async ({ car_brand }, thunkAPI) => {
    // console.log(car_brand, "carbranddddd");
    // console.log(
    //   `api/all-cars-data?filters[brand][brandName][$eq]=${car_brand}`,
    // );
    try {
      const response = await makeRequest(
        "get",
        `api/all-cars-data?filters[brand][brandName][$eq]=${car_brand}&populate=*`
        // `employees?page=${page_index}&limit=${page_size}` +
        //   (positionId ? `&positionId=${positionId}` : "") +
        //   (employmentTypeId ? `&employmentTypeId=${employmentTypeId}` : "") +
        //   (employeeTypeId ? `&employeeTypeId=${employeeTypeId}` : ""),
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response); // Reject with an error message
    }
  }
);
export const getCarRestDetails = createAsyncThunk(
  "api/all-rest-details",
  async ({ car_brand, car_variant }, thunkAPI) => {
    // console.log(car_brand, car_variant, "carbranddddd");
    try {
      const response = await makeRequest(
        "get",
        // `/api/all-cars-data?filters[brand][$eq]=${car_brand}&populate=*`,
        `api/all-cars-data?filters[brand][brandName][$eq]=${car_brand}&filters[carName][$eq]=${car_variant}&populate[0]=variants&populate[1]=variants.model`
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response); // Reject with an error message
    }
  }
);
export const getCarCalculatorResult = createAsyncThunk(
  "api/get-car-calculator-result",
  async ( search, thunkAPI) => {
    try {
      const response = await makeRequest(
        "get",
        `api/calculators/${search}`
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response); // Reject with an error message
    }
  }
);
export const getCarCalculatorResultTopup = createAsyncThunk(
  "api/get-car-calculator-topup-result",
  async ( search, thunkAPI) => {
    try {
      const response = await makeRequest(
        "get",
        `api/emis/${search}`
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response); // Reject with an error message
    }
  }
);
export const getCarRestDetailswithYear = createAsyncThunk(
  "api/all-rest-details-with-year",
  async ({ car_brand, car_variant  }, thunkAPI) => {
    // console.log(car_brand,car_variant,"hello")
    try {
      const response = await makeRequest(
        "get",
        `api/all-cars-data?filters[brand][brandName][$eq]=${car_brand}&filters[carName][$eq]=${car_variant}&populate[0]=variants&populate[1]=variants.model`
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response); // Reject with an error message
    }
  }
);

export const postAllDetails = createAsyncThunk(
  "/api/post-all-details",
  async (data, thunkAPI) => {
      // console.log("data >", data)
      try {
          const response = await makeRequest(
              "post",
              "api/calculators",
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
export const postAllTopupDetails = createAsyncThunk(
  "/api/post-all-top-up-details",
  async (data, thunkAPI) => {
      // console.log("data >", data)
      try {
          const response = await makeRequest(
              "post",
              "api/emis",
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

const calculatorSlice = createSlice({
  name: "calculatorSlice",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(CalculatorAPI.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(CalculatorAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload.data;
        //   state.PaginationTotalPages = action.payload.data.pagination.totalPages;
      })
      .addCase(CalculatorAPI.rejected, (state, action) => {
        state.loading = false;
      });
    builder
      .addCase(ManufacturingYears.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(ManufacturingYears.fulfilled, (state, action) => {
        state.loading = false;
        state.years = action.payload.data;
        //   state.PaginationTotalPages = action.payload.data.pagination.totalPages;
      })
      .addCase(ManufacturingYears.rejected, (state, action) => {
        state.loading = false;
      });

    builder
      .addCase(getCarBrandDetails.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getCarBrandDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.brandList = action.payload.data;
        // state.carList = action.payload.data;
        // state.PaginationTotalPages = action.payload.data.pagination.totalPages;
      })
      .addCase(getCarBrandDetails.rejected, (state, action) => {
        state.loading = false;
      });

    builder
      .addCase(getCarRestDetails.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getCarRestDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.carRestDetails = action.payload.data;
        // state.carList = action.payload.data;
        // state.PaginationTotalPages = action.payload.data.pagination.totalPages;
      })
      .addCase(getCarRestDetails.rejected, (state, action) => {
        state.loading = false;
      });
    builder
      .addCase(getCarCalculatorResult.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getCarCalculatorResult.fulfilled, (state, action) => {
        state.loading = false;
        state.carGetCalculatorResult = action.payload.data;
        // state.carList = action.payload.data;
        // state.PaginationTotalPages = action.payload.data.pagination.totalPages;
      })
      .addCase(getCarCalculatorResult.rejected, (state, action) => {
        state.loading = false;
      });
    builder
      .addCase(getCarCalculatorResultTopup.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getCarCalculatorResultTopup.fulfilled, (state, action) => {
        state.loading = false;
        state.carGetCalculatorTopupResult = action.payload.data;
        // state.carList = action.payload.data;
        // state.PaginationTotalPages = action.payload.data.pagination.totalPages;
      })
      .addCase(getCarCalculatorResultTopup.rejected, (state, action) => {
        state.loading = false;
      });
    builder
      .addCase(getCarRestDetailswithYear.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getCarRestDetailswithYear.fulfilled, (state, action) => {
        state.loading = false;
        state.carRestDetailswithYear = action.payload.data;
        // state.carList = action.payload.data;
        // state.PaginationTotalPages = action.payload.data.pagination.totalPages;
      })
      .addCase(getCarRestDetailswithYear.rejected, (state, action) => {
        state.loading = false;
      });
    builder
      .addCase(postAllDetails.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(postAllDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.carGetAllDetails = action.payload.data;
        // state.carList = action.payload.data;
        // state.PaginationTotalPages = action.payload.data.pagination.totalPages;
      })
      .addCase(postAllDetails.rejected, (state, action) => {
        state.loading = false;
      });
    builder
      .addCase(postAllTopupDetails.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(postAllTopupDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.carGetAllDetailsTopup = action.payload.data;
        // state.carList = action.payload.data;
        // state.PaginationTotalPages = action.payload.data.pagination.totalPages;
      })
      .addCase(postAllTopupDetails.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default calculatorSlice.reducer;
