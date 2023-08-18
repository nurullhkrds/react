import React, { useEffect, useState } from "react";
import "./list.css";

function List({
  data,
  setData,
  setCompletedData,
  completedData,
  fullData,
  btnState,
  openToDoList
}) {
  const handleChange = (e) => {
    let idd = e.target.id;
   
      if (e.target.checked == true) {
        const item = data.find((item) => item.id == idd);

        item.isActive = item.isActive ? false : true;
        setCompletedData((prev) => [...prev, item ]);
        const newData = data.filter((item) => item.id != idd);
        setData(newData);
        /////////////////////////////////////////////////////
        const fullDataUpdate=fullData.find((item)=>item.id==idd)
        fullDataUpdate.isActive=true;
        fullData.forEach(item => {
            if(item.id==fullDataUpdate.id){
                item=fullDataUpdate;
            }

            
        });




      } else if (e.target.checked == false) {
        const item = completedData.find((item) => item.id == idd);
        item.isActive=item.isActive?false:true;
        const newData=completedData.filter((item)=>item.isActive==true)
        setCompletedData(newData)
        setData((prev) => [...prev,item]);
        ////////////////////////////////////////
        const fullDataUpdate=fullData.find((item)=>item.id==idd)
        fullDataUpdate.isActive=false;
        fullData.forEach(item => {
            if(item.id==fullDataUpdate.id){
                item=fullDataUpdate;
            }

            
        });





      }
    
  };

  return (
    <div>
      <>
      {
        openToDoList ?  <ul>
        {btnState == "Active" &&
          data.map((item) => {
            return (
              <li key={item.id}>
                <input className="checkboxInput"
                  type="checkbox"
                  id={item.id}
                  onChange={handleChange}
                  checked={item.isActive}
                />
                 <p> {item.todo}</p>
              </li>
            );
          })}
        {btnState == "Completed" &&
          completedData.map((item) => {
            return (
              <li key={item.id}>
                <input 
                 className="checkboxInput"
                  type="checkbox"
                  id={item.id}
                  onChange={handleChange}
                  checked={item.isActive}
                />
                  <p> {item.todo}</p>
              </li>
            );
          })}

          {
            btnState=='All'&& fullData.map((item)=>{
                return (
                  
                    <li className={item.isActive?'completed':null} key={item.id}>
                    <input
                     className="checkboxInput"

                      type="checkbox"
                      id={item.id}
                      onChange={handleChange}
                      checked={item.isActive}
                    />
                    <p> {item.todo}</p>
                   
                  </li>
                )
            })

          }

        
      </ul>:null
      }
      
      
      </>
      
      
     
    </div>
  );
}

export default List;
