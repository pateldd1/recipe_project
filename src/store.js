import { configureStore } from "@reduxjs/toolkit";
import bookmarkSlice from "./bookmarkSlice";

export default configureStore({
  reducer: {
    bookmarks: bookmarkSlice,
  },
});
