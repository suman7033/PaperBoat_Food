import React, { useRef } from 'react';
import "../User/UserLogin.css";  // Reuse the same CSS for consistency
import { storeAction } from '../../store/storeSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import { toast } from 'react-toastify';

const UserRagister = () => {
  const nameRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const RagisterHandler = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    localStorage.setItem("name", name);

    const obj = {
      email: usernameRef.current.value,
      password: passwordRef.current.value,
      returnSecureToken: true
    }

    try {
      const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCTiT42FINsFU9Opem_Nn8uG1T6rtRiXiQ", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error.message || "Registration failed");
      }

      toast.success('Successful Register', {
        position: 'top-center',
        autoClose: 3000,
      });
      navigate("/");
      dispatch(storeAction.NotShowAdmin_and_User());
      dispatch(storeAction.ShowUserRagister());
      dispatch(storeAction.CancelUserLogin());
      dispatch(storeAction.CancelUserRagister());

    } catch (error) {
      toast.error(`Error: ${error.message}`, {
        position: 'top-center',
        autoClose: 3000,
      });
    }
  }
  
  const ShowUserLogin = () => {
    dispatch(storeAction.ShowUserLogin())
    dispatch(storeAction.CancelUserRagister())
  }

  const CancelHandler = () => {
    dispatch(storeAction.CancelUserRagister())
  }

  return (
    <div className="login-container">
      <span className='LoginCancleBtn' onClick={CancelHandler}><ClearIcon fontSize='large' /></span>
      <div className="login-content">
        <img className="login-Image" src="https://www.jiomart.com/images/product/original/rvlszfsuqv/paper-boat-premium-smoked-and-roasted-nuts-with-himalayan-pink-salt-1kg-product-images-orvlszfsuqv-p594397657-6-202210110831.jpg?im=Resize=(1000,1000)" alt='register-pic' />
        <form className="login-form" onSubmit={RagisterHandler}>
          <img className='LoginLogo' src='https://www.paperboatfoods.com/cdn/shop/files/MicrosoftTeams-image_7_150x.png?v=1699348334' alt='register-pic' />
          <h2>User Register</h2>
          <div className="form-group">
            <label className='login-label-name'><b>Name</b></label>
            <input type='text' ref={nameRef} placeholder='Name..' required />
            <label className='login-label-name'><b>Username</b></label>
            <input type="text" ref={usernameRef} placeholder="Username.." required />
          </div>
          <div className="form-group">
            <label className='login-label-password'><b>Password</b></label>
            <input type="password" ref={passwordRef} placeholder="Password.." required />
          </div>
          <button type="submit" className="login-btn"><b>Register</b></button>
          <p>If you have an account? <a onClick={ShowUserLogin}>Login</a></p>
        </form>
      </div>
    </div>
  )
}

export default UserRagister;
