const ChangeQuantity=({quantity, setQuantity})=>{

    const addQuantity= ()=>{
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }
    
    const removeQuantity= ()=>{
        if (quantity <= 0) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }
    
        return(
            <div>
                <button onClick={removeQuantity}>-</button>
                <span> {quantity} </span>
                <button onClick={addQuantity}>+</button>

            </div>
        )
    }
    
    export default ChangeQuantity;