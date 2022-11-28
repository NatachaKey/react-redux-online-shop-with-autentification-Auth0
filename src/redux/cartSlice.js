import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemToCart: (state, action) =>{
            // const timeId = new Date().getTime();
            state.cartItems.push({
                id:action.payload.dessert.id,
                dessertId: action.payload.dessert.id,
                name:action.payload.dessert.name,
                quantity: action.payload.quantity,
                price: action.payload.dessert.price,
                totalPrice: action.payload.quantity * action.payload.dessert.price,
                
            })
            
        },
        
        removeItemFromCart: (state, action) =>{
            state.cartItems = state.cartItems.filter( cartItem => cartItem.id !== action.payload.cartItemId
            )
        },

        updateQuantity: (state, action) => {
            const newCart = [];
            
            state.cartItems.forEach(item => {

                if (item.dessertId === action.payload.dessert.id) {
                    let newQuantity = item.quantity + action.payload.quantity;
                    let totalSum = item.price * newQuantity;
                    const changeCart = {...item, quantity: newQuantity, totalPrice: totalSum };
                    newCart.push(changeCart);
                } else {
                    newCart.push(item);
                }

                
            })
            state.cartItems = newCart;
        },

        clearCart: state => {
            state.cartItems = []
        }
        
    }
})

export const getTotalPrice= state=> {
    return state.cart.cartItems.reduce((total, cartItems)=>{
        return cartItems.totalPrice + total
    }, 0)
};

export const getCartItems= state=> state.cart.cartItems;
export const { addItemToCart, removeItemFromCart, clearCart, updateQuantity }= cartSlice.actions;
export default cartSlice.reducer;