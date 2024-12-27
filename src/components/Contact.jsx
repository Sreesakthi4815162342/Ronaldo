import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
    return(
        <div class=" text-white py-5" id="footer">
            <h2 className="text-center ">Contact</h2>
            <div class="container mt-4">
            <div className="row d-flex align-items-center g-3 ">
                <div className="col-md-6">
                <Form.Control type="text" placeholder="Your Name"/>
                </div>
                <div className="col-md-6">
                <Form.Control type="email" placeholder="Your Email" />
                </div>
                <div>
            <Form.Control as="textarea" rows={5} placeholder='Your Message'/>
            </div>
            <span className="text-center"><Button variant="primary">Send Message</Button></span>
            </div>
            </div>
        </div>
    )
}
export default Contact;