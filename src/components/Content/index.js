import classNames from "classnames/bind";

import styles from "./Content.module.scss";

const cx = classNames.bind(styles);

function Content({ title, paragraphs = [], list = [], left}) {

  return (
    <div className={cx("wrapper")}>

      <div className={cx("left")}>{left}</div>

      <div className={cx("right")}>

        <span className={cx("title")}>{title}</span>

        <div className={cx("content")}>
          {paragraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

        <div className={cx("opinion")}>
          {list.map((item, index) => (
            <ul key={index}>
              <span>{item.title}</span>
              {item.subList.map((subItem, index) => (
                <li key={index}>{subItem}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
