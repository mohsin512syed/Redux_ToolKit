import { createSlice } from "@reduxjs/toolkit"

const UserSlice = createSlice({
    user :" name",
    initialState:[],
    reducers:{
        addUser(){},
        removeUser(){},
        deleteUser(){},
    }
})
export {UserSlice}