import IUser from "../models/common/IUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
    users: IUser[];
}

const initialState: AppState = {
    users: [],
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
      setUsers: (state, action: PayloadAction<IUser[]>) => {
        state.users = action.payload;
      },
    },
});

export const { setUsers } = userSlice.actions;
export default userSlice.reducer;