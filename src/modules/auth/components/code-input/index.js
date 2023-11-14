import { Input } from "antd";
import { useMemo, useRef } from "react";

import style from './style.module.scss';

const ConfirmCodeInput = (props) => {

    const groupInputRef = useRef();

    const inputGroups = useMemo(() => {
        return Array.from({ length: 6 }, (_, index) => index + 1);
    }, []);


    const values = useMemo(() => {
        if (!props.value) {
            return [];
        }

        return props.value.split('');
    }, [props.value]);

    const handleInputChange = (input, event) => {
        const cloneValues = [...values];
        cloneValues.splice(input, 1, event.target.value || ' ');
        props.onChange?.(cloneValues?.join('').trim());

        const inputs = groupInputRef.current.querySelectorAll('input');

        if (event.target.value) {
            if (input > 5) {
                return;
            }

            inputs?.[input]?.focus?.();
        } else {
            console.log(input)
            if (input < 0) {
                return;
            }

            inputs?.[input - 2]?.focus?.();
        }
    };



    return (
        <div ref={groupInputRef} className={style.group}>
            {
                inputGroups.map(input => (
                    <Input
                        {...props}
                        key={input}
                        maxLength={1}
                        value={values?.[input]?.trim()}
                        className={style.group_item}

                        onChange={(event) => handleInputChange(input, event)}
                    />

                ))
            }
        </div>
    )
};

export default ConfirmCodeInput;