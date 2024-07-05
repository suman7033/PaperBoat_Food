import React, { useRef } from 'react'
import '../User/UserRagister.css'
import { storeAction } from '../../store/storeSlice';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import { toast } from 'react-toastify';



const AdminRagister = () => {
  const dispatch=useDispatch()
  const nameRef=useRef();
  const usernameRef=useRef();
  const passwordRef=useRef();
  const navigate=useNavigate();

  const RagisterHandler=async(e)=>{
     e.preventDefault();
     const name=nameRef.current.value;
     localStorage.setItem("name",name);

     const obj={
      email:usernameRef.current.value,
      password:passwordRef.current.value,
      returnSecureToken: true
     }
     
      try{
        const response=await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCTiT42FINsFU9Opem_Nn8uG1T6rtRiXiQ",{
          method: "POST",
          body: JSON.stringify(obj),
          headers:{
             "Content-Type": "application/json"
          }
        });
        const data=await response.json();
        if(!response.ok){
           throw new Error(data.error.message || "Ragistration failed");
        }
        toast.success('sucessful login', {
          position: 'top-center',
          autoClose: 3000,
        });
        navigate("/");
        if (data.idToken) {
          localStorage.setItem("email", data.email);
          localStorage.setItem('authToken', data.idToken);
          dispatch(storeAction.UserLogin({ email: data.email, authToken: data.idToken }));
        }
        dispatch(storeAction.NotShowAdmin_and_User());
        dispatch(storeAction.CancelAdminLogin());
        dispatch(storeAction.CancelAdminRagister());
        dispatch(storeAction.ShowAddForm());
        
      }catch(error){
        toast.error(`Error: ${error.message}`, {
          position: 'top-center',
          autoClose: 3000,
        });
      }
  }
  const ShowAdminLogin=()=>{
    dispatch(storeAction.ShowAdminLogin())
    dispatch(storeAction.CancelAdminRagister())
  }
  
  const CancelHandler=()=>{
     dispatch(storeAction.CancelAdminRagister())
  }
  return (
        <div>
        <div className="login-container">
        <span className='RegisterCancleBtn' onClick={CancelHandler}><ClearIcon fontSize='large'/></span>
  <div className="login-content">
    <img className="login-Image" src="https://www.jiomart.com/images/product/original/rvlszfsuqv/paper-boat-premium-smoked-and-roasted-nuts-with-himalayan-pink-salt-1kg-product-images-orvlszfsuqv-p594397657-6-202210110831.jpg?im=Resize=(1000,1000)" alt='register-pic'/>
    <form className="login-form">
      <img className='LoginLogo' src='https://www.paperboatfoods.com/cdn/shop/files/MicrosoftTeams-image_7_150x.png?v=1699348334' alt='logo'/>

      <h4>Admin Ragister</h4><br/>
      <div className="form-group">
        <label className='RegisterName'><b>Name</b></label><br/>
        <input type='text' ref={nameRef} placeholder='name..' required/>
        <label className='RegisterUserName'><b>Username</b></label><br/>
        <input className='login-input' type="text" ref={usernameRef} placeholder="username.." required/>
      </div>
      <div className="form-group">
        <label className='RegisterUserPassword'><b>Password</b></label><br/>
        <input type="password" ref={passwordRef} placeholder="password.." required/>
      </div>
      <button onClick={RagisterHandler} className="RegisterBtn"><b>Ragister</b></button>
      <p>If you have an account? &nbsp; <a onClick={ShowAdminLogin}>Login</a></p>
    </form>
  </div>
</div>
    </div>
  )
}

export default AdminRagister;
