import { useMemo, useState } from "react";
import './App.css';


function UseMemo() {


    


    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const doubleNumber=useMemo(()=>{
        return slowFunc(number);    // useeffect gibi  sadece number değeri değişirse slowFunc fonskiyonuna girer
                                    // gereksiz yere slowFunc'ı çalıştırıp programı yavaşlatmaz.
                                    //useMemo değer değiştiğinde , useCallBack fonksiyon değiştiğinde...

    },[number]);
    

    const themee={

        backgroundColor:dark ? '#333':'#FFF',
        color: dark ? '#FFF' : '#333',
    };





    return (  
        <div>
            <input className="input"

            type="number"
            value={number}
            onChange={(e)=>setNumber(e.target.value)}
            />

            <button className="buton" onClick={()=>setDark((prevDark)=>!prevDark)}>
                temayı değiştir
            </button>

            <div style={themee}>
                {doubleNumber}
            </div>
        </div>
    );
}

function slowFunc(number){
    console.log("fonksiyon çağrıldı");
    for(let i=0;i<=999999999999999999999999999999999999999;i++){
        return number*2;
    }


}

export default UseMemo;