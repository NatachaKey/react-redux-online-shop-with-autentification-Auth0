import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, getCartItems, updateQuantity } from "../../redux/cartSlice";

import 'aos/dist/aos.css'; 


const Dessert = ({ dessert })=> {
    const [quantity, setQuantity]= useState(1);
    const dispatch= useDispatch();

    const cartItems = useSelector(getCartItems);
    console.log(cartItems);
    
    const dessertInCart = cartItems.some(item => item.id === dessert.id);

    const handleBuy = () =>{
        if (!dessertInCart){
            dispatch(addItemToCart({ dessert, quantity }))
        }
        else{
            dispatch(updateQuantity({dessert, quantity}))
        }
        
    }

    return(<div data-aos="fade-up">
        <br/>
        <img  className="imgSmallDevice" src={`./${dessert.img}.jpg`} alt="dessertImage" width="400px"/>
        <h3>{dessert.name}</h3>
        <p>${dessert.price}</p>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        <br/>
        <button onClick={handleBuy}>Add to cart</button>
        <br/>
    </div>)
}

export default Dessert;




// import ChangeQuantity from "../Cart/ChangeQuantity";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addItemToCart } from "../../redux/cartSlice";

// const Dessert = ({ dessert })=> {
//     const [quantity, setQuantity]= useState(1);
//     const dispatch= useDispatch();
//     return(<div>
//         <br/>
//         <img className="imgSmallDevice" src={`./${dessert.img}.jpg`} alt="dessertImage" width="400px"/>
//         <h3>{dessert.name}</h3>
//         <p>${dessert.price}</p>
//         <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
//         <br/>
//         <button onClick={() => {dispatch(addItemToCart({dessert,quantity}))}}>Add to cart</button>
//         <br/>
//     </div>)
// }

// export default Dessert;