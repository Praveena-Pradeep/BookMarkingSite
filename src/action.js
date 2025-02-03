// src/actions.js
export const updateValue = (newValue) => {
    return {
      type: 'UPDATE_VALUE', // Action type
      payload: newValue,     // New value to update the state
    };
  };
  