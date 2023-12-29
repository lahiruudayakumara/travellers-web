import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: localStorage.getItem('user'),
    isAuthenticated: Boolean(localStorage.getItem('user'))
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            // Corrected line to set item in local storage
            localStorage.setItem('user', action.payload);
        }
    }
})

export const { loginUser } = userSlice.actions;
export const selectUser = (state) => state.users.user;
export const selectIsAuthenticated = (state) => state.users.isAuthenticated;

export default userSlice.reducer;
