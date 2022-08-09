import "./home.css"
import Me from "../../imgs/img2.jpg"
import cv from "../../imgs/Resume.pdf"

const Home = () => {
    return ( 
        <div classname="container" className="home" id="home">
            <div className="first">
                <div className="first-items">
                    <h2 className="intro">Hello,This is</h2>
                    <h1 className="name">Navya</h1>
                    <div className="titles">
                        <div className="title-wrap">
                            <div className="title-item">Freelancer</div>
                            <div className="title-item">Web developer</div>                           
                            <div className="title-item">Content-writer</div>
                            <div className="title-item">Story-teller</div>
                            <div className="title-item">Artist</div>
                        </div>
                    </div>
                    <div className="desc">
                        I am a freelancer . I design and develop creative websites.
                    </div>
                    <div className="buttons">
                        <div className="cv1">
                            <a href={cv} download>Download Resume</a>
                        </div>
                        <div className="know">
                            <a href="#about">Know more!</a>
                        </div>   
                    </div>
                </div>
            </div>
            <div className="second">
                <img src={Me} alt="me" className="img"/>
            </div>
            
        </div>
     );
}
 
export default Home;