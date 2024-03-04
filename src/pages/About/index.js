import classNames from "classnames/bind";

import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import Partners from "../../components/Layout/Partners";
import Poster from "../../components/Layout/Poster";
import Wall from "../../components/Wall";

import styles from './About.module.scss'
import Menu from "../../components/Menu";


const cx = classNames.bind(styles)
function About() {

    const wall = {
        title: "About World Diabetes Day",
        desc: "14 November, Find out more about World Diabetes Day " ,
        img: "https://worlddiabetesday.org/wddbrk/wp-content/themes/wddtheme/_/img/2023/wdd-consultant-laptop.png" ,
        btnText: "Learn more" ,
        posA: 'first' ,
        posB: 'second',
        isMain: true,
        bgColor: 'bg-purple',
    } 

    const MenuItem = [
        {path: '/about', name: 'about'},
        {path: '/about',name: 'theme'} ,
        {path: '/about', name: 'Key messages'} ,
        {path: '/about', name: 'Facts & figures'},
        {path: '/about',name: 'Partners'} ,
        {path: '/about', name: 'Reducing the risk of type 2 diabetes'} ,
        {path: '/about', name: 'Understanding diabetes'}
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
            <div className={cx('container')}>
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

export default About;