// Select the message from the store
export const selectMessage = (state) => state.greetings.message;

// Get the status
export const isLoading = (state) => state.greetings.status.type === 'loading';
