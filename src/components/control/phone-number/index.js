import { Input } from 'antd';
import { useMemo, useState } from 'react';

import { COUNTRY_OPTIONS } from 'constants/app-constants'

import { DownOutlined } from '@ant-design/icons';

import style from './style.module.scss';

const PhoneNumberInput = ({ changePhoneArea, onChange, value, ...props }) => {
    const [openMoreOptions, setOpenMoreOptions] = useState(false);
    const [areaCode, setAreaCode] = useState({ ...COUNTRY_OPTIONS.VN })

    const codes = useMemo(() => {
        return Object.values(COUNTRY_OPTIONS).map(option => {
            return option.PHONE_AREA
        })
    }, []);

    const changeArea = (area) => {
        setAreaCode(area);
        changePhoneArea?.(area);

        setOpenMoreOptions(false);
    };

    const handleChangePhoneNumber = (event) => {
        const inputValue = event.target.value;

        const code = areaCode.PHONE_AREA;
        const phoneNumber = (() => {
            if (!inputValue) {
                return ''
            }

            if (inputValue.includes(code)) {
                return inputValue
            }

            return code + inputValue
        })();

        onChange?.(phoneNumber);
    };

    const phoneNumberValue = useMemo(() => {

        if (!value) {
            return value
        }

        const code = codes.find(item => {
            return value.includes(item)
        });

        return value.replace(code, '');
    }, [areaCode, value]);

    return (
        <>
            <div className={style.phoneInputWrapper}>
                <div
                    className={style.selectArea}

                    onClick={() => setOpenMoreOptions(true)}
                >
                    <span>{areaCode?.['PHONE_AREA']}</span>

                    <span className={style.arrow}>
                        <DownOutlined />
                    </span>
                </div>

                <Input {...props}
                    value={phoneNumberValue}
                    onChange={handleChangePhoneNumber}
                />
            </div>
        </>
    )
};

export default PhoneNumberInput;