import classNames from "classnames/bind";

import Header from "../../components/Layout/Header";
import Wall from "../../components/Wall";
import Poster from "../../components/Layout/Poster";
import Partners from "../../components/Layout/Partners";
import Footer from "../../components/Layout/Footer";

import styles from './Media.module.scss'
import Menu from "../../components/Menu";

const cx = classNames.bind(styles)



function Media() {

    const wall = {
        title: "Media",
        desc: "The latest World Diabetes Day news and contact details for media." ,
        img: "https://worlddiabetesday.org/wddbrk/wp-content/themes/wddtheme/_/img/2023/wdd-bike.png" ,
        btnText: "Learn more" ,
        posA: 'first' ,
        posB: 'second',
        isMain: true,
        bgColor: 'bg-purple3',
    } 

    const MenuItem = [
        {path: '/media', name: 'Media'},
        {path: '/media',name: 'Diabetes Matters'} ,
    ]


    return ( 
        <>  
            <Header />
            <Wall
                title={wall.title} 
                desc={wall.desc} 
                img={wall.img}
                btnText={wall.btnText}
                btnSize={wall.btnSize} 
                posA={wall.posA}
                posB={wall.posB} 
                isMain={wall.isMain}
                bgColor={wall.bgColor}
            />
            <div className={cx('box')}>
                <div className={cx('left')}>
                    <Menu data={MenuItem} />
                </div>
                <div className={cx('right')}>
                    
                </div>
            </div>
            <Poster />
            <Partners />
            <Footer />
        </>
     );
}


export default Media;