import classNames from "classnames/bind";

import Header from "../../components/Layout/Header";
import Wall from "../../components/Wall";

import styles from "./Contact.module.scss";
import Poster from "../../components/Layout/Poster";
import Partners from "../../components/Layout/Partners";
import Footer from "../../components/Layout/Footer";

const cx = classNames.bind(styles);

function Contact() {
  const wall = {
    title: "Contact us",
    desc: "",
    img: "https://worlddiabetesday.org/wddbrk/wp-content/themes/wddtheme/_/img/2023/wdd-consultant-salad-person.png",
    btnText: "Learn more",
    posA: "first",
    posB: "second",
    isMain: true,
    bgColor: "bg-purple2",
  };

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
      <div className={cx("box")}>
        <div className={cx("left")}>
          <form className={cx("form-container")}>
            <div className={cx("form-group")}>
              <label for="email">Name</label>
              <input required="" name="name" id="email" type="text" />
            </div>
            <div className={cx("form-group")}>
              <label for="email">Email</label>
              <input required="" name="email" id="email" type="text" />
            </div>
            <div class="form-group">
                <label for="textarea">How Can We Help You?</label>
                <textarea required="" cols="50" rows="10" id="textarea" name="textarea"></textarea>
            </div>
            <button type="submit" className={cx("form-submit-btn")}>
              Submit
            </button>
          </form>
        </div>
        <div className={cx("right")}>
          <span className={cx("right-text1")}>International Diabetes Federation</span>
          <br />
          <span className={cx("right-text2")}>Avenue Hermann-Debroux 54</span>
          <br />
          <span className={cx("right-text2")}>B-1160 Brussels, Belgium</span>
          <br />
          <a className={cx("right-text3")} href="#">wdd@idf.org</a>
        </div>
      </div>
      <Poster />
      <Partners />
      <Footer />
    </>
  );
}

export default Contact;
