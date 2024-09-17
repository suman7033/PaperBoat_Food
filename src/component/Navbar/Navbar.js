import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import UserRegister from '../User/UserRagister';
import { storeAction } from '../../store/storeSlice';
import Admin_user from './Admin_user';
import AdminLogin from '../Admin/AdminLogin';
import UserLogin from '../User/UserLogin';
import AdminRagister from '../Admin/AdminRagister';
import './Navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.storeVal.isLogin);
  const ShowAdmin_and_User = useSelector((state) => state.storeVal.ShowAdmin_and_User);
  const ShowUserRegisterForm = useSelector((state) => state.storeVal.ShowUserRegisterForm);
  const ShowAdminLogin = useSelector((state) => state.storeVal.ShowAdminLogin);
  const ShowUserLogin = useSelector((state) => state.storeVal.ShowUserLogin);
  const ShowAdminRagister = useSelector((state) => state.storeVal.ShowAdminRagister);
  const AddCart = useSelector((state) => state.storeVal.AddCart);
  
  // Local state for showing the menu in small screens
  const [menuOpen, setMenuOpen] = useState(false);

  const Admin_user_Handler = () => {
    dispatch(storeAction.ShowAdmin_and_User());
  };

  const PersonOffIconHandler = () => {
    dispatch(storeAction.UserLogout());
    dispatch(storeAction.NotShowPic());
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu open/close state
  };

  return (
    <>
      <div className='navbar'>
        <h5>
          <img
            className='nav-image'
            src='https://www.paperboatfoods.com/cdn/shop/files/MicrosoftTeams-image_7_150x.png?v=1699348334'
            alt='Logo'
          />
        </h5>
        {/* Menu Icon visible on small screens */}
        <label className='menuIcon'>
          <MenuIcon onClick={toggleMenu} />
        </label>

        {/* Toggle display of the navDiv based on menuOpen state */}
        <div className={`navDiv ${menuOpen ? 'show' : 'hide'}`}>
          <Link className='home' to='/'><HomeIcon fontSize='15vw' /></Link>
          <Link className='nuts-seeds-berries' to='/nuts-seeds-berries'>Nuts, Seeds & Berries</Link>
          <Link className='gifts-galore' to='/gifts-galore'>Gifts Galore</Link>
          <Link className='nuts-about-deals' to='/nuts-about-deals'>Nuts about Deals</Link>
          <Link className='search' to='/search'><ManageSearchIcon fontSize='15vw' /></Link>
          <Link to='/login'>
            {isLogin ? <NotificationsActiveIcon className='personIcon' fontSize='15vw' /> : <PersonIcon className="personIcon" onClick={Admin_user_Handler} fontSize='15vw' />}
          </Link>
          <Link className='cart' to='/cart'><ShoppingCartIcon fontSize='15vw' /> <b className='CartLength'>{isLogin ? AddCart : null}</b> </Link>
          <Link className='PersonOffIcon'><PersonOffIcon onClick={PersonOffIconHandler} fontSize='15vw' /></Link>
        </div>
      </div>

      <div>
        {ShowAdmin_and_User ? <Admin_user /> : null}
        {ShowUserRegisterForm ? <UserRegister /> : null}
        {ShowAdminLogin ? <AdminLogin /> : null}
        {ShowAdminRagister ? <AdminRagister /> : null}
        {ShowUserLogin ? <UserLogin /> : null}
      </div>
    </>
  );
};

export default Navbar;
