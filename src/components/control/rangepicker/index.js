import { DatePicker } from "antd";
import classNames from "classnames";
import { FORMAT_DATE } from "constants/app-constants";

import style from './style.module.scss';
import { useEffect, useRef, useState } from "react";

const RangeDatePickerSystem = ({ className, ...dateRangeProps }) => {

    const [open, setOpen] = useState(false);

    const dateRangePickerRef = useRef();

    const handleCalendarChange = (dates) => {
        dateRangeProps.onChange?.(dates)
    };
    const toggleDropdown = (status) => {
        setOpen(status);
    }

    useEffect(() => {
        const bodyElement = document.querySelector('body');
        bodyElement.classList.add('date-range-picker-system')

        return () => bodyElement.classList.remove('date-range-picker-system')
    }, []);

    // useEffect(() => {

    //     if (open) {
    //         const datePickerSystem = document.querySelector('body').querySelector('.ant-picker-content tbody');
    //         const okButton = document.querySelector('body').querySelector('.ant-picker-footer .ant-picker-ok button');

    //         console.log(okButton, datePickerSystem)
    //         if (datePickerSystem) {
    //             datePickerSystem.addEventListener('click', (event) => {
    //                 console.log(event.target.closest('.ant-picker-cell'))
    //                 if (event.target.closest('.ant-picker-cell')) {
    //                     okButton.click?.()
    //                 }
    //             })
    //         }
    //     }
    // }, [open]);

    return (
        <DatePicker.RangePicker
            {...dateRangeProps}
            responsive
            open={open}
            order={true}
            picker="date"
            changeOnBlur={true}
            showTime={{ value: 0 }}
            ref={dateRangePickerRef}
            format={FORMAT_DATE.DMY}
            className={classNames(['date-range-system', className, style.dateRangePickerSystem])}

            onOpenChange={toggleDropdown}
            onCalendarChange={handleCalendarChange}
        />
    )
};


export default RangeDatePickerSystem;