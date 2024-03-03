import classNames from "classnames/bind";

import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import Wall from "../../components/Wall";

import styles from './Home.module.scss'
import Partners from "../../components/Layout/Partners";

const cx = classNames.bind(styles)

function Home() {

    const walls = [
        {
            title: "Know your risk, Know your response",
            desc: "1 in 10 adults worldwide have diabetes. Over 90% have type 2 diabetes. Close to half are not yet diagnosed. In many cases, type 2 diabetes and its complications can be delayed or prevented by adopting and maintaining healthy habits. Knowing your risk and what to do is important to support prevention, early diagnosis and timely treatment." ,
            img: "https://worlddiabetesday.org/wddbrk/wp-content/themes/wddtheme/_/img/2023/wdd-consultant-patient.png" ,
            btnText: "Do you know your risk?",
            posA: 'first' ,
            posB: 'second',
            btnSize: 'large',
            isMain: true,
            bgColor: 'bg-blue',
        } ,
        {
            title: "Diabetes and well-being" ,
            desc: "Diabetes and well-being is the theme for World Diabetes Day 2024 to 2026. More details and supporting information and resources will be available soon." ,
            img: "https://worlddiabetesday.org/wddbrk/wp-content/uploads/2024/02/WDD-2023-Homepage-2.jpg" ,
            btnText: "Learn more",
            posA: 'first' ,
            posB: 'second',
            btnSize: 'small',
            isMain:false
        } ,
        {
            title: "Support our call to action to policymakers" ,
            desc: "Take part in the World Diabetes Day 2023 call to action. Send a letter to your national health minister or Permanent Mission to the United Nations in Geneva using our online tool and ask them to dedicate more resources to help achieve the World Health Organization (WHO) diabetes coverage targets by 2030." ,
            img: "https://worlddiabetesday.org/wddbrk/wp-content/uploads/2023/09/WDD-2023-Homepage.png" ,
            btnText: "Send a letter",
            posA: 'second' ,
            posB: 'first',
            btnSize: 'small',
            isMain: false
        } ,
        {
            title: "More than 2 in 3 people with diabetes already have complications at diagnosis" ,
            desc: "Global research from IDF reveals that 72% of people living with diabetes surveyed only received their diagnosis because they had at least one of the related complications." ,
            img: "https://worlddiabetesday.org/wddbrk/wp-content/uploads/2023/11/doctor-with-patient.png" ,
            btnText: "Learn more",
            posA: 'first' ,
            posB: 'second',
            btnSize: 'small',
            isMain: false
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
        } ,
        {
            title: "Know your risk, of type 2 diabetes" ,
            desc: "The first step to preventing type 2 diabetes is knowing your risk. Find out through our interactive tool." ,
            img: "https://worlddiabetesday.org/wddbrk/wp-content/uploads/2023/04/test-2-prevent-2023.png" ,
            btnText: "take the rest",
            posA: 'first' ,
            posB: 'second',
            btnSize: 'small',
            isMain: false,
        } ,
        {
            title: "1 in 10 adults are living with diabetes" ,
            desc: "The 10th Edition of the IDF Diabetes Atlas reveals that 537 million adults around the world are living with diabetes" ,
            img: "https://worlddiabetesday.org/wddbrk/wp-content/uploads/2022/07/Atlas-panel-image-1000px.jpg" ,
            btnText: "IDF Diabetes",
            posA: 'second' ,
            posB: 'first',
            btnSize: 'small',
            isMain: false,
        } ,
        {
            title: "Insulin at 100" ,
            desc: "The development of therapeutic insulin in 1921 was a landmark breakthrough in the history of medicine. Check out our dedicated platform and share your diabetes story." ,
            img: "https://worlddiabetesday.org/wddbrk/wp-content/uploads/2021/01/Banting-best-1000px.jpg" ,
            btnText: "Insulin at 100",
            posA: 'first' ,
            posB: 'second',
            btnSize: 'small',
            isMain: false,
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
            <Footer />
        </div>
        
     );
}

export default Home;