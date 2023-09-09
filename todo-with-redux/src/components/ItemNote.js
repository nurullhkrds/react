import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/ItemNote.css";
import { BsTrash } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { removeNote,editNote } from "../redux/slider/NoteSlider";

function ItemNote() {
  const dispatch = useDispatch();

  const notes = useSelector((state) => state.notes.filteredNotes);
  const [note, setNote] = useState()

   
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editNote({id:note.id,title:title,desc:desc,color:color}))
    
  
  };


  const handleEdit =async (id) =>{
    const note=await notes.find((note)=>note.id===id)
    setNote(note)
    setTitle(note.title)
    setDesc(note.desc)
    setColor(note.color)

  }



  return (
    <div className="container">
      <div className="row">
        {notes.map((note) => {
          return (
            <div
              style={{ background: note.color }}
              className="col-sm-4 itemNote"
              key={note.id}
            >
              <h4 style={{ padding: "15px", marginTop: "5px" }}>
                {note.title}
              </h4>
              <div style={{ marginLeft: "170px" }}>
                <BsTrash
                  className="deleteIcon"
                  onClick={() => dispatch(removeNote(note.id))}
                />
                <BiEdit
                  type="button"
                  data-bs-whatever="Edit"
                  data-bs-toggle={note===null?"":"modal"}
                  data-bs-target="#exampleeModal "
                  className="editIcon"
                  onClick={()=>handleEdit(note.id)}
                />
              </div>

              <hr></hr>
              <p>{note.desc}</p>
            </div>
          );
        })}
        
       
      </div>
      <section>
      <div
          className="modal fade"
          id="exampleeModal"
          tabIndex="-1"
          aria-labelledby="exampleeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleeModalLabel">
                  Edit To Do
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Title:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      value={title}
                      onChange={(e) => setTitle(() => e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message-text" className="col-form-label">
                      Description:
                    </label>
                    <textarea
                      value={desc}
                      onChange={(e) => setDesc(() => e.target.value)}
                      className="form-control"
                      id="message-text"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  onClick={handleSubmit}
                  data-bs-dismiss="modal"
                  type="button"
                  className="btn btn-primary"
                >
                  Edit
                </button>

                <section>
                  <div className="btnColorDiv">
                    <button onClick={(e)=>setColor(e.target.value)} value="#ffc0cb" className="btnColor pink"></button>
                    <button onClick={(e)=>setColor(e.target.value)} value="#800080" className="btnColor purple"></button>
                    <button onClick={(e)=>setColor(e.target.value)} value="#ffff00" className="btnColor yellow"></button>
                    <button onClick={(e)=>setColor(e.target.value)} value="#4682b4" className="btnColor blue"></button>
                    <button onClick={(e)=>setColor(e.target.value)} value="#00ff7f" className="btnColor green"></button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
  
      </section>
    </div>
  );
}

export default ItemNote;
