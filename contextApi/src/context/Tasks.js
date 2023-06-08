import { createContext } from "react";
import axios from 'axios';
import { useState } from 'react';


const TasksContext=createContext();

function Provider ({children}){
    const [transValue,setTransValue] = useState([])
    const handleCreat=async(tittle,desc) =>{
      const response =await axios.post('http://localhost:3004/tasks', {
        tittle,
        desc,
      });
      const createdTask=[
        ...transValue,
        response.data
      ];
      setTransValue(createdTask);
  
  };
  
  const handleDeleteByID=async(id)=>{
    await axios.delete( ` http://localhost:3004/tasks/${id}`);
  
    const afterDeletingValue =transValue.filter((value)=>{
      return value.id!== id;
  
    })
    setTransValue(afterDeletingValue);
  };
  
  
  const handleEditByValue=async(id,updatedTitle,updatedDesc)=>{
    await axios.put( `http://localhost:3004/tasks/${id}`,
    {
      tittle:updatedTitle,
      desc:updatedDesc,
  
    });
  
    const updatedValue =transValue.map((value)=>{
      if(value.id===id){
        return {id,tittle:updatedTitle,desc:updatedDesc};
      }
      else{
        return transValue;
  
      }
      
      
  
    });
    setTransValue(updatedValue);
  };
  
  
  const fetchValue=async () =>{
    const response = await axios.get('http://localhost:3004/tasks');
    setTransValue(response.data)
  }

  const sharedValuesAndMethohs={
    transValue,
    handleDeleteByID,
    handleEditByValue,
    handleCreat,
    fetchValue,
  };


    return (
        <TasksContext.Provider value={sharedValuesAndMethohs}>
            {children}
        </TasksContext.Provider>
    )
}
export {Provider};
export default TasksContext;