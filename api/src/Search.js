import { useState } from 'react';

function Search({search}) {

    const [value, setValue] = useState('')

    const handleSubmitForm=(e)=>{
        e.preventDefault();
        search(value);
    };
    const handleChange=(e)=>{
        setValue(e.target.value);

    };
    return ( 
        <div className="SearchDiv">
            <form onSubmit={handleSubmitForm}>
                <label>Ne Arıyorsunuz ?</label>
                <input className='inputS' onChange={handleChange} value={value}></input>
            </form>
        </div>
     );
}

export default Search;