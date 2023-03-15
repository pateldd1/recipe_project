import { configureStore } from "@reduxjs/toolkit";
import bookmarks from "./reducers/bookmarks";

export default configureStore({
  reducer: {
    bookmarks,
  },
});
