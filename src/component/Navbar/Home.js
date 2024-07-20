import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { storeAction } from '../../store/storeSlice';

const Home = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
     dispatch(storeAction.NotShowPic());
  },[])
  return (
    <div>
    </div>
  )
}

export default Home;
