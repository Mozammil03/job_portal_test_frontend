import { createSlice } from "@reduxjs/toolkit";
import { getItem, removeItem, setItem } from "../services/LocalStorageService";

const initialState = getItem("user") || { user: null };

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            setItem("user", { user: action.payload });
            return { user: action.payload };
        },
        removeUser: (state) => {
            removeItem("user");
            return { user: null };
        },
    }
});

export const { setUser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;