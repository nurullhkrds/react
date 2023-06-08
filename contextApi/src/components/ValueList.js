import ShowValue from "./ShowValue";
import { useContext } from 'react';
import TasksContext from '../context/Tasks';

function ValueList() {
    const {transValue}=useContext(TasksContext);

    return ( 
        <div className="listValue">
            {
                transValue.map((value,key)=>{
                    return <ShowValue value={value} key={key}  />

                })

            }
        </div>
     );
};

export default ValueList;