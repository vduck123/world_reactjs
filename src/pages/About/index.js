import classNames from "classnames/bind";

import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import Partners from "../../components/Layout/Partners";
import Poster from "../../components/Layout/Poster";
import Wall from "../../components/Wall";

import styles from './About.module.scss'
import Menu from "../../components/Menu";
import Content from "../../components/Content";


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


    const title = "this is my test";
    const paragraphs = [
        "World Diabetes Day is a global occasion on which people with diabetes, health professionals, diabetes advocates, media, the general public and government organisations unite to raise awareness of diabetes. Your participation – both in the build-up to and following 14 November – is key to the success of the campaign. Taking part can be exciting and hugely rewarding! ",
        "The focus of the campaign in 2023 is on delaying or preventing type 2 diabetes and diabetes-related complications, with the slogan."
    ];
    const list = [
        {
            titleList:"You can support the call and raise awareness of the need for more diabetes education in a number of ways:" ,
            subList: [
                'Help individuals find out their risk of type 2 diabetes.',
                'Help individuals find out their risk of type 2 diabetes.',
                'Help individuals find out their risk of type 2 diabetes.',
                'Help individuals find out their risk of type 2 diabetes.',
            ]
        } ,
        {
            titleList:"You can support the call and raise awareness of the need for more diabetes education in a number of ways:" ,
            subList: [
                'Help individuals find out their risk of type 2 diabetes.',
                'Help individuals find out their risk of type 2 diabetes.',
                'Help individuals find out their risk of type 2 diabetes.',
                'Help individuals find out their risk of type 2 diabetes.',
            ]
        }
    ];


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
            <Content title={title} paragraphs={paragraphs} list={list} left={<Menu data={MenuItem} />} />
            <Poster />
            <Partners />
            <Footer />
        </>
    );
}

export default About;