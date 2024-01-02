import { combineReducers } from "redux";
import userReducer from "./slices/userSlice";
import bookmarksReducer from "./slices/bookmarksSlice";

const Reducer = combineReducers(
    {
        users: userReducer,
        bookmarks: bookmarksReducer,
    }
);

export default Reducer;