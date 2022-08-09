import "./contact.css"

const Contact = () => {
    return ( 
        <div classname="container" className="ct" id="contact">
            <div className="ct-left">
                <h1 className="ct-title">Get in touch!</h1>
            </div>
            <div className="ct-right">
                <form>
                    <input type="text" placeholder="Name" name="user_name" />
                    <input type="text" placeholder="subject" name="user_subject" />
                    <input type="text" placeholder="email" name="user_email" />
                    <textarea rows="5" placeholder="message" name="message"/>
                    <button>Submit</button>
                </form>
            </div>
            
        </div>
     );
}
 
export default Contact;