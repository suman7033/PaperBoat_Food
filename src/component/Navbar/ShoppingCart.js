import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import '../Navbar/shoppingCart.css';
import { storeAction } from '../../store/storeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';


const Items = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.storeVal.email);
  const AddItems = useSelector((state) => state.storeVal.AddItems);
  const userSpecificPath = email.replace('.', '_');

  const items = Object.values(AddItems);

  const BuyHandler = () => {
    toast.success("Don't Back and refresh", {
      position: 'top-center',
      autoClose: 3000,
    });
    const url="https://razorpay.com/payment-link/plink_Oxl1InB9o0mrbM";
    window.open(url);
  }
    //add regopay
    // const loadRazorpayScript = () => {
    //   return new Promise((resolve) => {
    //     const script = document.createElement("script");
    //     script.src = "https://checkout.razorpay.com/v1/checkout.js";
    //     script.onload = () => resolve(true);
    //     script.onerror = () => resolve(false);
    //     document.body.appendChild(script);
    //   });
    // };
  
    // // Function to handle payment
    // const BuyHandler = async () => {
    //   toast.success("Don't Back and refresh", {
    //         position: 'top-center',
    //         autoClose: 3000,
    //     });
    //   const scriptLoaded = await loadRazorpayScript();
  
    //   if (!scriptLoaded) {
    //     alert("Razorpay SDK failed to load. Are you online?");
    //     return;
    //   }
  
    //   const options = {
    //     key: "YOUR_RAZORPAY_KEY", // Replace with your Razorpay key
    //     amount: "50000", // Amount in paise (50000 paise = 500 INR)
    //     currency: "INR",
    //     name: "Your Company Name",
    //     description: "Test Transaction",
    //     handler: (response) => {
    //       alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
    //     },
    //     prefill: {
    //       name: "Your Name",
    //       email: "your-email@example.com",
    //     },
    //     theme: {
    //       color: "#3399cc",
    //     },
    //   };
  
    //   const paymentObject = new window.Razorpay(options);
    //   paymentObject.open();
    // }
    //add regopay

  const ShopingRemoveBtn = async (itemId) => {
    console.log("before Delete", itemId);
    try {
      await fetch(`https://paperboat-b7055-default-rtdb.firebaseio.com/${userSpecificPath}/${itemId}.json`, {
        method: "DELETE",
      });

      // Update the state after deletion
      const updatedItems = AddItems.filter(item => item.id !== itemId);
      dispatch(storeAction.AddItems(updatedItems));
      dispatch(storeAction.AddCart(updatedItems.length))
      toast.success('Item removed to cart', {
        position: 'top-center',
        autoClose: 3000,
      });
    } catch (error) {
      toast.error(`Error: ${error.message}`, {
        position: 'top-center',
        autoClose: 3000,
      });
    }
  }

  return (
    <div className="AddItem-container">
      {items.length === 0 ? (
        <p className="empty-message">Empty Add Card</p>
      ) : (
        items.map((item, index) => (
          <div key={index} className="AddItem-card">
            <ClearIcon onClick={() => ShopingRemoveBtn(item.id)} className="RemoveAddItembtn" fontSize='large' />
            <h3 className="AddItem-title">{item.ItemName}</h3>
            <img src={item.ItemImageUrl} alt={item.ItemName} className="AddItem-image" />
            <p className="AddItem-price">${item.Price}</p>
            <p className="AddItem-offer">-{item.Offer}% off</p>
            <button className='BuyBtn' onClick={BuyHandler}>Buy</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Items;
