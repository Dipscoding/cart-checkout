// import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import Subheader from './components/Layout/Subheader';
import Products from './products/Products';





function App() {


  return (
    <div className="App">
      <Header count={cartItems.length} items={cartItems} onHandleEvent={handleEventQueue}/>
      <Subheader/>
      <Products onAddItem={handleAddItem} onRemoveItem={handleRemoveItem} eventState={eventQueue}/>

     
    
    </div>
  );
}

export default App;