import {  useSelector, useDispatch } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";
import {  clearCart } from "../../redux/cartSlice";



const Cart = ()=> {
    let cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    const dispatch= useDispatch();
    
    return(<div>
        <h2>TOTAL: $ {totalPrice}</h2>

        <div>
      <button onClick={()=>dispatch(clearCart({cartItems: []}))}>Clear cart</button>
    </div>
       <img className="cartIcon" src="https://img.icons8.com/stickers/512/favorite-cart.png" width="80px" alt="icon"/> 
        {cartItems.map((cartItem,index)=> <CartItem key={index} cartItem={cartItem}/>)}
    
    </div>)
}

export default Cart;