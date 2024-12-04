import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name:'home',
    initialState:{topbBanner:null,trending:null},
    reducers:{
        getTopBanner:(state,action)=>{
            state.topbBanner = action.payload;
        },
        getTrending:(state,action)=>{
            state.trending =action.payload;
        }
    }
})

export const {getTopBanner,getTrending} = homeSlice.actions;
export default homeSlice.reducer;