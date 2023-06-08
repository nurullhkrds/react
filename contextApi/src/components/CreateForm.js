import {useState} from 'react';
import { useContext } from 'react';
import TasksContext from '../context/Tasks';



function CreateForm({value,isClickEdit}) {
    const {handleEditByValue,handleCreat}=useContext(TasksContext);

    const [tittle, setTittle] = useState(value ? value.tittle:"");
    const [desc, setDesc] = useState(value ? value.desc:"");

    const handleChange=(e) =>{
        setTittle(e.target.value)
    };
    const handleChangeDesc=(e) =>{
        setDesc(e.target.value)
    };
    const handleSubmit=(e) =>{
        if(isClickEdit){
            handleEditByValue(value.id,tittle,desc)
        }
        else{
            handleCreat(tittle,desc)
        }
        setTittle("");
        setDesc("");
    };
    return ( 
        <div>
            {
                isClickEdit ? <>
          <div className="div-form-update">
                <form className="task-form-update">
                    <label className="form-label-update">Başlık</label>
                    <input className="form-input-update"  value={tittle} onChange={handleChange}></input>
                    <label className="form-label update">Task Giriniz!</label>
                    <textarea className="area-input-update" value={desc} onChange={handleChangeDesc} ></textarea>
                    <button className="form-button-update" onClick={handleSubmit}>Düzenle</button>
                </form>
            </div>

                 </> 
                :

                <div className="div-form">
                <form className="task-form">
                    <label className="form-label">Başlık</label>
                    <input className="form-input"  value={tittle} onChange={handleChange}></input>
                    <label className="form-label">Task Giriniz!</label>
                    <textarea className="area-input" value={desc} onChange={handleChangeDesc} ></textarea>
                    <button className="form-button" onClick={handleSubmit}>Oluştur</button>
                </form>
            </div>

            }
        </div>
        






     );
}

export default CreateForm;