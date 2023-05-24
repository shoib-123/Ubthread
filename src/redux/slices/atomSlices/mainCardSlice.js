import { createSlice } from "@reduxjs/toolkit";

const mainCardSlice = createSlice({
  name: "error",
  initialState: {
    pageNumber: 1,
  },
  reducers: {
    setPage(state, action) {
      return { ...state, pageNumber: action.payload };
    },
  },
});

export default mainCardSlice.reducer;

export const { setPage } = mainCardSlice.actions;
