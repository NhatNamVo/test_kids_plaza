import { Button } from "antd";
import { useMemo } from "react";
import classNames from "classnames";

import { VIEWPORT_SIZE_OPTIONS } from "constants/app-constants";

import useResponsive from "hooks/useResponsive";

const ButtonSystem = ({
  className,
  children,
  size = "sm",
  loading,
  ...buttonProp
}) => {
  const { viewPort } = useResponsive();
  const { width } = viewPort;

  const buttonSize = useMemo(() => {
    if (size) {
      return size;
    }

    if (width >= VIEWPORT_SIZE_OPTIONS.LG.SIZE) {
      return VIEWPORT_SIZE_OPTIONS.LG.SIZE_TEXT;
    }

    if (
      width >= VIEWPORT_SIZE_OPTIONS.SM.SIZE &&
      width < VIEWPORT_SIZE_OPTIONS.LG.SIZE
    ) {
      return VIEWPORT_SIZE_OPTIONS.MD.SIZE_TEXT;
    }

    return VIEWPORT_SIZE_OPTIONS.XS.SIZE_TEXT;
  }, [width, size]);

  return (
    <Button
      {...buttonProp}
      size={buttonSize}
      loading={loading}
      className={classNames([className, "system-button"])}
    >
      {children}
    </Button>
  );
};

export default ButtonSystem;
