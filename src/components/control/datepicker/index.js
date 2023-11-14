import { DatePicker } from "antd";
import classNames from "classnames";

const DatePickerSystem = ( className, ...datePickerProps) => {
    return (
        <DatePicker 
            {...datePickerProps}
            className={classNames(['datepicker-system', className])}
        />
    )
};

export default DatePickerSystem;