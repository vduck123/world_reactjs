import classNames from "classnames/bind";

import Header from "../../components/Layout/Header";
import Wall from "../../components/Wall";
import Poster from "../../components/Layout/Poster";
import Partners from "../../components/Layout/Partners";
import Footer from "../../components/Layout/Footer";

import styles from './GetInvolved.module.scss'
import Menu from "../../components/Menu";
import Content from "../../components/Content";

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

export default GetInvolved;