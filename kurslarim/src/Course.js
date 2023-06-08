function Course({data,removeCourse}) {

    

    return (    
        <div className="card">
            <p className="baslık">{data.title} </p>
            <p className="fiyat">{data.price} <span >TL</span> </p>
            <p className="paragraf">{data.content}</p>
            <button className="sil" onClick={()=> removeCourse(data.id)} >Sil</button>
        </div>


        



    );
}

export default Course;