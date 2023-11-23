// import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import Subheader from './components/Layout/Subheader';
import Products from './products/Products';
import {useState} from 'react'




function App() {

  const [cartItems,setCartItems] = useState([])
  const [eventQueue,setEventQueue] = useState({
    id:"",
    type:""
  })

  const handleAddItem = (item) =>{
    let items = [...cartItems]
    let index = items.findIndex(i=>i.id===item.id)
    if(index > -1){
      items[index]=item
    } else{
      items.push(item)

    }
    setCartItems([...items])
  }
  const handleRemoveItem = (item)=>{

    let items = [...cartItems];
    let index = items.findIndex(i=>i.id===item.id)
    if(items[index].quantity===0){
      items.splice(index,1)

    }
    else {
      items[index]=item
    }
    setCartItems([...items])
  }

  const handleEventQueue = (id,type) =>{
   setEventQueue({
    id,
    type
   })

    }

  

  return (
    <div className="App">
      <Header count={cartItems.length} items={cartItems} onHandleEvent={handleEventQueue}/>
      <Subheader/>
      <Products onAddItem={handleAddItem} onRemoveItem={handleRemoveItem} eventState={eventQueue}/>

     
    
    </div>
  );
}

export default App;