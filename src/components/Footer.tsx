
export const Footer = () => {
    return (
        <footer  className='footer'>
            <div className="footer__container">
                <div className="footer__content">
                    <div className="footer__conect">
                        <div className="footer__logo"><img src="src/assets/icons/logo.svg" alt="logo" />Zone.</div>
                        <div className="footer__contact">
                        <div className="footer__location"><img src="src/assets/icons/footer/Location.svg" alt="Location" />Dhaka, Bangladesh</div>
                        <div className="footer__tel"><img src="src/assets/icons/footer/Calling.svg" alt="Calling" />0943833399</div>
                        <div className="footer__mail"><img src="src/assets/icons/footer/Message.svg" alt="Message" />support@zone.com</div>
                        </div>
                        
                        <div className="footer-media">
                            <a href='/' className="footer-media__icon">
                                <img src="src/assets/icons/footer/ic-facebook.svg" alt="facebook" />
                            </a>
                            <a href='/' className="footer-media__icon">
                                <img src="src/assets/icons/footer/ic-twitter.svg" alt="twitter" />
                            </a>
                            <a href='/' className="footer-media__icon">
                                <img src="src/assets/icons/footer/ic-instagram.svg" alt="instagram" />
                            </a>
                            <a href='/' className="footer-media__icon">
                                <img src="src/assets/icons/footer/ic-pinterset.svg" alt="pinterset" />
                            </a>
                        </div>
                    </div>
                    <div className="footer__service">
                        <ul className="footer__list">
                            <li>
                                <div className="footer__title">Service</div>
                            </li>
                            <li>
                                <a href="/" className="footer__link">Order Management</a>
                            </li>
                            <li>
                                <a href="/" className="footer__link">Social Assistant</a>
                            </li>
                            <li>
                                <a href="/" className="footer__link">Crypto Platform</a>
                            </li>
                            <li>
                                <a href="/" className="footer__link">Analyzer of the News</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__company">
                        <ul className="footer__list">
                            <li>
                                <div className="footer__title">Company</div>
                            </li>
                            <li>
                                <a href="/" className="footer__link">About Us</a>
                            </li>
                            <li>
                                <a href="/" className="footer__link">News</a>
                            </li>
                            <li>
                                <a href="/" className="footer__link">Our trusted partner</a>
                            </li>
                            <li>
                                <a href="/" className="footer__link">New users FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer_supports">
                        <ul className="footer__list">
                            <li>
                                <div className="footer__title">Supports</div>
                            </li>
                            <li>
                                <a href="/" className="footer__link">Help center</a>
                            </li>
                            <li>
                                <a href="/" className="footer__link">Feedbcak</a>
                            </li>
                            <li>
                                <a href="/" className="footer__link">Contact us</a>
                            </li>
                            <li>
                                <a href="/" className="footer__link">Terms conditins</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer_resources">
                        <ul className="footer__list">
                            <li>
                                <div className="footer__title">Resources</div>
                            </li>
                            <li>
                                <a href="/" className="footer__link">Download app</a>
                            </li>
                            <li>
                                <a href="/" className="footer__link">Blog</a>
                            </li>
                            <li>
                                <a href="/" className="footer__link">What’s new</a>
                            </li>
                            <li>
                                <a href="/" className="footer__link">Sitemap</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="footer__bottom">
                <div className="footer__copiwrhite">© 2021 Zone. - All rights reserved.</div>
                <div className="footer-defense">
                    <a href="/" className="footer-defense__link">Privacy</a>
                    <a href="/" className="footer-defense__link">Security</a>
                    <a href="/" className="footer-defense__link">Terms</a>
                </div>
            </div>

        </footer>
    )
}
