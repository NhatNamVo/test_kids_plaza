import Link from "next/link";
import { useState } from "react";
import { Form, Input } from "antd";

import FormSystem from "components/control/form";
import PasswordInput from "components/control/password";
import ButtonSystem from "components/control/button";

import { loginAsync } from "modules/auth/apis";

import style from "./style.module.scss";

const LoginForm = ({ onLoginSucess }) => {
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  const loginAuth = async (formData = {}) => {
    try {
      setLoading(true);
      setErrors("");
      
      const response = await loginAsync(formData);
      if (response.messageErrors) {
        throw new Error(response.messageErrors);
      }

      onLoginSucess?.(response?.data)

    } catch (error) {
      setErrors(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormSystem
      size="middle"
      className={style.form}

      onFinish={loginAuth}
    >
      <Form.Item
        name="email"
        label=""
        className={style.form_item}
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập email',
          },

          {
            type: "email",
            message: 'Định dạng email không chính xác',
          },
        ]}
      >
        <Input
          placeholder="Email"
          allowClear
        />
      </Form.Item>

      <Form.Item
        name="password"
        label=""
        className={style.form_item}
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập mật khẩu',
          },
        ]}
      >
        <PasswordInput
          placeholder="Mật khẩu"
        />
      </Form.Item>

      <div className={style.forgot_password}>
        <Link href="/login">Quên mật khẩu ?</Link>
      </div>

      <div className={style.form_error}>{errors}</div>

      <ButtonSystem
        size="middle"
        type="primary"
        htmlType="submit"
        loading={loading}
        disabled={loading}
        className={style.form_submit}
      >
        Đăng nhập
      </ButtonSystem>
    </FormSystem>
  );
};

export default LoginForm;
