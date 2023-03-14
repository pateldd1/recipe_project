import { createSlice } from "@reduxjs/toolkit";

export const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => void state.value.push(action.payload),
    remove: (state, action) =>
      void (state.value = state.value.filter(
        (item) => item.idMeal !== action.payload.idMeal
      )),
  },
});

export const { add, remove } = bookmarkSlice.actions;
export const selectBookmarks = (state) => state.bookmarks.value;
export default bookmarkSlice.reducer;
