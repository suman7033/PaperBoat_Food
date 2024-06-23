import React from 'react'
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Main from './component/Main/main';
import Footer from './component/Footer/footer';
import UserLogin from './component/User/UserLogin';
import UserRagister from './component/User/UserRagister';
import AdminLogin from './component/Admin/AdminLogin';
import AdminRagister from './component/Admin/AdminRagister';

const App = () => {
  return (
    <div>
       <Navbar/>
       {/* <UserLogin/>
       <UserRagister/>
       <AdminLogin/>
       <AdminRagister/> */}
       <img className='img2' src='https://www.paperboatfoods.com/cdn/shop/files/DRY_FRUITS_AND_NUTS_BASED_SNACKS_1500x.jpg?v=1705656388'/>

       <h1 className='heading'>New Pinch!</h1>
       <div className='container'>
        <Main/>
       </div>
      <img className='img4' src='https://www.paperboatfoods.com/cdn/shop/files/2022_PB_BANNER_02FEB_03-min_4_11zon_1500x.jpg?v=1668668994'/>
      <div className='container'>
       
      <Main/>
      </div>
      <div className='imgDiv'>
     <img className='img5' src='https://www.paperboatfoods.com/cdn/shop/files/Teacher_Review_PB_Webiste_Desktop_1500x.jpg?v=1652421650'/>
     <img className='img5' src='https://www.paperboatfoods.com/cdn/shop/files/PB_Creative_Website_1000x1000_transparent_900x.png?v=1652419839'/>
     <img className='img5' src='https://www.paperboatfoods.com/cdn/shop/files/Creatives_1000x1000_0620073d-0119-429a-8174-2201d0e1349f_900x.png?v=1645432162'/>
     </div>
     <Footer/>
    </div>

     
  )
}

export default App
