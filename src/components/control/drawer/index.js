import { Drawer } from "antd";
import classNames from "classnames";
import useResponsive from "hooks/useResponsive";

const DrawerSystem = ({ children, className, ...drawerProps}) => {

    const { viewPort } = useResponsive();
    const { height } = viewPort;
 
    return (
        <Drawer
            {...drawerProps}
            style={{['--max-height']: height - 100 + 'px'}}
            className={classNames([className, 'draw-system'])}
        >
            { children }
        </Drawer>
    )
};

export default DrawerSystem;