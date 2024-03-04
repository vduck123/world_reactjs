
import classNames from "classnames/bind";

import styles from './Wall.module.scss'
import Button from "../Button";

const cx = classNames.bind(styles)

function Wall({
    img,
    title,
    desc,
    btnText,
    posA,
    posB,
    bgColor='bg-white',
    isMain=false
}) {
    
    const wallClasses = cx('wall', {
        [bgColor]: bgColor
    });

    

    return ( 
        <div className={wallClasses}>
            <div className={cx(posA)}>
                {isMain 
                    ? 
                        <div className={cx('content-main')}>
                            <h3 className={cx('title-main')}>{title} </h3>
                            <p className={cx('desc-main')}>{desc}</p>
                            <Button text={btnText} large primary />
                        </div>
                    : 
                    <div className={cx('content')}>
                        <span className={cx('title')}>{title} </span>
                        <p className={cx('desc')}>{desc}</p>
                        <Button text={btnText} small primary />
                    </div> 
                }
                
            </div>
            <div className={cx(posB)}>
                <img src={img} alt="image" className={cx('img')}/>
            </div>
        </div>
    );
}

export default Wall;
