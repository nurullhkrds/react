import React, { useState } from "react";
import "../styles/InputForm.css";
import { BsFillPatchPlusFill } from "react-icons/bs";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { addNote } from "../redux/slider/NoteSlider";

function InputForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote({ id: nanoid(), title: title, desc: desc,color:color }));
    setTitle("")
    setDesc("")
  };

  return (
    <div>
      <div
        data-bs-whatever="Add"
        type="button"
        className="addTodo"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <BsFillPatchPlusFill style={{ width: "100px", height: "100px" }} />
      </div>

      <section>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add To Do
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
                  Add
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

export default InputForm;
