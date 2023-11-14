import { Tooltip } from "antd";

const TooltipSystem = ({ children, ...props }) => {
    return (
        <Tooltip
            {...props}

            id="tooltip-system"
        >
            {children}
        </Tooltip>
    )
};

export default TooltipSystem;