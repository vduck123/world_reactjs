import classNames from "classnames/bind";

import styles from './Wall.module.scss'
import Button from "../Button";

const cx = classNames.bind(styles)

function Wall({img,title,desc,btnText,btnSize,posA,posB}) {
    return ( 
        <div className={cx('wall')}>
            <div className={cx(posA)}>
                <div className={cx('content')}>
                    <h3 className={cx('title')}>Diabetes and well-being </h3>
                    <p className={cx('desc')}>Diabetes and well-being is the theme for World Diabetes Day 2024 to 2026. More details and supporting information and resources will be available soon.</p>
                    <Button text="LEARN MORE" small primary btnSize/>
                </div>
            </div>
            <div className={cx(posB)}>
                <img src="https://worlddiabetesday.org/wddbrk/wp-content/uploads/2024/02/WDD-2023-Homepage-2.jpg" alt="image" className={cx('img')}/>
            </div>
        </div>
    );
}

export default Wall;{}