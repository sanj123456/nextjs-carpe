import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title:""
};
const commonSlice = createSlice({
  name: 'pageContext',
  initialState, 
  reducers: {
    setPageTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const { setPageTitle} = commonSlice.actions;
export default commonSlice.reducer;

