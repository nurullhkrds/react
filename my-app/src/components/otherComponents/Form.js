import React,{useState} from 'react'

let id=3;

function Form({addData,data,setFullData}) {
    const [formValue, setFormValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formValue===""){
            return false;
        }
        else {
            id=id+1
            addData((prev)=>[...prev,{id:id,todo:formValue,isActive:false}])
           
            setFormValue("")
            setFullData((prev)=>[...prev,{id:id,todo:formValue,isActive:false}])


        }
    
    }
  return (
    <div className='formDiv'>
        <form onSubmit={handleSubmit}>
        <input className='formInput' value={formValue} onChange={(e)=>{setFormValue(e.target.value)}} placeholder='Ne Yapacaksın ?'/>


        </form>
    </div>
  )
}

export default Form