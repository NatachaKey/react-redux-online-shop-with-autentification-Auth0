import './App.css';
import Cart from './Components/Cart/Cart';
import Desserts from './Components/DessertsComponents/Desserts';
import AllCategories from './Components/Filter/AllCategories';
import Particless from './Particless';

function Shop() {

  return ( 
<div className="App">
  <Particless/> 
  <div className="block">
    <AllCategories/>
      <br/>
    <Cart/>
  </div>
    
  <div className="block">
    <Desserts /> 
  </div>      
 </div>
  );
}

export default Shop;
