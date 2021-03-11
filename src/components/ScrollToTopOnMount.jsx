import { useEffect } from "react";
import { animateScroll, scroller } from "react-scroll";

const ScrollToTopOnMount = ({ to, duration, offset }) => {
  useEffect(() =>
    to === undefined
      ? animateScroll.scrollToTop({
          smooth: "easeInOutQuad",
          duration,
          offset,
        })
      : scroller.scrollTo(to, {
          smooth: true,
          duration,
          offset,
        })
  );

  ScrollToTopOnMount.defaultProps = {
    duration: 1000,
    offset: 0,
  };

  return null;
};

export default ScrollToTopOnMount;
