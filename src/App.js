import React, { useEffect } from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/footer';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './component/Navbar/Home';
import Nuts from './component/Navbar/Nuts';
import Gifts from './component/Navbar/Gifts';
import NutsAbout from './component/Navbar/NutsAbout';
import Search from './component/Navbar/Search';
import ShoppingCart from './component/Navbar/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import Admin_user from './component/Navbar/Admin_user';
import AddForm from './component/Main/AddItemForm';
import Items from './component/Main/Items';
import { storeAction } from './store/storeSlice';
import MenuIcon from '@mui/icons-material/Menu';
import FounderImage from "./component/Img/FounderPic.jpg";


const App = () => {
  const isLogin = useSelector((state) => state.storeVal.isLogin);
  const ShowAddForm = useSelector((state) => state.storeVal.ShowAddForm);
  const ShowPic=useSelector((state)=>state.storeVal.ShowPic);
  const ShowFounder=useSelector((state)=>state.storeVal.ShowFounder);

  const dispatch = useDispatch();

  const fetchLogin = () => {
    const email = localStorage.getItem("email");
    const authToken = localStorage.getItem("authToken");
    console.log("App-email",email);
    if (authToken && email) {
      dispatch(storeAction.UserLogin({ email, authToken }));
    } else {
      dispatch(storeAction.UserLogout());
    }
  };

  //useEffect
  useEffect(() => {
    fetchLogin();
  });

  return (
    <div>
      <ToastContainer/>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={isLogin ? <Home /> : <Navigate to='/login' />} />
          <Route path='/nuts-seeds-berries' element={isLogin ? <Nuts /> : <Navigate to='/login' />} />
          <Route path="/gifts-galore" element={isLogin ? <Gifts /> : <Navigate to='/login' />} />
          <Route path="/nuts-about-deals" element={isLogin ? <NutsAbout /> : <Navigate to='/login' />} />
          <Route path='/Search' element={isLogin ? <Search /> : <Navigate to='/login' />} />
          <Route path='/cart' element={isLogin ? <ShoppingCart /> : <Navigate to='/login' />} />
          <Route path='/login' element={<Admin_user />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
       
      {ShowAddForm ? <AddForm /> : null}
      <img className="FounderImage" src={FounderImage}/>
      {ShowPic ? null : <img className='img2' src='https://www.paperboatfoods.com/cdn/shop/files/DRY_FRUITS_AND_NUTS_BASED_SNACKS_1500x.jpg?v=1705656388' alt='Banner' />}
      <h1 className='heading'>New Pinch!</h1>
      <div>
        {isLogin ? <Items /> : null}
      </div>
      <img className='img4' src='https://www.paperboatfoods.com/cdn/shop/files/2022_PB_BANNER_02FEB_03-min_4_11zon_1500x.jpg?v=1668668994' alt='Banner' />
      <div className='imgDiv'>
        <img className='img5' src='https://www.paperboatfoods.com/cdn/shop/files/PB_Creative_Website_1000x1000_transparent_900x.png?v=1652419839' alt='Creative' />
        <img className='img5' src='https://www.paperboatfoods.com/cdn/shop/files/Creatives_1000x1000_0620073d-0119-429a-8174-2201d0e1349f_900x.png?v=1645432162' alt='Creative' />
      </div>
      <img className="FounderImage" src={FounderImage}/>
      <Footer />
    </div>
  );
}

export default App;
