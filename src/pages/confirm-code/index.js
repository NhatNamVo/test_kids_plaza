import Link from "next/link";
import { Form } from "antd";

import PhoneImage from 'assets/image/auth/phone.png';

import { useEffect } from "react";
import { useRouter } from "next/router";

import Layout from 'components/layout';
import AuthLayout from "modules/auth/layout";
import FormSystem from "components/control/form";
import ButtonSystem from "components/control/button";
import { useAuth } from "components/containers/auth";
import LazyImage from "components/utils/lazy-image";
import withLogin from "modules/auth/hocs/with-login";
import ConfirmCodeInput from "modules/auth/components/code-input";

import style from './style.module.scss';

const ConfirmCodePage = withLogin(() => {
    const [form] = Form.useForm();
    const router = useRouter();

    const { account, confirmAccount} = useAuth();

    const submitForm = () => {
        confirmAccount?.()
    };

    useEffect(() => {
        if (!account) {
            router.replace('/register');
        }
    }, [account]);

    return (
        <AuthLayout
            title={
                <>
                    <LazyImage src={PhoneImage} />
                    Xác thực bảo vệ cấp 2
                </>
            }
            isConfirm={true}
            description="Nhập mã chúng tôi đã gửi tới Email"
        >
            <div className={style.confirm}>
                <div className={style.form}>
                    <FormSystem
                        size="middle"
                        form={form}
                        className={style.form_wrapper}

                        onFinish={submitForm}
                    >
                        <Form.Item
                            required={false}
                            name="code"
                            className={style.form_item}
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập code',
                                },

                                {
                                    min: 6,
                                    message: 'Nhập chưa đủ 6 số',
                                },
                            ]}
                        >
                            <ConfirmCodeInput />
                        </Form.Item>

                        <div className={style.form_button_group}>
                            <ButtonSystem htmlType="submit" type="primary" className={style.form_button}>
                                Xác nhận
                            </ButtonSystem>
                        </div>
                    </FormSystem>
                </div>

                <p className={style.confirm_extend}>
                    <span>Quý khác chưa nhận được mã?</span>

                    <Link href="/login">
                        Resend
                    </Link>

                    <span>
                        or
                    </span>

                    <Link href="/login">
                        Call Us
                    </Link>
                </p>
            </div>
        </AuthLayout>
    )
});

ConfirmCodePage.getLayout = page => <Layout variant="auth">{page}</Layout>

export default ConfirmCodePage;