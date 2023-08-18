
function Footer({setBtnState,setCompletedData,completedData,setFullData,fullData}) {

  
  const eventHandler=(selectBtn)=>{
    setBtnState(selectBtn)
    if(selectBtn=='DeleteCompleted'){
      const newFulldata=fullData.filter((item)=>item.isActive!=true)


      setFullData(newFulldata)
      setCompletedData([])

      
    }

}
  return (
    <div className="footer">

      <button onClick={()=>eventHandler("All")} >All</button>
      <button onClick={()=>eventHandler("Active")} >Active</button>
      <button onClick={()=>eventHandler("Completed")} >Completed</button>
      <button onClick={()=>eventHandler("DeleteCompleted")} >Clear Completed</button>


     

    </div>
  )
}

export default Footer