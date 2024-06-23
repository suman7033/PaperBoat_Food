import React, { useState } from 'react'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "./Navbar.css";
import UserLogin from '../User/UserLogin';
import { useDispatch, useSelector } from 'react-redux';
import { storeAction } from '../../store/storeSlice';
import UserRagister from '../User/UserRagister';

const Navbar = () => {
  const dispatch=useDispatch();
  const IsLogin=useSelector((state)=>state.storeVal.isLogin);

  const [showNavbar,setSHowNavbar]=useState(true);

  const LoginShowHandler=()=>{
     dispatch(storeAction.ShowLogin());
  }
  console.log(IsLogin);

  return (
    <>
    <div>
      {showNavbar ? <div className='navbar'>
      <h5><img className='img1' src='https://www.paperboatfoods.com/cdn/shop/files/MicrosoftTeams-image_7_150x.png?v=1699348334'/></h5>
      <h5><HomeIcon fontSize='large'/></h5>
      <h5>Nuts,Seeds & Berries</h5>
      <h5>Gifts Galore</h5>
      <h5>Indian Kitchen</h5>
      <h5>Nuts about Deals</h5>
      <h5>Top in Class!</h5>
      <h5>Where's My Snack?</h5>
      <h5><ManageSearchIcon fontSize='large'/></h5>
      <h5><PersonIcon onClick={LoginShowHandler} fontSize='large'/></h5>
      <h5><ShoppingCartIcon fontSize='large'/></h5>
     </div> : 
      <div className='RowWise'>
         <div className='Rownavbar'>
         <h5><img className='img1' src='https://www.paperboatfoods.com/cdn/shop/files/MicrosoftTeams-image_7_150x.png?v=1699348334'/></h5>
         <h5><HomeIcon fontSize='large'/></h5>
         <h5>Nuts,Seeds & Berries</h5>
         <h5>Gifts Galore</h5>
         <h5>Indian Kitchen</h5>
         <h5>Nuts about Deals</h5>
         <h5>Top in Class!</h5>
         <h5>Where's My Snack?</h5>
         <h5><ManageSearchIcon fontSize='large'/></h5>
         <h5 onClick={LoginShowHandler}><PersonIcon fontSize='large'/></h5>
         <h5><ShoppingCartIcon fontSize='large'/></h5>
     </div>
     </div>}

     <div className='mainNavbar'>
     {showNavbar ? <div className='menuIcon' onClick={()=>setSHowNavbar(false)}><MenuIcon fontSize="large"/></div>:
     <div className="backIcon" onClick={()=>setSHowNavbar(true)}><ArrowBackIosIcon fontSize='large'/></div>}
     </div>
     </div>
     {IsLogin ? <UserLogin/>: null}
     </>
  )
}

export default Navbar
