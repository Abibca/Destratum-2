import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    data: {
        name: '',
        phoneNumber: '',
        address:'',
    }
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        storedData :(state,actions) => {
            state.data = actions.payload
        }
    },
});

export const { storedData } = counterSlice.actions;
export default counterSlice.reducer;
