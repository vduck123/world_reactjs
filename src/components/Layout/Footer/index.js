import classNames from "classnames/bind";

import styles from './Footer.module.scss'
import Button from "../../Button";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

function Footer() {
    return ( 
        <footer className={cx('footer')}>
            <div className={cx('left')}>
                <div className={cx('left-logo')}>
                    <img src="https://worlddiabetesday.org/wddbrk/wp-content/themes/wddtheme/_/img/idf_logo_white_2023.png" alt="logo" className={cx('logo')} />
                </div>
                <div className={cx('left-desc')}>
                    The International Diabetes Federation (IDF) is an umbrella organisation of over 240 national diabetes associations in 160 countries and territories. Its mission is to improve the lives of people with diabetes and prevent diabetes in those at risk. The Federation has been leading the global diabetes community since 1950.
                </div>
                <div className={cx('left-contact')}>
                    <h3>GET IN TOUCH</h3>
                    <p>
                        Avenue Hermann-Debroux 54
                        <br />
                        wdd@idf.org
                    </p>
                </div>
                <div className={cx('left-copyright')}>
                    <p>©2024 International Diabetes Federation </p>
                </div>
            </div>
            <div className={cx('right')}>
                <div className={cx('right-subscribe')}>
                    <h3>Subscribe to our alerts</h3>
                    <input placeholder="Email address" className={cx('input')} />
                    <Button text="SUBSCRIBE" primary small className={cx('btn')} />
                </div>
                <div className={cx('right-usefull')}>
                    <h3>USEFULL LINKS</h3>
                    <Link to='/' className={cx('link')}><span>Contact us</span></Link>
                    <Link to='/' className={cx('link')}><span>International Diabetes Federation</span></Link>
                    <Link to='/' className={cx('link')}><span>IDF Diabetes Atlas</span></Link>
                    <Link to='/' className={cx('link')}><span>IDF School of Diabetes</span></Link>
                    <Link to='/' className={cx('link')}><span>Understanding Diabetes</span></Link>
                    <Link to='/' className={cx('link')}><span>Kids and Diabetes in Schools</span></Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;