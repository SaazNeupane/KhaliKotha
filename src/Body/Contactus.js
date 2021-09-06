import { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div class="container">
                    <div class="form">
                        <div class="contact-info">
                            <h3 class="title">Let's get in touch</h3>
                            <p class="text"> Contact us with the following details. </p>
                            <div class="info">
                                <div class="social-information"> <i class="fa fa-map-marker"></i>
                                    <p>Koteshwor-32,Kathmandu</p>
                                </div>
                                <div class="social-information"> <i class="fa fa-envelope-o"></i>
                                    <p>khalikotha@gmail.com</p>
                                </div>
                                <div class="social-information"> <i class="fa fa-mobile-phone"></i>
                                    <p>+977-9861320771 </p>
                                </div>
                            </div>
                            <div class="social-media">
                                <p>Connect with us:</p>
                                <div class="social-icons"> <a href="/#"> <i class="fa fa-facebook-f"></i> </a> <a href="/#"> <i class="fa fa-twitter"></i> </a> <a href="/#"> <i class="fa fa-instagram"></i> </a> </div>
                            </div>
                        </div>
                        <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14133.192417652861!2d85.33556683068089!3d27.677179874868894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f2804a02bf%3A0x85468199859b2d8d!2sKoteshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1617721418524!5m2!1sen!2snp" width="400" height="300" styles="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact;