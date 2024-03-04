import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from './Poster.module.scss'

const cx = classNames.bind(styles)

function Poster() {
    return ( 
        <div className={cx('container')}>
            <div className={cx('list-post')}>
                <Link to='/about' className={cx('post-item')}>
                    <img src="https://worlddiabetesday.org/wddbrk/wp-content/uploads/2021/09/link_image_about.png" alt="poster" className={cx('poster')}/>
                    <span className={cx('desc')}>How to get involved</span>
                </Link>
                <Link to='/get-involved' className={cx('post-item')}>
                    <img src="https://worlddiabetesday.org/wddbrk/wp-content/uploads/2021/09/link_image_world.png" alt="poster" className={cx('poster')}/>
                    <span className={cx('desc')}>Resources</span>
                </Link>
                <Link to='/resource' className={cx('post-item')}>
                    <img src="https://worlddiabetesday.org/wddbrk/wp-content/uploads/2021/09/link_image_resources.png" alt="poster" className={cx('poster')}/>
                    <span className={cx('desc')}>Wdd around the world</span>
                </Link>
            </div>
        </div>
     );
}

export default Poster;