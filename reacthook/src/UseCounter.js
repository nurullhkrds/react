import { useState } from "react";

function UseCounter() {         //kendimiz bir hooks oluştaracaksak eğer başına use koyarız ve oluştururuz.
                                // temel kodları burada yazarız kullanmak istediğimi zaman istediğimiz componentte
                                // importunu sağlayarak kullanırız.
                                //yani custom(özel) hooks tanımlaması yaparız.
  

const [sayac, setSayac] = useState(0);

const increment=()=>{
    setSayac((prev)=>prev+1)
};
const decrement=()=>{
    setSayac((prev)=>prev-1)
};
const reset=()=>{
    setSayac(0)
};

return [sayac, increment,decrement,reset];




}

export default UseCounter;