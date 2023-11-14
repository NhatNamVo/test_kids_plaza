import { Input } from "antd";
import classNames from "classnames";
import { useCallback, useEffect, useMemo, useState } from "react";

import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

import style from './style.module.scss';
import useDebounce from "hooks/useDebounce";



const PasswordInput = ({ className, ...props }) => {
    const [hidePass, setHidePass] = useState(true);

    const Icon = useCallback(() => {
        if (!hidePass) {
            return <EyeInvisibleOutlined />
        }

        return <EyeOutlined />
    }, [hidePass]);

    return (
        <Input
            {...props}
            type={hidePass ? "password" : "text"}
            className={classNames([className, 'password-system'])}
            suffix={
                <div onClick={() => setHidePass(!hidePass)}>
                    <Icon />
                </div>
            }
        />
    )
};

export default PasswordInput;

export const PasswordWeekValidate = ({ validateText = "", ...props }) => {
    const [weekPercent, setWeekPercent] = useState(34);

    const weekbars = useMemo(() => {
        return [1, 10, 15, 20];
    }, []);

    const weekBarColorClass = (bar) => {
        if (bar >= 20) { return style.green; }
        if (bar >= 15) { return style.light_green; }
        if (bar >= 10) { return style.yellow; }
        if (bar >= 1) { return style.red; }
    };

    useDebounce(() => {
        if (!props.value) {
            setWeekPercent(0)
            return;
        }
        
        const symbols = props.value.match(/[!@#$%^&*(),.?":{}|<>]/g) || [];
        setWeekPercent(props.value?.length + symbols.length);
    }, [props.value], 200);

    console.log(weekPercent)

    return (
        <div className={style.password_validate}>
            <PasswordInput {...props} />

            <div className={classNames([style.week_wrapper, weekBarColorClass(weekPercent)])}>
                {
                    weekbars.map(bar => (
                        <div
                            key={bar}
                            className={classNames([style.week_bar, {
                                [style.week_action]: weekPercent >= bar
                            }])}
                        />
                    ))
                }
            </div>

            <p className={style.password_rule}>{validateText}</p>
        </div>
    )
};