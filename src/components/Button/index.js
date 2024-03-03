import classNames from "classnames/bind";

import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({text,primary,small,medium,large,className}) {

    const classes = cx('wapper',{
        primary,
        small,
        medium,
        large,
        [className]: className
    })

    return ( 
        <button className={classes}>{text}</button>
    );
}

export default Button;