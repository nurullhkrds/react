import { useState } from "react";
import CreateForm from "./CreateForm";
import { useContext } from 'react';
import TasksContext from '../context/Tasks';


function ShowValue({value}) {

    const {handleDeleteByID,handleEditByValue}=useContext(TasksContext);


    const [editState, setEditState] = useState(false);
        const handleDelete=(e)=>{
        e.preventDefault();
        handleDeleteByID(value.id);
        
    };
    const handleEdit=(e)=>{
        setEditState(true)
        
    };
    const handleSubmit=(id,updatedTitle,updatedDesc)=>{
        
        setEditState(false);
        handleEditByValue(id,updatedTitle,updatedDesc);
        
    };

    return ( 
        <div>
            {
                editState ? <><CreateForm value={value} isClickEdit={true} updatedValue={handleSubmit}/>   </>
                : <div className="showValue">
                <h3>Göreviniz</h3>
                <p>{value.tittle}</p>
                <h3>Yapılacaklar</h3>
                <p>{value.desc}</p>
                <div>
                    <button className="silButton" onClick={handleDelete}>sil</button>
                    <button className="silButton guncelle" onClick={handleEdit}>güncelle</button>
                </div>
    
            </div>

            }
        </div>



       
     );
}

export default ShowValue;