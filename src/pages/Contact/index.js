import classNames from "classnames/bind";

import Header from "../../components/Layout/Header";
import Wall from "../../components/Wall";

import styles from './Contact.module.scss'
import Poster from "../../components/Layout/Poster";
import Partners from "../../components/Layout/Partners";
import Footer from "../../components/Layout/Footer";

const cx = classNames.bind(styles)

function Contact() {

    
    const wall = {
        title: "Contact us",
        desc: "" ,
        img: "https://worlddiabetesday.org/wddbrk/wp-content/themes/wddtheme/_/img/2023/wdd-consultant-salad-person.png" ,
        btnText: "Learn more" ,
        posA: 'first' ,
        posB: 'second',
        isMain: true,
        bgColor: 'bg-purple2',
    } 


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

export default Contact;