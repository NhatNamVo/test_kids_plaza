import { Radio } from "antd";
import classNames from "classnames";

const RadioGroupSystem = ({className, onChange, ...radioProps}) => {
    const changeRadio = (event) => {
        onChange?.(event.target.value);
    };

    return (
        <Radio.Group 
            {...radioProps}
            className={classNames(["radio-group-system", className])} 

            onChange={changeRadio}
        />
    )
};

export default RadioGroupSystem;