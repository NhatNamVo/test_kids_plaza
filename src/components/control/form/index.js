import { Form } from "antd";
import classNames from "classnames";
import { memo, useMemo } from "react";
import { VIEWPORT_SIZE_OPTIONS } from "constants/app-constants";
import useResponsive from "hooks/useResponsive";

const FormSystem = ({ children, className, size, ...props }) => {
    const { viewPort } = useResponsive();
    const { width } = viewPort;

    const formSize = useMemo(() => {
        if (size) {
            return size;
        }

        if (width >= VIEWPORT_SIZE_OPTIONS.LG.SIZE) {
            return VIEWPORT_SIZE_OPTIONS.LG.SIZE_TEXT;
        }

        if (width >= VIEWPORT_SIZE_OPTIONS.SM.SIZE && width < VIEWPORT_SIZE_OPTIONS.LG.SIZE) {
            return VIEWPORT_SIZE_OPTIONS.MD.SIZE_TEXT
        }

        return VIEWPORT_SIZE_OPTIONS.XS.SIZE_TEXT;
    }, [width, size]);

    return (
        <Form
            {...props}
            size={formSize}

            // reference
            layout="vertical"
            
            className={classNames([className, 'form-system'])}
        >
            { children }
        </Form>
    )
};

export default memo(FormSystem);