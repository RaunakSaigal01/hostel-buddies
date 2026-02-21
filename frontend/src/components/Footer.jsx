import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
function Footer(){
    return(
        <footer className="footer">
        <div className="container">
            <div className="footer-content">
                <div className="footer-social">
                    <a href="https://www.linkedin.com/in/shashwat-trivedi-4a11a2290/" className="social-link" target='_blank'><FontAwesomeIcon icon={faLinkedin} style={{color:'#000000ff'}} /></a>
                    <a href="https://github.com/shashwat702" className="social-link" target='_blank'><FontAwesomeIcon icon={faGithub} style={{color:'#000000'}}/></a>
                </div>
            </div>
        </div>
    </footer>

    )
}
export default Footer;