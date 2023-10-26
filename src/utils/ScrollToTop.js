// Util purpose: to scroll to the top of the window when a new page within the SPA is rendered

import { useEffect } from "react";

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default ScrollToTop;