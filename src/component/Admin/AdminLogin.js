import React, { useRef } from 'react'
import "../Admin/AdminLogin.css";
import { useDispatch, useSelector } from 'react-redux';
import { storeAction } from '../../store/storeSlice';
import { useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import { toast } from 'react-toastify';


const AdminLogin = () => {
  const usernameRef=useRef()
  const passwordRef=useRef();
  const navigate=useNavigate();

  const ShowAdminLogin=useSelector((state)=>state.storeVal.ShowAdminLogin);

  const dispatch=useDispatch();

     const CancelHandler=()=>{
        dispatch(storeAction.CancelAdminLogin())
        dispatch(storeAction.NotShowAdmin_and_User());
     }
     const LoginHandler=async(e)=>{
       e.preventDefault();
       const Obj={
         email: usernameRef.current.value,
         password: passwordRef.current.value,
         returnSecureToken:true
       }
       try{
         const response=await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCTiT42FINsFU9Opem_Nn8uG1T6rtRiXiQ",{
           method:"POST",
           body: JSON.stringify(Obj),
           headers:{"Content-Type":"application/json"}
         })
         const data=await response.json();
         if(!response.ok){
           throw new Error("try Again");
         }
         console.log("loginData",data);
         dispatch(storeAction.AdminLoginData(data))
         toast.success('sucessful login', {
          position: 'top-center',
          autoClose: 3000,
        });
         dispatch(storeAction.CancelAdminLogin())
         dispatch(storeAction.NotShowAdmin_and_User());
         dispatch(storeAction.ShowAddForm());
         navigate("/");
       }catch(error){
        toast.error(`Error: ${error.message}`, {
          position: 'top-center',
          autoClose: 3000,
        });
       }
      }
        
     const RagisterFormOpen=()=>{
        dispatch(storeAction.ShowAdminRagister())
        dispatch(storeAction.CancelAdminLogin());
     }
    
  return (
    <div>
        {ShowAdminLogin ? <div className="login-container">
        <span className='LoginCancleBtn' onClick={CancelHandler}><ClearIcon fontSize='large'/></span>
  <div className="login-content">
    <img className="login-Image" src="https://www.jiomart.com/images/product/original/rvlszfsuqv/paper-boat-premium-smoked-and-roasted-nuts-with-himalayan-pink-salt-1kg-product-images-orvlszfsuqv-p594397657-6-202210110831.jpg?im=Resize=(1000,1000)" alt='login-pic'/>
    <form className="login-form" action="/login" method="post">
      <img className='LoginLogo' src='https://www.paperboatfoods.com/cdn/shop/files/MicrosoftTeams-image_7_150x.png?v=1699348334' alt='logo'/>
      <h2>Admin Login</h2><br/>
      <div className="form-group">
        <label className='login-label-name'><b>Username</b></label><br/>
        <input type="text" ref={usernameRef} placeholder="username.." required/>
      </div>
      <div className="form-group">
        <label className='login-label-password'><b>Password</b></label><br/>
        <input type="password" ref={passwordRef} placeholder="password.." required/>
      </div>
      <button type="submit" className="login-btn" onClick={LoginHandler}><b>Login</b></button><br/><br/>
      <p>Don't have an account? &nbsp; <a onClick={RagisterFormOpen}>Sign_up</a></p>
    </form>
  </div>
</div> : null}
    </div>
  )
}

export default AdminLogin;