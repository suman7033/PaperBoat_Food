import { createSlice } from '@reduxjs/toolkit'

const initialStore={
    cartItems:[],
    isLogin: false,
}

const storeSlice=createSlice({
    name:"storeVal",
    initialState:initialStore,
    reducers:{
        login(state, action){
            //state.isLogin=true;
        },
        ShowLogin(state,action){
            if(state.isLogin==true){
                state.isLogin=false;
            }else{
                state.isLogin=true;
            }
            //state.isLogin=true;
            
        }
    }
})

export const storeAction=storeSlice.actions;

export default storeSlice.reducer;