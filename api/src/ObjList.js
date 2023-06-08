import Obj from "./Obj";


function ObjList({placeHolder}) {
    console.log(placeHolder);
    return ( 
        
        <div className="imglistDiv">
            {
                placeHolder.map((objectt,key)=>{
                    return <Obj objjj={objectt} key={key}/>
                })
            }
           

        </div>

    );
}

export default ObjList;