import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    destination: []
}

const bookmarksSlice = createSlice({
    name: 'bookmarks',
    initialState,
    reducers: {
        addBookmarks: (state, action) => {
            
        },
        removeBookmarks: (state, action) => {

        }
    }
})

export const { addBookmarks, removeBookmarks } = bookmarksSlice.actions;
export const userBookmarks = (state) => state.bookmarks.destination;

export default userBookmarks.reducer;