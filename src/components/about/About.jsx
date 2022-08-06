import "./about.css"
import pic from "../../imgs/img.jpg"

const About = () => {
    return ( 
        <div className="about" id="about">
            
            <div className="left">
                <img src={pic} alt="picture" className="pic"/>
            </div>
            <div className="right">
                <h1 className="heading">About</h1>
                <p className="para">This is HRN. A undergraduate currently pursuing Btech in SVUCE.I am currently in my 3rd year of Btech.I am very passionate about learning new things.
                    So here I am trying out my hand in web development.This is a basic portfolio created in order to learn web dev.Coming to my interests, I love food and reading novels.
                    Basically I'm expert at multi-tasking especially eating while reading :).I like story telling!..I am actually very good at expressing.
                    But sometimes words fell short to express and in that times...I pour my heart out on a paper to express my feelings(I write:x).</p>
                <p className="line">
                    Apart  from these if you want to know about my technical skills...you can click below.
                </p>
                <div className="link">
                    <a href="#skills">Know more!</a>
                </div>
                
            </div>

        </div>
     );
}
 
export default About;