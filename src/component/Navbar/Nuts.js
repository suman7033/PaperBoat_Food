import React, { useEffect } from 'react'
import "../Navbar/gift.css"
import { useDispatch } from 'react-redux'
import { storeAction } from '../../store/storeSlice';

const Nuts = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
     dispatch(storeAction.ShowPic());
  },[])
  return (
    <div>
      <div>
        <img className="gifts-image" src='https://www.shutterstock.com/image-photo/falling-muesli-oat-granola-isolated-600nw-2373225801.jpg'/>  
      </div>
    </div>
  )
}

export default Nuts;
