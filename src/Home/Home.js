import homelogo from "../assets/homelogo.png"
import "./Home.css";

const Home = () => {
    return (
        <section id="HOME">
            <div className="box image-box">
                <img src={homelogo} alt="homelogo" />
            </div>
            <div className="box content-box">
                <p className="first-text">Kia Ora,</p>
                <p className="first-text">I'm a</p>
                <p className="second-text">Full Stack Developer</p>
                <p className="third-text">Cloud Engineer</p>
                <p className="fourth-text">DevOps Engineer</p>
            </div>
        </section>
    )
}

export default Home;