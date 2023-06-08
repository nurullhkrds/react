import { useState, useTransition } from "react";
function UseTransition() {

    const [input, setInput] = useState('');
    const [myList, setMyList] = useState([]);   //Girilen değer dikkat edilirse aşşağıdaki değer geldikten sonra
                                                //geliyor ve bu işimize gelmez.
                                                //aşağıdaki döngüye girmeden bizim yazdığımız değer inputta gözükmeli
    const[isPending,startTransition]=useTransition();

                                            //is pending true oldğu zaman transition arasına aldığımız yani gecik-
                                            //mesini istediğimz alan kullanılıyordur.
                                            //false olduğu zaman ztn yazılacaktır.
                                            //startTransition ise gecikecek yer öncelik vermediğimiz yer.

    const handleChange=(e)=>{               //normalde burası bir kere render ediliyor ama useTransition ile iki kez
                                            //kez render edilir.
        setInput(e.target.value)
        const myArray =[]


        startTransition(()=>{

            for(let i=0;i<2000;i++){
                myArray.push(e.target.value)
            }
            setMyList(myArray)
        })
      


    };

    return ( <div>
        

        <input

        type="text" value={input} onChange={handleChange} 
        />
        {   isPending ? "Yükleniyor..."
        : myList.map((value,key)=>{
                return <div key={key}> {value} </div>

            })
        }





    </div> );
}

export default UseTransition;