import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToRoute() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));

      if (element) {
        element.scrollIntoView();
      }

      return;
    }

    window.scrollTo({ top: 0, left: 0 });
  }, [hash, pathname]);

  return null;
}
