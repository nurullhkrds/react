import Course from "./Course";
import { useState } from "react";
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'


function Courses({data,removeCourse}) {

    const [index, setIndex] = useState(0);
    const{content,title,price}=data[index];





    const prev=()=>{

        setIndex((index)=>{
            let newIndex=index-1;
            return chechIndex(newIndex);
        })

    };
  
    const nextB=()=>{

        setIndex((index)=>{
            let newIndex=index+1;
            return chechIndex(newIndex);
        });


    };
    const chechIndex=(index)=>{
        if(index<0){
            return data.length-1;
        }
        if(index>data.length-1){
            return 0;
        }

        return index;



    };

    const randomm=()=>{
        let rand=Math.floor(data.length*Math.random())
        if(rand===index){
            return rand=index+1;
        }

        setIndex(chechIndex(rand));

     

    };



    return ( 
    <>
     <div className="kurslarım">KURSLARIM</div>
     <button onClick={randomm} className="Random">Kurs Ata!</button>
                  
         <div className="cardGenel">

            <button className="prev" onClick={prev}><FaChevronLeft/></button>

         <div className="card">
            <p className="baslık">{title} </p>
            <p className="fiyat">{price} <span >TL</span> </p>
            <p className="paragraf">{content}</p>
        
        </div>
        <button onClick={nextB} className="next"><FaChevronRight/></button>
          </div> 
        </>
  
    );
}

export default Courses;