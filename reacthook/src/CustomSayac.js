import UseCounter from "./UseCounter";

function CustomSayac() {



    
    const [sayac,increment,decrement,reset]=UseCounter();
    return ( <div>



        <h3>{sayac}</h3>
        <button onClick={increment}>Arttır</button>
        <button onClick={decrement}>Azalt</button>
        <button onClick={reset}>Sıfırla</button>




    </div> );
}

export default CustomSayac;