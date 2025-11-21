import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

import alovera from "../assets/alovera.jpg"; // or .jpg/.png



const PlantCard = ({ plant }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const isDisabled = cartItems[plant.id] !== undefined;

  const handleAddToCart = () => {
    if (!isDisabled) {
      dispatch(addToCart(plant));
    }
  };



//const PlantCard = ({ plant }) => (
 // <div>
   // <img src={`/assets/${ViewTransitionTypeSet}`} alt={plant.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
   // <h3>{plant.name}</h3>
   // <p>₹{plant.price}</p>
    {/* Add to Cart button here */}
 // </div>
//);

// const PlantCard=()=>
// (
//   <img src={virat}/>
// )



// const PlantCard = () => (
//   <div>
//     <img src={alovera} alt="Alovera Plant" />
//     <h3>Alovera Plant</h3>
//     {/* Other UI here */}
//   </div>
// );

<img src={`../assets/${alovera.thumbnail}`} >
</img>



  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', width: '200px', margin: '10px' }}>
      <img src={`/assets/${plant.thumbnail}`} alt={plant.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      <h3>{plant.name}</h3>
      <p>₹{plant.price}</p>
      <button disabled={isDisabled} onClick={handleAddToCart}>
        {isDisabled ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default PlantCard;
