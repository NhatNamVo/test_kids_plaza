import { Input } from 'antd';
import style from './style.module.scss';
import classNames from 'classnames';
import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import useDebounce from 'hooks/useDebounce';
import ViewCondition from 'components/utils/view-condition';

const AutoComplete = ({ className, menuClass, inputClass, ...props }) => {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState(0);

    const menuRef = useRef();

    const menus = useMemo(() => {
        const items = results > 10 ? 10 : results;

        return Array.from({ length: items }, (_, index) => index + 1);
    }, [results]);

    const handleInputFocus = () => {
        if (search) {
            menuRef.current.style.height = 'fit-content';
        }
    };

    const handleInputFocusOut = () => {
        menuRef.current.style.height = 0;
    };

    useDebounce(() => {
        if (!search) {
            menuRef.current.style.height = 0;
            return;
        }

        setResults(search.length);
        menuRef.current.style.height = 'fit-content';
    }, [search], 400);

    console.log(menus);

    return (
        <div className={classNames([style.autocomplete, className])}>
            <Input
                {...props}
                value={search}
                className={classNames([inputClass, style.autocomplete_input])}

                onFocus={handleInputFocus}
                onBlur={handleInputFocusOut}
                onChange={(event) => setSearch(event.target.value)}
            />

            <div ref={menuRef} className={style.result}>
                <ul className={classNames([style.result_menu, menuClass])}>
                    {
                        menus.map(item => (
                            <li key={item} className={style.result_menu_item}>
                                <Link href="/">
                                    Kết quả {item}
                                </Link>
                            </li>
                        ))
                    }

                    <ViewCondition rIf={results > 10}>
                        <li className={style.result_more}>
                            <Link href="/">Xem thêm kết quả</Link>
                        </li>
                    </ViewCondition>
                </ul>
            </div>
        </div>
    );
};

export default AutoComplete;