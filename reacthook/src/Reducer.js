import { useReducer } from "react";


function Reducer() {
    const initialValue=0;


    const reducer=(state,action)=>{
        switch(action){
            case 'increment':
                return state+1;
            case 'decrement':
                return state-1;
            case 'reset':
                return initialValue;
            default:
                return state;            
        }

    };




    const [count,dispatch]=useReducer(reducer,initialValue);
    return (  
    <div>
        <div>Değer:{count}</div>
        <button onClick={()=>dispatch('increment')}>Arttır</button>
        <button onClick={()=>dispatch('decrement')}>Azalt</button>
        <button onClick={()=>dispatch('reset')}>Sıfırla</button>
    </div>
    
    
    );
}

export default Reducer;