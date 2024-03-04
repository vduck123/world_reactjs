import classNames from "classnames/bind";

import Header from "../../components/Layout/Header";
import Wall from "../../components/Wall";
import Poster from "../../components/Layout/Poster";
import Partners from "../../components/Layout/Partners";
import Footer from "../../components/Layout/Footer";

import styles from './Resource.module.scss'
import Menu from "../../components/Menu";

const cx = classNames.bind(styles)



function Resource() {

    const wall = {
        title: "Resources",
        desc: "" ,
        img: "https://worlddiabetesday.org/wddbrk/wp-content/themes/wddtheme/_/img/2023/wdd-salad.png" ,
        btnText: "Learn more" ,
        posA: 'first' ,
        posB: 'second',
        isMain: true,
        bgColor: 'bg-red',
    } 

    const MenuItem = [
        {path: '/resource', name: 'Resources'},
        {path: '/resource',name: 'Logo'} ,
        {path: '/resource', name: 'Ppster'} ,
        {path: '/resource', name: 'Infographics'},
        {path: '/resource',name: 'Toolkit'} ,
        {path: '/resource', name: 'Web banners and social visuals'} ,
        {path: '/resource', name: 'Videos'},
        {path: '/resource',name: 'Merchandise'} ,
        {path: '/resource', name: 'Blue circle selfie app'} ,
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

export default Resource;