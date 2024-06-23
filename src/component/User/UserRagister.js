import React from 'react'
import '../User/UserRagister.css'
import CancelIcon from '@mui/icons-material/Cancel';
import { storeAction } from '../../store/storeSlice';


import { useDispatch } from 'react-redux';

const UserRagister = () => {
  const dispatch=useDispatch();

  const CancelHandler=()=>{
     dispatch(storeAction.ShowLogin())
  }
  return (
        <div>
        <div className="login-container">
        <span className='cancleBtn' onClick={CancelHandler}><CancelIcon/></span>
  <div className="login-content">
    <img className="login-Image" src="https://www.jiomart.com/images/product/original/rvlszfsuqv/paper-boat-premium-smoked-and-roasted-nuts-with-himalayan-pink-salt-1kg-product-images-orvlszfsuqv-p594397657-6-202210110831.jpg?im=Resize=(1000,1000)"/>
    <form className="login-form" action="/login" method="post">
      <img className='LoginLogo' src='https://www.paperboatfoods.com/cdn/shop/files/MicrosoftTeams-image_7_150x.png?v=1699348334'/>
      <h2>Ragister Form</h2><br/>
      <div className="form-group">
        <label className='name'><b>Name</b></label><br/>
        <input type='text' placeholder='name..' required/>
        <label><b>Username</b></label><br/>
        <input type="text" placeholder="username.." required/>
      </div>
      <div className="form-group">
        <label><b>Password</b></label><br/>
        <input type="password" placeholder="password.." required/>
      </div>
      <button type="submit" className="login-btn"><b>Ragister</b></button>
    </form>
  </div>
</div>
    </div>
  )
}

export default UserRagister
