import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';
import axios from 'axios';
import Courses from './Courses';
import Loading from './Loading';


function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData=async()=>{
    setLoading(true);

    const response=await axios.get('http://localhost:3001/courses');
    setData(response.data);
    setLoading(false);


  }

  useEffect(()=>{
    fetchData();
  },[]);


  const deletee=(id)=>{

    const afterData=data.filter((data)=> data.id!==id);
    setData(afterData)
    
  }

  return (

       <div className="App">

     

      {
        loading ? (<Loading/>) :

        <>
        {
          data.length===0 ? (<div className='sonDiv'>
            <h1 className='sonP'>Hepsini sildin !!</h1>
            <button className='sonB' onClick={()=>fetchData()} >Yenile</button >

          </div>) :
          <Courses data={data} removeCourse={deletee}/>

        }


        </>


      }
        
  
    </div>

  );
}

export default App;
