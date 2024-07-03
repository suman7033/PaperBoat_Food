import React, { useEffect, useState } from 'react';
import '../Main/Items.css';
import { storeAction } from '../../store/storeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';


const Items = () => {
  const [items, setItems] = useState([]);
  const [addItemTrigger, setAddItemTrigger] = useState(0); // State variable to trigger useEffect
  const dispatch = useDispatch();
  const email = useSelector((state) => state.storeVal.email);
  const AddItems = useSelector((state) => state.storeVal.AddItems);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('https://paperboat-b7055-default-rtdb.firebaseio.com/.json'); // Replace with your API endpoint
        const data = await response.json();
        console.log('fetchReal_Data', data);
        const transformedData = Object.values(data);
        console.log('transformed', transformedData);
        setItems(transformedData);
      } catch (error) {
        toast.error(`Error: ${error.message}`, {
          position: 'top-center',
          autoClose: 3000,
        });
      }
    };

    const fetchAddItems = async () => {
      const userSpecificPath = email.replace('.', '_');
      try {
        const response = await fetch(`https://paperboat-b7055-default-rtdb.firebaseio.com/${userSpecificPath}.json`);
        const data = await response.json();
        console.log('fetchAdd_Data', data);

        // Store the keys along with the items
        const transformedData = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
        console.log('transformed.length', transformedData.length);

        dispatch(storeAction.AddCart(transformedData.length));
        dispatch(storeAction.AddItems(transformedData));
      } catch (error) {
        toast.error(`Error: ${error.message}`, {
          position: 'top-center',
          autoClose: 3000,
        });
      }
    };

    fetchItems();
    fetchAddItems();
  }, [addItemTrigger]); // Add addItemTrigger as a dependency

  const handleAddToCart = async (item) => {
    const userSpecificPath = email.replace('.', '_');
    try {
      const response = await fetch(`https://paperboat-b7055-default-rtdb.firebaseio.com/${userSpecificPath}.json`, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const addData = await response.json();
      toast.success('Item added to cart', {
        position: 'top-center',
        autoClose: 3000,
      });

      // Update the state variable to trigger useEffect
      setAddItemTrigger((prev) => prev + 1);
    } catch (error) {
      toast.error(`Error: ${error.message}`, {
        position: 'top-center',
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="items-container">
      {items.map((item, index) => (
        <div key={index} className="item-card">
          <img src={item.ItemImageUrl} alt={item.ItemName} className="item-image" />
          <h3 className="item-title">{item.ItemName}</h3>
          <p className="item-price">${item.Price}</p>
          <p className="item-offer">-{item.Offer}% off</p>
          <button className="add-to-cart-btn" onClick={() => handleAddToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Items;
