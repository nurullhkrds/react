import '../styles/Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
function Footer() {
    return (
    <div className="footer">
        <div className="socialMedia">
            <FacebookIcon/>
            <InstagramIcon/>
            <YouTubeIcon/>
   
        </div>
        <p>
            Tüm Haklar Saklıdır | Burger Yiyelim

        </p>



    </div> );
}

export default Footer;