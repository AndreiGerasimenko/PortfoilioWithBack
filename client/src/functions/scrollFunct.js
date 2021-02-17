import { scroller } from "react-scroll";

export const scrollFunction = ({ key }) => {
  scroller.scrollTo(key, {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
    offset: 5,
  });
};
