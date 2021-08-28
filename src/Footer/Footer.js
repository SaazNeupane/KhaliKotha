import { Component } from "react";

import 'font-awesome/css/font-awesome.min.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <footer className="footer">
                        <div className="col-md-12">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-3 m-b-30">
                                        <div className="footer-title m-t-5 m-b-20 p-b-8">
                                            About us </div>

                                        <p className="white-text">
                                            Kotha Khali is a place where you can find your ideal room.</p>
                                    </div>
                                    <div className="col-md-3 m-b-30">
                                        <div className="footer-title m-t-5 m-b-20 p-b-8">
                                            Category
                                        </div>
                                        <div className="footer-links">
                                            <a href="/">
                                                Hostel</a>
                                            <a href="/">
                                                House</a>
                                            <a href="/">
                                                Shop</a>
                                            <a href="/">
                                                Apartment</a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 m-b-30">
                                        <div className="footer-title m-t-5 m-b-20 p-b-8">
                                            Quick Links</div>
                                        <div className="footer-links">
                                            <a href="/rules">
                                                How does it work?</a>
                                            <a href="/rules">
                                                Ad Posting Rule </a>
                                            <a href="/terms">
                                                Terms and Conditions</a>
                                            <a href="/terms">
                                                Privacy policy</a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 m-b-30">
                                        <div className="footer-title m-t-5 m-b-20 p-b-8">
                                            Support</div>
                                        <div className="footer-links">
                                            <a href="/contactus">
                                                Contact Us</a>
                                        </div>
                                        <div className="footer-links">
                                            <a href="/contactus">
                                                Customer Service</a>
                                        </div>

                                        <div className="footer-social-links m-t-30">
                                            <li>
                                                <a href="https://www.facebook.com/">
                                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                                </a>
                                                <a href="https://twitter.com">
                                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                                </a>
                                                <a href="https://www.instagram.com/">
                                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    <div className="footer-bottom">
                        Copyright © 2021, All Rights Reserved
                                        </div>
                </footer>

            </div >
        )
    }
}
export default Footer;