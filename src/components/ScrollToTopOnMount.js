import { useEffect } from "react";
import { animateScroll } from "react-scroll";

const ScrollToTopOnMount = ({ duration }) => {
  useEffect(() => {
    animateScroll.scrollToTop({ smooth: "easeInOutQuad", duration: duration });
  });

  return null;
};

export default ScrollToTopOnMount;
