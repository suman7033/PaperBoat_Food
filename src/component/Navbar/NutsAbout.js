import {useEffect} from 'react'
import "../Navbar/gift.css"
import { useDispatch } from 'react-redux'
import { storeAction } from '../../store/storeSlice';


const NutsAbout = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
     dispatch(storeAction.ShowPic());
  },[])
   
  return (
    <div>
       <div>
        <img className="gifts-image" src='https://m.media-amazon.com/images/I/61qOD07p-jL.jpg'/>  
      </div>
    </div>
  )
}

export default NutsAbout
