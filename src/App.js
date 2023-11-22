// import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import Subheader from './components/Layout/Subheader';
import Products from './products/Products';
import {useState} from 'react'




function App() {

  const [cartItems,setCartItems] = useState(0)

  const handleAddItem = () =>{
    setCartItems(cartItems+1)
  }
  const handleRemoveItem = ()=>{
    setCartItems(cartItems-1)
  }

  return (
    <div className="App">
      <Header count={cartItems}/>
      <Subheader/>
      <Products onAddItem={handleAddItem} onRemoveItem={handleRemoveItem}/>

     
    
    </div>
  );
}

export default App;