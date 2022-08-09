import "./nav.css"
import {AiFillHome} from "react-icons/ai"
import {FaUser} from "react-icons/fa"
import {FaBookReader} from "react-icons/fa"
import {FaPhoneAlt} from "react-icons/fa"

const Nav = () => {
    return ( 
        <nav classname="nav">
            <div className="navitems">
                <a href="#"><AiFillHome/></a>
                <a href="#about"><FaUser/></a>
                <a href="#skills"><FaBookReader/></a>
                <a href="#contact"><FaPhoneAlt/></a>
            </div>
        </nav>
     );
}
 
export default Nav;