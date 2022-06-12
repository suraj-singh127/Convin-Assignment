import './Footer.scss';
import logo from './logo.svg'
import fbLogo from './fblogo.svg'
import twitterLogo from './twitterLogo.svg';
import linkedin from './linkedin.svg';
import insta from './instagram.svg';

const Footer = () => {
    return(
        <div className='footer'>
            <div className='logo'>
            <a href="https://www.convin.ai/" target="__blank"><img src={logo} alt="logofooter"/></a>
            </div>
            <div className='socials'>
                <p className='text'>Follow us on - </p>
                <div className='logos'>
                    <a href="https://www.facebook.com/getconvinAi" target="__blank"><img src={fbLogo} alt='FBlogo'/></a>
                    <a href="https://twitter.com/getconvinAi" target="__blank"><img src={twitterLogo} alt='Twitterlogo'/></a>
                    <a href="https://www.linkedin.com/company/convin/" target="__blank"><img src={linkedin} alt='fblogo'/></a>
                    <a href="https://www.instagram.com/getconvinai/" target="__blank"><img src={insta} alt='fblogo'/></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;