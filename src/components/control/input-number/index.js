import { InputNumber } from "antd";
import { useEffect } from "react";
import { useRef } from "react";

const InputNumberSystem = ({ suffix, ...numberProps}) => {
    const suffixRef = useRef();
    const wrapperRef = useRef();

    useEffect(() => {
        const suffixClientWidth = suffixRef.current?.clientWidth;

        const input = wrapperRef.current.querySelector('input');
        if (!input) {
            return;
        }

        const inputClientWidth = wrapperRef.current?.clientWidth;
        if (suffixClientWidth) {
            input.style.width = (inputClientWidth - suffixClientWidth + 'px');
        }
    }, [numberProps.value]);

    return (
        <div ref={wrapperRef} className='number-input-system'>
            <InputNumber {...numberProps} />

            <div ref={suffixRef} className='number-input-system__suffix'>
                { suffix }
            </div>
        </div>
    )
};

export default InputNumberSystem;