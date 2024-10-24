import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IReducerInit<T, D> {
  isFetching: boolean;
  data?: D;
  where?: T;
  limit?: number;
  offset?: number;
}

const initialState = {
  isFetching: false,
  data: [],
  where: {},
  limit: 10,
  offset: 0,
};

export const postSlice = createSlice({
  name: "globalDate",
  initialState,
  reducers: {
    setPost: <T, D>(
      state: IReducerInit<T, D>,
      action: PayloadAction<IReducerInit<T, D>>
    ) => {
      state.data = action.payload.data;
      state.isFetching = action.payload.isFetching;
      state.limit = action.payload.limit;
      state.offset = action.payload.offset;
      state.where = action.payload.where;
    },
    clearPost: <T, D>(state: IReducerInit<T, D>) => {
      state.data = initialState.data as D;
      state.isFetching = initialState.isFetching;
      state.limit = initialState.limit;
      state.offset = initialState.offset;
      state.where = initialState.where as T;
    },
  },
});

export const { setPost, clearPost } = postSlice.actions;

export default postSlice.reducer;
