import { Radio } from "antd";

const RadioSystem = ({ children, ...radioProps}) => {
    return (
        <Radio className="radio-system" {...radioProps}>
            { children }
        </Radio>
    )
};

export default RadioSystem;