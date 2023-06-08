import { useEffect, useRef, useState } from "react";

function UseRef() {

    const [name, setName] = useState('');      // useRef componentin gereksiz yere render olmamasını sağlar.
                                                   //useEffectin sürekli render edilen halini bilirisiniz :)
                                                    //Orada sürekli render olmamasını sağlayabilir mesela.
                                                    //Sadece değiştiği zaman render olmasını sağlar.
    //const [count, setCount] = useState(0);
    const ref=useRef(0);
    useEffect(()=>{                                        
        ref.current=ref.current+1;
    })



    const inputRef=useRef();                      // Bu aşağıdaki ref={inputRef} kullanımı ise focusa basıldığında
                                                 // consolelogta direk inputun html etiketini getirir.
                                                 //dolayısıyla o html etiketinin value değerine ulaşılabilir ve
                                                 // atama yapılabilr ama başka bir componente değer gönderme olmaz.


    const focusInput=()=>{
        console.log(inputRef.current)
        inputRef.current.value="can"

    }


    return ( 
    <div>                               
                                                        
        <input
            ref={inputRef}                                    
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}

        
        />
        <div>Benim adım {name}</div>
        <div>{ref.current}defa render oldu.</div>
        <button onClick={focusInput}>Focus</button>



    </div> );
}

export default UseRef;