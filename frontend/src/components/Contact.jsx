import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLetterboxd, faMailchimp, faReadme, faSquareLetterboxd, faTelegramPlane} from '@fortawesome/free-brands-svg-icons';
function Contact(){
    return(
        <section id="contact" className="contact" data-aos="zoom-out">
        <div className="container">
            <div className="contact-content">
                <div className="contact-info">
                    <h1 id="beta">Let's Connect !</h1>
                    <br />
                    <div className="contact-methods">
                        <div className="contact-method">
                            <p><FontAwesomeIcon icon={faReadme} /> &nbsp;
                            <span>raunaksaigal01@gmail.com</span>
                            <br /> <br /><FontAwesomeIcon icon={faReadme} /> &nbsp;
                            <span>bbb43192@gmail.com</span>
                            </p>
                        </div>
                    </div>
                </div>
                <button type="" className="btn btn-primary">
                            <span
  onClick={() =>
    (window.location.href =
      "https://mail.google.com/mail/u/1/#inbox?compose=DmwnWrRmTwnQwPCrzNFzzzqJpMqFcdMXvBDPxBXJPwTWJhRDhjRXXGNcqMjNSbFFsxMFfrWBDSLg")}>Send Message</span>

                            <FontAwesomeIcon icon={faTelegramPlane} style={{color:'golden-rod'}}/>
                </button>
            </div>
        </div>
    </section>
    )
}
export default Contact;