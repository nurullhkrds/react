import '../styles/Menu.css';

function MenuItem({image,name,content,price}) {
    return ( 
        <div className="menuItem">
            <div style={{backgroundImage:`url(${image})`}}></div>
            <h1 className='titleee'>{name}</h1>
            <h6>{content}</h6>
            <p className='price'>{price} <i className='tl'>TL</i></p>




        </div>
     );
}

export default MenuItem;