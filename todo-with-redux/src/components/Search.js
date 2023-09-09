import React,{useState,useEffect} from 'react'
import { Input } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { searchNote } from "../redux/slider/NoteSlider";



function Search() {
  const dispatch = useDispatch();
  const filtered=useSelector((state)=>state.notes.filteredNotes)

 
  const [text, setText] = useState("")
  const handleChane=(e)=>{
     setText(e.target.value)
    dispatch(searchNote(text))
    console.log(filtered)


    


  }
const handleSubmit=(e)=>{
  e.preventDefault()
  dispatch(searchNote(text))
  
  

}

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <Input 
        value={text}
        onChange={handleChane}
        placeholder="Search..." 
        style={{border:"none",borderRadius:"35px",padding:"15px",marginBottom:"25px"}} /> 
        </form>
    </div>
  )
}

export default Search