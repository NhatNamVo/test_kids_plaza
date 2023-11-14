import useResponsive from "hooks/useResponsive";

const LayoutView = ({ children, isMobileView, isDesktopView }) => {
    const { viewPort } = useResponsive();

    if (isMobileView && viewPort.width <= 991.98) {
        return children;
    }
    
    if (isDesktopView && viewPort.width > 992) {
        return children;
    }

    return null;

};

export default LayoutView;