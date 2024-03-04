

import classNames from "classnames/bind";

import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import Wall from "../../components/Wall";

import styles from './YourActivity.module.scss'
import Partners from "../../components/Layout/Partners";
import Poster from "../../components/Layout/Poster";

const cx = classNames.bind(styles)

function YourActivity() {

    const walls = [
        {
            title: "Submit your activity",
            desc: "" ,
            img: "https://worlddiabetesday.org/wddbrk/wp-content/themes/wddtheme/_/img/2023/wdd-kid-ball.png" ,
            btnText: "Learn more",
            posA: 'first' ,
            posB: 'second',
            btnSize: 'large',
            isMain: true,
            bgColor: 'bg-blue',
        } ,
        {
            title: "WDD around, the world" ,
            desc: "Organize, promote and learn more about World Diabetes Day activites in your region." ,
            img: "https://worlddiabetesday.org/wddbrk/wp-content/uploads/2020/10/event_map_image.jpg" ,
            btnText: "Learn more",
            posA: 'second' ,
            posB: 'first',
            btnSize: 'small',
            isMain: false
        } 
    ]

    return ( 
        <div>
            <Header />
            <div className={cx('wrapper')}>
                {walls.map((wall,index) => {
                    return (
                        <Wall 
                            key={index}
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
                    )
                })}
            </div>
            <Partners />
            <Poster />
            <Footer />
        </div>
        
     );
}

export default YourActivity;