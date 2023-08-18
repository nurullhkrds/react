import React,{useState,useEffect} from 'react'
import Form from './otherComponents/Form'
import List from './otherComponents/List'
import Footer from './otherComponents/Footer'
import { BsCaretDownFill,BsCaretUpFill } from "react-icons/bs";

const InitialData=[
  {
    id:1, todo:"Pazar Gideceğim", isActive:false
  },
  {
    id:2, todo:"Ders Çalışacağım", isActive:false
  },
  {
    id:3, todo:"Dünyayı gezeceğim", isActive:false
  }
]

function Content() {

  const [btnState, setBtnState] = useState('All')


  const [data, setData] = useState([])
  const [fullData,setFullData]=useState([])
  const [completedData,setCompletedData]=useState([])
  const [openToDoList,setOpenTodoList]=useState(true);
  
  

  useEffect(()=>{
   // console.log("completed",completedData)
    //console.log("remove",data)
    
    
   


},[completedData,data])

const handleOpen =() =>{
  setOpenTodoList(!openToDoList)
  


}


  return (
    <div className='ContentClass'>
      {
        openToDoList ? <BsCaretDownFill className='btnOpenTodoList' onClick={handleOpen}/>:      <BsCaretUpFill className='btnOpenTodoList' onClick={handleOpen}/>


      }

      

      <Form setFullData={setFullData} addData={setData}  />
      <List openToDoList={openToDoList} btnState={btnState} setFullData={setFullData} fullData={fullData} data={data} setData={setData} completedData={completedData} setCompletedData={setCompletedData} />
      <Footer completedData={completedData} fullData={fullData} setFullData={setFullData} setCompletedData={setCompletedData} setBtnState={setBtnState} data={data} />
      
    </div>
  )
}

export default Content