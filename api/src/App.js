import './App.css';
import ObjList from './ObjList';
import Search from './Search';
import searchObj from './api';
import { useState } from 'react';

function App() {
  const [obj, setObj] = useState([]);

  const handleSubmit=async(temp)=>{
    const result= await searchObj(temp);
    setObj(result);
  };


  return (
    <div className='App'>
      <Search search={handleSubmit}/>
      <ObjList placeHolder={obj}/>

 
    </div>
  );
}

export default App;
