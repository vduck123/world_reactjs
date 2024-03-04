import classNames from "classnames/bind";

import Header from "../../components/Layout/Header";
import Wall from "../../components/Wall";
import Poster from "../../components/Layout/Poster";
import Partners from "../../components/Layout/Partners";
import Footer from "../../components/Layout/Footer";

import styles from './GetInvolved.module.scss'
import Menu from "../../components/Menu";

const cx = classNames.bind(styles)

function GetInvolved() {


    const wall = {
        title: "How to get involved",
        desc: "" ,
        img: "https://worlddiabetesday.org/wddbrk/wp-content/themes/wddtheme/_/img/2023/wdd-exercise.png" ,
        btnText: "Learn more" ,
        posA: 'first' ,
        posB: 'second',
        isMain: true,
        bgColor: 'bg-green',
    } 

    const MenuItem = [
        {path: '/get-involved', name: 'Get involved'},
        {path: '/get-involved',name: 'Shine a light on diabetes'} ,
        {path: '/get-involved', name: 'Promote the blue circle'}
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

export default GetInvolved;