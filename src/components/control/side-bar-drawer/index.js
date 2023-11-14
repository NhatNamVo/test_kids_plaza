import { Drawer } from "antd";
import classNames from "classnames";
import ArrowRightSvg from "components/icons/svg/common/arrow-right-svg";
import useResponsive from "hooks/useResponsive";
import { useEffect, useState } from "react";

const SideBarDrawer = ({
  children,
  className,
  root,
  title = "",
  ...drawerProps
}) => {
  const { viewPort } = useResponsive();
  const { height } = viewPort;

  const [rootRect, setRootRect] = useState(null);

  useEffect(() => {
    if (!drawerProps.open || !root) {
      return;
    }

    console.log("at here");

    const rootRect = root.getBoundingClientRect();
    setRootRect(rootRect);
  }, [drawerProps.open, root]);

  return (
    <Drawer
      {...drawerProps}
      title={
        <div className="side-bar-draw-system__title-wrapper">
          <p className="side-bar-draw-system__title">{title}</p>

          <div
            className="side-bar-draw-system__close"
            onClick={drawerProps?.onClose}
          >
            Close
            <ArrowRightSvg />
          </div>
        </div>
      }
      id="side-bar-draw-system"
      style={{
        ["--max-height"]: height - 100 + "px",
        ["--top"]: rootRect?.top + "px",
        ["--height"]: rootRect?.height + "px",
      }}
      className={classNames([className, "side-bar-draw-system"])}
    >
      {children}
    </Drawer>
  );
};

export default SideBarDrawer;
