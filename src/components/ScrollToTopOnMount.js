import { useEffect } from "react";
import { animateScroll, scroller } from "react-scroll";

const ScrollToTopOnMount = ({ to, duration }) => {
  useEffect(() => {
    to === undefined
      ? animateScroll.scrollToTop({
          smooth: "easeInOutQuad",
          duration: duration,
        })
      : scroller.scrollTo(to, { smooth: true, duration: duration });
  });

  ScrollToTopOnMount.defaultProps = {
    duration: 1000,
  };

  return null;
};

export default ScrollToTopOnMount;
