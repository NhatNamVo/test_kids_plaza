import { Avatar, Button, Divider } from 'antd';
import style from './style.module.scss';

import {
    UserOutlined,
    BookOutlined,
    FileOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

const Account = () => {
    return (
        <div className={style.account}>
            <div className={style.account_card}>
                <div className={style.card_left}>
                    <Avatar />
                    <div className={style.card_text}>
                        <p>Xin chào, <Link href="/">Bạn ***</Link></p>

                        <Button type="primary" className={style.card_button}>Mua nhanh</Button>
                    </div>
                </div>

                <Divider type='vertical'/>

                <div className={style.card_right}>
                    <Avatar />

                    <div className={style.card_text}>
                        <p>KiCoin</p>

                        <p className={style.card_balance}>12.000</p>
                    </div>
                </div>
            </div>

            <div className={style.account_redirect}>
                <Link href="#">
                    <div className={style.redirect_item}>
                        <div className={style.item_icon}>
                            <UserOutlined />
                        </div>

                        <p className={style.item_title}>
                            Thông tin tài khoản
                        </p>
                    </div>
                </Link>

                <Link href="#">
                    <div className={style.redirect_item}>
                        <div className={style.item_icon}>
                            <BookOutlined />
                        </div>

                        <p className={style.item_title}>
                            Sổ địa chỉ
                        </p>
                    </div>
                </Link>

                <Link href="#">
                    <div className={style.redirect_item}>
                        <div className={style.item_icon}>
                            <FileOutlined />
                        </div>

                        <p className={style.item_title}>
                            Sản phẩm đã xem
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    )
};

export default Account;