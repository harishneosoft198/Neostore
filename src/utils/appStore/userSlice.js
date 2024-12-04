import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{usersData:null,userLoggedIn:false,loggedInUserDetails:null},
    reducers:{
        addUser:(state,action)=>{
            state.userLoggedIn = true;
            state.loggedInUserDetails = action.payload;
        },
        removeUser:(state,action)=>{
            state.userLoggedIn = false;
            state.loggedInUserDetails = null;
        },
        getUser:(state,action)=>{
            state.usersData = action.payload;
        }
    }
});

export const{addUser,removeUser,getUser} = userSlice.actions;
export default userSlice.reducer;