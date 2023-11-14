import { useState, useEffect } from "react";

const DEFAULT_RESPONSIVE = {
    isTablet: false,
    isMobile: false,
    isLargeDesktop: false,
    isSmallDesktop: false,
}

const useResponsive = () => {
    const [screens, setScreens] = useState(DEFAULT_RESPONSIVE);

    const [viewPort, setViewPort] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })

    useEffect(() => {
        const handleResize = () => {
            setViewPort({
                width: window.innerWidth,
                height: window.innerHeight,
            })

            if (window?.innerWidth >= 1200) {
                setScreens({
                    ...DEFAULT_RESPONSIVE,
                    isLargeDesktop: true,
                });

            } else if (window?.innerWidth >= 992) {
                setScreens({
                    ...DEFAULT_RESPONSIVE,
                    isSmallDesktop: true,
                });
            } else if (window?.innerWidth >= 576 && window.innerHeight <= 991.98) {
                setScreens({
                    ...DEFAULT_RESPONSIVE,
                    isTablet: true,
                });
            } else {
                setScreens({
                    ...DEFAULT_RESPONSIVE,
                    isMobile: true,
                });
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return {screens, viewPort};
};

export default useResponsive;
