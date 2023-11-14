import Link from "next/link";
import { Input } from "antd";
import { useState } from "react";
import { Checkbox, Form } from "antd";

import AUTH_CONSTANTS from "modules/auth/constants";

import FormSystem from "components/control/form";
import ButtonSystem from "components/control/button";
import PasswordInput, { PasswordWeekValidate } from "components/control/password";

import { registerAsync } from "modules/auth/apis";

import style from "./style.module.scss";

const RegisterForm = ({ onRegisterSuccess }) => {

  const [form] = Form.useForm();

  const [errors, setErrors] = useState("");
  const [isAgree, setIsAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsAgree(event.target.checked);
  };

  const submitForm = async (formData) => {
    try {
      setLoading(true);
      setErrors("");

      const response = await registerAsync(formData);

      if (response.messageErrors) {
        throw new Error(response.messageErrors);
      }

      const account = response?.data;
      onRegisterSuccess?.(account);

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
      onFinish={submitForm}
      form={form}
    >
      <Form.Item
        required={false}
        name="email"
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
        <Input placeholder="Nhập Email" allowClear />
      </Form.Item>

      <Form.Item
        required={false}
        name="password"
        className={style.form_item}
        rules={[
          () => ({
            validator(_, value) {
              if (!value) {
                return Promise.reject(
                  new Error('Vui lòng nhập mật khẩu')
                );
              }
              if (AUTH_CONSTANTS.PASSWORD_VALIDATION.test(value)) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error('Mật khẩu không khớp với yêu cầu')
              );
            },
          }),
        ]}
      >
        <PasswordWeekValidate placeholder="Mật khẩu" validateText="Ít nhất 8 chữ cái, số và ký tự đặc biệt" />
      </Form.Item>

      <Form.Item
        required={false}
        name="repeat"
        className={style.form_item}
        rules={[
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value) {
                return Promise.reject(
                  new Error('Vui lòng nhập lại mật khẩu')
                );
              }
              if (getFieldValue('password') !== value) {
                return Promise.reject(
                  new Error('Mật khẩu không khớp')
                );
              }

              return Promise.resolve();
            },
          }),
        ]}
      >
        <PasswordInput placeholder="Nhập lại mật khẩu" />
      </Form.Item>

      <div className={style.form_accept}>
        <Checkbox onChange={handleCheckboxChange}>
          <>Tôi đồng ý với <Link href='#'>Điều khoản</Link></>
        </Checkbox>
      </div>

      <div className={style.form_error}>{errors}</div>

      <ButtonSystem
        size="middle"
        type="primary"
        htmlType="submit"
        loading={loading}
        disabled={!isAgree || loading}
        className={style.form_button}
      >
        Đăng ký
      </ButtonSystem>
    </FormSystem>
  );
};

export default RegisterForm;
