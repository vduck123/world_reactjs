import classNames from "classnames/bind";

import styles from './Partners.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function Partners() {

    const handleBtnUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return ( 
        <div className={cx('box')}>
            <h3>Official partners World Diabetes Day 2023</h3>
            <ul className={cx('list-partner')}>
                <li className={cx('partner-item')}>
                    <img src="https://worlddiabetesday.org/wddbrk/wp-content/uploads/2021/06/AstraZeneca-358px-1.png" alt="partner" />
                </li>
                <li className={cx('partner-item')}>
                    <img src="https://worlddiabetesday.org/wddbrk/wp-content/uploads/2023/08/Dexcom-358px.png" alt="partner" />
                </li>
                <li className={cx('partner-item')}>
                    <img src="https://worlddiabetesday.org/wddbrk/wp-content/uploads/2020/07/WDD-partner-Lilly-web.jpg" alt="partner" />
                </li>
                <li className={cx('partner-item')}>
                    <img src="https://worlddiabetesday.org/wddbrk/wp-content/uploads/2021/06/Merck-358px.png" alt="partner" />
                </li>
                <li className={cx('partner-item')}>
                    <img src="https://worlddiabetesday.org/wddbrk/wp-content/uploads/2022/08/Novo-logo-new-358px.png" alt="partner" />
                </li>
                <li className={cx('partner-item')}>
                    <img src="https://worlddiabetesday.org/wddbrk/wp-content/uploads/2022/06/sanofi-logo-new-358px.jpg" alt="partner" />
                </li>
            </ul>
            <button className={cx('btn-up')} onClick={() => handleBtnUp()}>
                <FontAwesomeIcon icon={faChevronUp} />
            </button>
        </div>
     );
}

export default Partners;