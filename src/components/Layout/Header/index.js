import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles);

function Header() {
    return ( 
        <header className={cx('header')}>
            <div className={cx('left')}>
                <Link to='/'>
                    <img id='logo' src="https://worlddiabetesday.org/wddbrk/wp-content/uploads/2023/04/wdd_logos_2023.png" alt="logo" />
                </Link>  
            </div>
            <div className={cx('right')}>
                <div className={cx('countdown')}>
                    <span className={cx('countdown-num')}>255 days</span>
                    <span className={cx('countdown-text')}>to go until World Diabetes Day</span>
                </div>
                <div  className={cx('nav-list')}>
                    <Link to='/about' className={cx('nav-item')}>ABOUT WDD</Link>
                    <Link to='/get-involved' className={cx('nav-item')}>GET INVOLVED</Link>
                    <Link to='/resource' className={cx('nav-item')}>RESOURCES</Link>
                    <Link to='/your-activity' className={cx('nav-item')}>YOUR ACTIVITY</Link>
                    <Link to='/media' className={cx('nav-item')}>MEDIA</Link>
                    <Link to='/contact' className={cx('nav-item')}>CONTACT</Link>
                </div>
            </div>
            
        </header>
    );
}

export default Header;
