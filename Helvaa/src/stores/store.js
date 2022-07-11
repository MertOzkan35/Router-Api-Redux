import { configureStore } from "@reduxjs/toolkit";
import siteReducer from "../stores/site";
export default configureStore({
  reducer: {
    site: siteReducer,
  },
});
