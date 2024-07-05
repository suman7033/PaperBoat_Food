import React, { useRef } from 'react';
import "../Main/AddItemForm.css"
import { toast } from 'react-toastify';


const AddItemForm = () => {
  const ItemNameRef=useRef();
  const ItemImageUrlRef=useRef();
  const PriceRef=useRef();
  const OfferRef=useRef();

  const AddItemHandler=async(e)=>{
    e.preventDefault();
      const ItemObj={
         ItemName:ItemNameRef.current.value,
         ItemImageUrl:ItemImageUrlRef.current.value,
         Price:PriceRef.current.value,
         Offer:OfferRef.current.value
      }
       try{
         const response=await fetch("https://paperboat-b7055-default-rtdb.firebaseio.com/.json",{
          method:"POST",
          body: JSON.stringify(ItemObj),
          headers: {
            'Content-Type': 'application/json'
          }
         });
         //const ItemData=await response.json();
         
         if(!response.ok){
          throw new Error("Data Not Post");
         }
         toast.success('sucessful Adding', {
          position: 'top-center',
          autoClose: 3000,
        });
         ItemNameRef.current.value="";
         ItemImageUrlRef.current.value="";
         PriceRef.current.value="";
         OfferRef.current.value="";
       }catch(error){
        toast.error(`Error: ${error.message}`, {
          position: 'top-center',
          autoClose: 3000,
        });
       }
  }
  return (
    <div className="add-item-form-wrapper">
      <div className="add-item-form-image">
        <img src="https://m.media-amazon.com/images/I/71pnhldijDL.jpg" alt="Add Item" />
      </div>
      <div className="add-item-form-container">
        <h2 className="add-item-form-title">Add New Item</h2>
        <form className="add-item-form">
          <div className="add-item-form-group">
            <label htmlFor="itemName" className="add-item-form-label">Item Name:</label>
            <input type="text" id="itemName" ref={ItemNameRef} name="itemName" className="add-item-form-input" placeholder="Enter item name" required />
          </div>
          <div className="add-item-form-group">
            <label htmlFor="itemImage" className="add-item-form-label">Image URL:</label>
            <input type="url" id="itemImage" ref={ItemImageUrlRef} name="itemImage" className="add-item-form-input" placeholder="Enter image URL" required />
          </div>
          <div className="add-item-form-group">
            <label htmlFor="itemPrice" className="add-item-form-label">Price:</label>
            <div className="add-item-form-price-input-container">
              <input type="number" id="itemPrice" ref={PriceRef} name="itemPrice" className="add-item-form-input add-item-form-price-input" placeholder="Enter price" required />
            </div>
          </div>
          <div className="add-item-form-group">
            <label htmlFor="itemOffer" className="add-item-form-label">Offer (%):</label>
            <input type="number" id="itemOffer" ref={OfferRef} name="itemOffer" className="add-item-form-input" placeholder="Enter offer percentage" required />
          </div>
          <button type="submit" className="add-item-form-button" onClick={AddItemHandler}>Add Item</button>
        </form>
      </div>
    </div>
  );
}

export default AddItemForm;
