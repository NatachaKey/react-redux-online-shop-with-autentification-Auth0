import { useSelector } from "react-redux";
import {  getTotalPrice } from "../../redux/cartSlice";

const IconCart = ()=> {
    const totalPrice = useSelector(getTotalPrice);
    return(<div>
       <p>{totalPrice}</p>
    </div>)
}

export default IconCart;