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
        <img className="gifts-image" src='https://media.istockphoto.com/id/695071562/photo/nuts-assortment-on-rustic-wood-table.jpg?s=612x612&w=0&k=20&c=G1ndYym-HLo9FCKnA2kh9qq4_2Lz_fYJH6QPZmpPw_Q='/>  
      </div>
    </div>
  )
}

export default Nuts;
