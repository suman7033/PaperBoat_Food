import React, { useRef } from 'react';
import "../User/UserLogin.css";
import { useDispatch, useSelector } from 'react-redux';
import { storeAction } from '../../store/storeSlice';
import { useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import { toast } from 'react-toastify';

const UserLogin = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const ShowUserLogin = useSelector((state) => state.storeVal.ShowUserLogin);
  console.log("ShowUserLogin", ShowUserLogin);

  const dispatch = useDispatch();

  const CancelHandler = () => {
    dispatch(storeAction.CancelUserLogin());
    dispatch(storeAction.CancelUserRagister());
  }

  const LoginHandler = async (e) => {
    e.preventDefault();
    const Obj = {
      email: usernameRef.current.value,
      password: passwordRef.current.value,
      returnSecureToken: true
    }
    try {
      const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCTiT42FINsFU9Opem_Nn8uG1T6rtRiXiQ", {
        method: "POST",
        body: JSON.stringify(Obj),
        headers: { "Content-Type": "application/json" }
      });
      const data = await response.json();
      if (data.idToken) {
        localStorage.setItem("email", data.email);
        localStorage.setItem('authToken', data.idToken);
        dispatch(storeAction.UserLogin({ email: data.email, authToken: data.idToken }));
        
        toast.success('sucessful login', {
          position: 'top-center',
          autoClose: 3000,
        });

        dispatch(storeAction.CancelUserLogin());
        dispatch(storeAction.NotShowAdmin_and_User());
        navigate("/");
      }
      if (!response.ok) {
        throw new Error("Try Again");
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`, {
        position: 'top-center',
        autoClose: 3000,
      });
    }
  }

  const RagisterFormOpen = () => {
    dispatch(storeAction.ShowUserRegisterForm());
    dispatch(storeAction.CancelUserLogin());
  }

  return (
    <div className="login-container">
      {ShowUserLogin && (
        <>
          <div className='LoginCancleBtn' onClick={CancelHandler}><ClearIcon fontSize='large' /></div>
          <div className="login-content">
            <img className="login-Image" src="https://www.jiomart.com/images/product/original/rvlszfsuqv/paper-boat-premium-smoked-and-roasted-nuts-with-himalayan-pink-salt-1kg-product-images-orvlszfsuqv-p594397657-6-202210110831.jpg?im=Resize=(1000,1000)" alt="Login" />
            <form className="login-form" onSubmit={LoginHandler}>
              <img className='LoginLogo' src='https://www.paperboatfoods.com/cdn/shop/files/MicrosoftTeams-image_7_150x.png?v=1699348334' alt="Logo" />
              <h2>User Login</h2>
              <div className="form-group">
                <label className='login-label-name'><b>Username</b></label>
                <input type="text" ref={usernameRef} placeholder="Username.." required />
              </div>
              <div className="form-group">
                <label className='login-label-password'><b>Password</b></label>
                <input type="password" ref={passwordRef} placeholder="Password.." required />
              </div>
              <button type="submit" className="login-btn"><b>Login</b></button>
              <p>Don't have an account? <a onClick={RagisterFormOpen}>Sign_up</a></p>
            </form>
          </div>
        </>
      )}
    </div>
  )
}

export default UserLogin;
