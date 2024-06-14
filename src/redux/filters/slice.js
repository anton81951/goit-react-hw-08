import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: "",
    number: "",
  },
  reducers: {
    setFilterName(state, action) {
      state.name = action.payload;
    },
    setFilterNumber(state, action) {
      state.number = action.payload;
    },
  },
});

export const { setFilterName, setFilterNumber } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;