import classNames from "classnames/bind";

import styles from './Menu.module.scss'
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

function Menu({data = []}) {

    return ( 
        <ul className={cx('list')}>
            {data.map((item,index) => {
                return (
                    <li key={index} className={cx('item')}>
                        <Link to={`${item.path}`}>{item.name}</Link>
                    </li>
                )
            })}
        </ul>
     );
}

export default Menu;