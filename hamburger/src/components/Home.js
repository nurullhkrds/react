import BannerImage from '../helperImage/banneryeni.jpg';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
function Home() {
    return ( 
        <div  className="mainPage"
        style={{backgroundImage:`url(${BannerImage})`}}>
            <div className='order'>
                <Link to={"/menu"}>
                    <button>Sipariş Ver</button>

                </Link>


            </div>

        </div>
     );
}

export default Home;