import 'semantic-ui-css/semantic.min.css'
import Navbar from './components/Navbar';
import { calculater } from './control/cartSlice';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import BasketListt from './components/BaskettList';


function App() {



  const {cartItems}=useSelector((store)=>store.cart)
  const dispatch=useDispatch();

    

  useEffect(()=>{
    dispatch(calculater())
   

  },[cartItems])
  return (
    <div className="App">
      <Navbar/>
      <BasketListt/>
    
    </div>
  );
}

export default App;
