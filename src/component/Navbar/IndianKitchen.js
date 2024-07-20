import React,{useEffect} from 'react'
import "../Navbar/gift.css"
import { useDispatch } from 'react-redux'
import { storeAction } from '../../store/storeSlice';


const IndianKitchen = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(storeAction.ShowPic());
 },[])
  return (
    <div>
       <div>
        <img className="gifts-image" src='https://media.designcafe.com/wp-content/uploads/2020/06/23130933/traditional-indian-kitchen-design.jpg'/>  
      </div>
    </div>
  )
}

export default IndianKitchen;
