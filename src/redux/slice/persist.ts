import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";
interface IPersistState {
  user: {
    IsLoggedIn: null | boolean;
  };
}
const initialState: IPersistState = {
  user: { IsLoggedIn: null },
};

const slice = createSlice({
  name: "persist",
  initialState,
  reducers: {
    // SET APPOINTMENT DETAILS STATES
    setUser(state, action) {
      const { value } = action.payload;
      state.user.IsLoggedIn = value;
    },
  },
});

// Reducer
export default slice.reducer;

export const { actions } = slice;

export function setUserState(value: boolean) {
  return async () => {
    dispatch(slice.actions.setUser({ value: value }));
  };
}

// export function setLoggedOut(value) {
//   return async () => {
//     dispatch(slice.actions.setUser({ value: false }));
//   };
// }
