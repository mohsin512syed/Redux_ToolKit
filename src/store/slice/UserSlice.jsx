import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name : "user",
    initialState:[],
    reducers:{
        addUser(){},
        removeUser(){},
        deleteUser(){},
    }
})
export default userSlice;