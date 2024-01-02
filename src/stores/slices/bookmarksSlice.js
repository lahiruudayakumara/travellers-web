import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    destination: []
}

const bookmarksSlice = createSlice({
    name: 'bookmarks',
    initialState,
    reducers: {
        addBookmarks: (state, action) => {
            return { destination: [...state.destination, {...action.payload, amount: 1,}]}           
        },
        removeBookmarks: (state, action) => {
            const bookmarkToRemove = action.payload; // Assuming payload contains the bookmark to be removed
            return { destination: state.destination.filter(bookmark => bookmark.id !== bookmarkToRemove.id) };
        }
    }
})

export const userBookmarks = state => state.bookmarks.destination;
export const { addBookmarks, removeBookmarks } = bookmarksSlice.actions;

export default bookmarksSlice.reducer;
