import React from 'react';
import "../Navbar/admin_user.css";
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from 'react-redux';
import { storeAction } from '../../store/storeSlice';

const Admin_user = () => {
  const dispatch = useDispatch();
  const ShowAdmin_and_User = useSelector((state) => state.storeVal.ShowAdmin_and_User);

  const ClearHandler = () => {
    dispatch(storeAction.NotShowAdmin_and_User());
  };

  const ShowUserHandler = () => {
    dispatch(storeAction.ShowUserLogin());
    dispatch(storeAction.NotShowAdmin_and_User());
  };

  const ShowAdminHandler = () => {
    dispatch(storeAction.NotShowAdmin_and_User());
    dispatch(storeAction.ShowAdminLogin());
  };

  return (
    <div>
      {ShowAdmin_and_User ? (
        <div className='Admin_user'>
          <div className='Admin_userDiv'>
          <span className='ClearIcon' onClick={ClearHandler}><ClearIcon fontSize='large'/></span>
          <div className='h5'>welcome</div>
          <img className='Admin_user_logo' src='https://www.paperboatfoods.com/cdn/shop/files/MicrosoftTeams-image_7_150x.png?v=1699348334' alt='logo'/>
          <div className='Admin_user_btn'>
            <button className='admin' onClick={ShowAdminHandler}>Admin</button>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            <button className='user' onClick={ShowUserHandler}>User</button>
          </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Admin_user;

