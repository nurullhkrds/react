
function Obj({objjj}) {
    console.log(objjj);
    return (  
        <div className="imgDiv">
            <img className="img" src={objjj.urls.small} ></img>

        </div>
    );
}

export default Obj;