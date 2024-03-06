import classNames from "classnames/bind";
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({ text, to, href, primary, small, medium, large, className, onClick, ...props}) {

    const _props = {
        onClick,
        ...props
    }

    const classes = cx('wrapper', {
        primary,
        small,
        medium,
        large,
        [className]: className
    })

    let Component = 'button'

    if (to) {
        _props.to = to 
        Component = Link 
    }
    else if (href) {
        _props.href = href
        Component = 'a'
    }

    return (
        <Component className={classes} {..._props}>{text}</Component>
    );
}

export default Button;
