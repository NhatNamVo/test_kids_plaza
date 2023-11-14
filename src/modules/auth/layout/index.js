import Link from 'next/link';
import { Button } from 'antd';

import ViewCondition from 'components/utils/view-condition';

import style from './style.module.scss';

const AuthLayout = (props) => {
    const { title, description = "Your Social Campaigns", children, isConfirm = false } = props;

    return (
        <div className={style.auth}>
            <div className={style.auth_content}>
                <div className={style.auth_header}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <ViewCondition rIf={!isConfirm}>
                    <div className={style.auth_social}>
                        <Button className={style.auth_button}>
                            Đăng nhập với Google
                        </Button>

                        <Button className={style.auth_button}>
                            Đăng nhập với Apple
                        </Button>
                    </div>

                    <div className={style.devide_line}>
                        <p>Hoặc với Email</p>
                    </div>
                </ViewCondition>

                <div className={style.auth_main}>
                    {children}
                </div>
            </div>

            <div className={style.auth_action}>
                <div className={style.action_language}>
                    <span>Vietnam</span>
                </div>

                <div className={style.action_contact}>
                    <Link href='/'>Term</Link>
                    <Link href='/'>Plans</Link>
                    <Link href='/'>Contact Us</Link>
                </div>
            </div>
        </div>
    )
};

export default AuthLayout;