import { createSlice } from "@reduxjs/toolkit";

export const noteSlice=createSlice({
    name:"notes",
    initialState:{
        notes:JSON.parse(localStorage.getItem("notes"))?JSON.parse(localStorage.getItem("notes")):[],
        filteredNotes:JSON.parse(localStorage.getItem("notes"))?JSON.parse(localStorage.getItem("notes")):[]
    }
    ,
    reducers:{
        addNote:(state,action)=>{
            state.notes.push(action.payload)

            localStorage.setItem("notes",JSON.stringify(state.notes))
            state.filteredNotes=state.notes


        },
        removeNote:(state,action)=>{
            let id=action.payload;
            const newNotesList=state.notes.filter((note)=>note.id!==id)
            state.notes=newNotesList
            localStorage.setItem("notes",JSON.stringify(state.notes))
            state.filteredNotes=state.notes

        },
        editNote:(state,action)=>{
            const { id, title, desc, color } = action.payload;
            const index = state.notes.findIndex(note => note.id === id);
            state.notes[index].title = title;
            state.notes[index].desc = desc;
            state.notes[index].color = color;
            localStorage.setItem("notes",JSON.stringify(state.notes))
            state.filteredNotes=state.notes
          
            
        },
        searchNote:(state,action)=>{
            const world=action.payload.toLowerCase()
            console.log(world);
            if(world!==""){
                const data=state.notes.filter((item)=>item.title.toLowerCase().includes(world))
                state.filteredNotes=data
            }
            else{
                state.filteredNotes=state.notes
            }

        }   
    }
})
export const { addNote,removeNote,editNote,searchNote} = noteSlice.actions;

export default noteSlice.reducer