import { createSlice } from '@reduxjs/toolkit';

const bookmarkSlice = createSlice({
    name: 'bookmarks',
    initialState: [], // Ensure this is an empty array
    reducers: {
        addBookmark: (state, action) => {
            state.push(action.payload);
        },
        removeBookmark: (state, action) => {
            return state.filter(bookmark => bookmark.id !== action.payload);
        },
        editBookmark: (state, action) => {
            const index = state.findIndex(bookmark => bookmark.id === action.payload.id);
            if (index !== -1) {
                // Update the existing bookmark
                state[index] = {
                    ...state[index],
                    title: action.payload.title,
                    url: action.payload.url,
                };
            }
        },
    },
});

// Export actions
export const { addBookmark, removeBookmark, editBookmark } = bookmarkSlice.actions;

// Export reducer
export default bookmarkSlice.reducer;
