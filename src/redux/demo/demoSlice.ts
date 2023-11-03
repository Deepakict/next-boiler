import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface authState {
  demoData: [];
  isLoading: Boolean;
  error: any;
}

const initialState: authState = {
  demoData: [],
  isLoading: false,
  error: undefined,
};

export const demoSlice = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    getDemo(state: any, action: PayloadAction<any>) {
      state.isLoading = true;
    },
    setDemo(state: any, action: PayloadAction<any>) {
      state.demoData = action.payload;
    },
    demoDataFailure(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {getDemo, setDemo, demoDataFailure} = demoSlice.actions;
export const demoReducer = demoSlice.reducer;

export type DemoActions =
  | ReturnType<typeof getDemo>
  | ReturnType<typeof setDemo>
  | ReturnType<typeof demoDataFailure>;
