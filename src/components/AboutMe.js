import { Link } from 'react-router-dom';

const AboutMe = () => {
    console.log("Hiii")
    return(
        <div>
            <div className="headerButtons">
                <Link to='/paintings' className="textButton">Paintings</Link>
                <Link to='/paintings' className="textButton">About Me</Link>
            </div>
            <div className="aboutMe">
                <div className="aboutMePic">
                    <img src='../../images/profilePic.jpg' alt="Profile Picture" className="profilePic"/>
                </div>
                <div className="aboutMeInfo">
                    <h2>About Me</h2>
                    <p>My name is Carolina, I started to paint watercolors as a hobby when I was in high school. Firstly I only painted pictures I found online and then I started to paint the pictures from photos I took. </p>
                    <p className="textButton btnSpace">Take a look at my paintings</p>
                </div>
            </div>
        </div>
    )
}


export default <AboutMe />;