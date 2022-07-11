import { createSlice } from "@reduxjs/toolkit";

export const site = createSlice({
  name: "site",
  initialState: {
    dark: false,
  },
  reducers: {
    setDarkMode: (state) => {
      state.dark = !state.dark;
    },
  },
});

export const { setDarkMode } = site.actions;
export default site.reducer;
