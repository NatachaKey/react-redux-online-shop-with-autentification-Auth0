import { useDispatch } from 'react-redux';
//import dataDesserts from '../../data/dataDesserts';
import {  removeItemFromCart } from "../../redux/cartSlice";


const CartItem = ({ cartItem })=> {

    // const desserts= dataDesserts.find(item=> item.id === cartItem.dessertId)
    const dispatch= useDispatch();
    
    return(
    
    <div>
        {/* <img src={`./${cartItem.img}.jpg`} alt="cart item" width="100px"/> */}

       <p>{cartItem.name}</p>
       <p>Portion(s): {cartItem.quantity}</p>
       <p>${cartItem.totalPrice}<span onClick={()=>dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
       
       <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt='delete'/>  
        </span></p> 
    </div>
    
    
    
    )
}

export default CartItem;


