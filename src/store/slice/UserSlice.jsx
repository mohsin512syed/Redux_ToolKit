import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name : "user",
    initialState:[],
    reducers:{
        addUser(state , action){
            state.push(action.payload);
        },
        removeUser(){},
        deleteUser(){},
    }
})
export default userSlice;
export const {addUser}=userSlice.actions;