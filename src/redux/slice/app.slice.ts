import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SliceName } from "@/redux/constant";

interface AppState {
  isLoading: boolean;
}

const initialState: AppState = {
  isLoading: false
};
const appSlice = createSlice({
  name: SliceName.APP,
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    }
  },
  extraReducers: (builder) => {
  }
});
export const { setLoading } = appSlice.actions;
export const appReducer = appSlice.reducer;
