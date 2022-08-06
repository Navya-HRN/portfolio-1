import "./skills.css"
import certificate from "../../imgs/python.pdf"
import hcertificate from "../../imgs/html.pdf"
import basic from "../../imgs/Basic.pdf"
import inter from "../../imgs/Inter.pdf"
import eng from "../../imgs/English.pdf"

const Skills = () => {
    return ( 
        <div className="skills" id="skills">
            <div className="content">

            
                <h1>Skills</h1>
                <ul>
                    <li>Python
                        <ul id="l">
                            <li className="c">certified from Prepinsta</li>
                            <a href={certificate} className="cert">View certificate</a>
                        </ul>
                        
                    </li>
                    <li>HTML
                        <ul id="l">
                            <li className="c">certified from Great Learning</li>
                            <a href={hcertificate} className="cert">View certificate</a>
                        </ul>
                    </li>
                    <li>CSS
                        <ul id="l">
                            <li className="c">certified from Great Learning</li>
                            <a href={hcertificate} className="cert">View certificate</a>
                        </ul>
                    </li>
                    <li>Basic Coding
                        <ul id="l">
                            <li className="c">certified from Prepinsta</li>
                            <a href={basic} className="cert">View certificate</a>
                        </ul>
                    </li>
                    <li>Intermediate coding
                        <ul id="l">
                            <li className="c">certified from Prepinsta</li>
                            <a href={inter} className="cert">View certificate</a>
                        </ul>
                    </li>
                    <li>English
                        <ul id="l">
                            <li className="c">certified from Coursera</li>
                            <a href={eng} className="cert">View certificate</a>
                        </ul>
                    </li>   
                </ul>
            </div>
            <div className="con">
                <p className="p">Want to know more!?</p>
                <a href="#contact" className="contact">Contact</a>
            </div>
        </div>
     );
}
 
export default Skills;