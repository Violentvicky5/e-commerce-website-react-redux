import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setSearchQuery, setSortAsc, setSortDsc, setProducts } =
  searchSlice.actions;
export default searchSlice.reducer;
