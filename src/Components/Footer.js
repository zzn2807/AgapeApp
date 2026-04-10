import {ReactComponent as Facebook} from "../img/facebook-svg.svg"
import {ReactComponent as Twitter} from "../img/twitter-svg.svg"
import {ReactComponent as Email} from "../img/email-svg.svg"
import "../css/Footer.css"
function Footer() {

    return (
        <div className="footer">
            <a href="https://www.facebook.com/profile.php?id=100054652800504"><Facebook className="icon"/></a>
            <a href="mailto:hr@hopehealthsystems.com"><Email className="icon"/></a>
            <a href="https://x.com/hopehealth_inc"><Twitter className="icon"/></a>
        </div>

    );
}

export default Footer;