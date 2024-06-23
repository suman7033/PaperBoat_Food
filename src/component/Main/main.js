import React, { useEffect, useState } from 'react';
import "./main.css";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Main = () => {
   const [data,setData]=useState([]);
   const fetchHandler=async ()=>{
       try{
          let fetchWork=await fetch("https://dummyjson.com/recipes");
          let AllfetchData=await fetchWork.json();
          
          let firstFourItem=AllfetchData.recipes.slice(0,5);
          setData(firstFourItem);

       } catch(error){
         console.log(error);
       }
     }
    //  useEffect(()=>{
    //    fetchHandler();
    //  },[])
    //  console.log(data);
  return (
    <div className='mainDiv'>
        {
          data.map((e,index)=>{
            return <div key={index}>
                <img className="Itemimage" src={e.image} />
            </div>
          })

        }
    </div>
  )
}

export default Main
