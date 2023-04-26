import { FaInstagram, FaGithub, FaSpotify, FaYoutube } from "react-icons/fa"

const Footer =() =>{
    return(
        <div className="Footer">
            <hr/>
            <div className="footerButtons">
                <p className="textButton">About Me</p>
                <p className="textButton">Contacts</p>
            </div>
            <div className="icons">
                <p className="contacts-icon"><FaInstagram/></p>
                <p className="contacts-icon"><FaGithub/></p>
                <p className="contacts-icon"><FaSpotify/></p>
                <p className="contacts-icon"><FaYoutube/></p>
            </div>
        </div>
    )
}

export default Footer;