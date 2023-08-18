import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import Content from './components/Content';



function App() {
  const [number, setNumber] = useState(0)


 

  return (
    <div className="App">
      <div>
      <h2>To Do App</h2>

      </div>
    
      
      <Content/>


      
 



    </div>
    
  );
}

export default App;
