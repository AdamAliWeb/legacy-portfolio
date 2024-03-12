import { useEffect, useState } from "react";

const MIN_WIDTH = 1000;

export default function useDesktopLayout() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [desktopLayout, setDesktopLayout] = useState();

    const changeWidth = () => setWindowWidth(window.innerWidth);

    useEffect(() => {
        if (windowWidth > MIN_WIDTH) setDesktopLayout(true);
        else setDesktopLayout(false);

        window.addEventListener("resize", changeWidth);

        return () => window.removeEventListener("resize", changeWidth);
    }, [windowWidth]);

    return { desktopLayout };
}
