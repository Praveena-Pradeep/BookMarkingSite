import { configureStore } from '@reduxjs/toolkit';
import bookmarkReducer from './bookmarkSlice';
import authReducer from './authSlice'; // If you have an auth slice as well

const store = configureStore({
    reducer: {
        bookmarks: bookmarkReducer,
        auth: authReducer,
    },
});

export default store;
