
// Style Import
import style from './style.module.scss';

import Link from 'next/link';
import { Button } from 'antd';

import LazyImage from 'components/utils/lazy-image';
import { useAuth } from 'components/containers/auth';
import Container from 'components/containers/container';
import AutoComplete from 'components/control/autocomplete';
import ViewCondition from 'components/utils/view-condition';

import { SearchOutlined } from '@ant-design/icons';

import LogoImage from 'assets/image/logo/logo.png';

const HeaderBar = () => {
    const { isLogin } = useAuth();

    return (
        <header className={style.header}>
            <Container contentClassName={style.top}>
                <div className={style.top_left}>
                    <span>Xem tồn tại, giá bán tại: </span>

                    <span className={style.top_dropdown}>
                        Miền Nam
                    </span>
                </div>

                <ul className={style.top_right}>
                    <li>Hotline: 18006608</li>
                    <li>Zalo cửa hàng</li>
                    <li>Ưu đãi khi tải app</li>
                    <li>Hệ thống 159 cửa hàng</li>
                    <li>Thưởng Kicoin</li>
                </ul>
            </Container>

            <div className={style.main}>
                <Container contentClassName={style.content}>
                    <Link href="/">
                        <LazyImage src={LogoImage} alt="kids-plaza" />
                    </Link>

                    <AutoComplete 
                        placeholder="Sản phẩm cho bé 123"
                        className={style.search} 
                        inputClass={style.search_input}
                        suffix={<SearchOutlined />}
                    />

                    <div className={style.auth}>
                        <ViewCondition rIf={!isLogin}>
                            <Link href="/login">
                                <Button className={style.authButton_login}>Login</Button>
                            </Link>

                            <Link href="/register">
                                <Button className={style.authButton_register}>Register</Button>
                            </Link>
                        </ViewCondition>

                        <ViewCondition rIf={isLogin}>
                            <div className={style.auth_item}>
                                Icon

                                <span>Lịch sử đơn hàng</span>
                            </div>

                            <div className={style.auth_item}>
                                Icon

                                <span>Ưu đãi đơn hàng</span>
                            </div>

                            <div className={style.auth_item}>
                                Icon

                                <span>Giỏ hàng</span>
                            </div>
                        </ViewCondition>
                    </div>
                </Container>
            </div>
        </header>
    )
};

export default HeaderBar;