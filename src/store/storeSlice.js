import { createSlice } from '@reduxjs/toolkit'

const initialStore={
    AddCart: 0,
    AddItems:[],
    isLogin: false,
    AdminData: [],
    ShowUserRegisterForm: false,
    ShowUserLogin: false,
    ShowAdmin_and_User: false,
    ShowAdminLogin: false,
    ShowAdminRagister: false,
    ShowAddForm: false,
    ShowItems: false,
    email:"",
    authToken: ""
}

const storeSlice=createSlice({
    name:"storeVal",
    initialState:initialStore,
    reducers:{
        UserLogin(state, action){
            state.email=action.payload.email;
            state.authToken=action.payload.authToken;
            state.isLogin=true;
        },
        UserLogout(state,action){
           state.isLogin=false;
           state.ShowAddForm=false;
           localStorage.removeItem("email");
           localStorage.removeItem("authToken");
        },
        ShowAdmin_and_User(state,action){
           state.ShowAdmin_and_User=true;
        },
        NotShowAdmin_and_User(state,action){
            state.ShowAdmin_and_User=false;
         },

        CancelUserLogin(state,action){
           state.ShowUserLogin=false;
        },
        ShowUserLogin(state,action){
            state.ShowUserLogin=true;
        },
        ShowUserRagister(state,action){
            state.isLogin=true;
         },
        CancelUserRagister(state,action){
            state.ShowUserRegisterForm=false;
        },
        ShowUserRegisterForm(state,action){
           state.ShowUserRegisterForm=true;
        },
        ShowAdminLogin(state,action){
            state.ShowAdminLogin=true;
        },
        ShowAdminRagister(state,action){
            state.ShowAdminRagister=true;
        },
        CancelAdminLogin(state,action){
           state.ShowAdminLogin=false;
        },
        CancelAdminRagister(state,action){
           state.ShowAdminRagister=false;
        },
        AdminLoginData(state,action){
            state.AdminData=action.payload;
        },
        ShowAddForm(state,action){
            state.ShowAddForm=true;
        },
        NotShowAddForm(state,action){
           state.ShowAddForm=false;
        },
        ShowItems(state,action){
            state.ShowItems=true;
        },
        AddItems(state,action){
            state.AddItems=action.payload;
        },
        AddCart(state,action){
            state.AddCart=action.payload;
        }

    }
})

export const storeAction=storeSlice.actions;

export default storeSlice.reducer;