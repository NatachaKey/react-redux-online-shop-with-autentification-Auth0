import React from 'react';
import { 
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import About from './About';
import './App.css';
import Contacts from './Contacts';
import History from './History';
import Shop from './Shop';
import Login from './Login';
import Logout from './Logout';

function App() {

  return (
  <Router>
<nav>
    <Link className='linkStyle' to="/">About</Link>
    <Link className='linkStyle' to="/History">History</Link>
    <Link className='linkStyle' to="/Shop">Shop</Link>
    <Link className='linkStyle' to="/Contacts">Contacts</Link>
    <Login/> 
    <Logout/>
</nav>

    <Routes>
        <Route path='/' element={<About/>} />
        <Route path='/History' element={<History/>} />
        <Route path='/Shop' element={<Shop/>} />
        <Route path='/Contacts' element={<Contacts/>} />
        
    </Routes>

 </Router>

  );
}

export default App;



