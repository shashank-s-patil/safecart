import './footer.css';

export const Footer = () => {

    return (

        <div className='container-fluid' id='footer-container'>
             <div className="row pt-4">
                <div className="col-lg-3 col-md-6 col-12" id='footer-div1'>
                    <div className='div1-outer'>                     
                        <img src={require('../../../assets/images/safecart_footer_logo.png')}/>
                        <p className='footer-para mt-4'>The best multi-vendor ecommerce <br /> website for you. You can easily buy your <br /> product according to your choice.</p>
                        <div className='footer-social-links mt-4'>
                            <div className='foot-link'>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                            </div>

                            <div className='foot-link'>
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                            </div>

                            <div className='foot-link'>
                                <a href="#"><i class="fab fa-accessible-icon"></i></a>
                            </div>

                            <div className='foot-link'>
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-12" id='footer-div2'>
                    <div className='div2-outer'>
                        <span>Helpful Links</span><br />
                        <a href="/">Home</a><br />
                        <a href="/blog">Blog</a><br />
                        <a href="/contact">Contact</a><br />
                        <a href="#">Shop Page</a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-12" id='footer-div3'>
                    <div className='div3-outer'>
                        <span>Store Info</span><br />
                        <a href="#">Dhaka, Bangladesh</a><br />
                        <a href="#">0113213131322</a><br />
                        <a href="#">support@safecart.com</a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-12" id='footer-div4'>
                    <div className='div4-outer'>
                        <span>Get In Touch</span><br />
                        <p>Sign up to our mailing list now!</p>

                        <div className='div4-mail-send'>
                            <input type="text" placeholder="Your mail here"/>
                            <i class="bi bi-send"></i>
                        </div>                      
                    </div>
                </div>

                <hr />

                <div className="col-lg-12" id='footer-copyright'>
                    <p className='footer-last-para'>© 2024 All right reserved by Bytesed MN</p>
                </div>
                
             </div>


        </div>

    );
};