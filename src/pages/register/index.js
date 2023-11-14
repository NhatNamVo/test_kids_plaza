import Link from "next/link";

import { useRouter } from "next/router";

import Layout from "components/layout";
import AuthLayout from "modules/auth/layout";
import { useAuth } from "components/containers/auth";
import RegisterForm from "modules/auth/components/form-register";

import withLogin from "modules/auth/hocs/with-login";

import style from "./style.module.scss";

const SignUpPage = withLogin(() => {

  const router = useRouter();
  const { registerAccount } = useAuth();

  const handleRegisterSuccess = (account) => {
    registerAccount?.(account);

    router.replace('/confirm-code');
  };

  return (
    <AuthLayout
      title="Đăng ký"
    >
      <div className={style.register}>
        <div className={style.form}>
          <RegisterForm onRegisterSuccess={handleRegisterSuccess}/>
        </div>

        <p className={style.register_extend}>
          <span>Quý khách đã có tài khoản?</span>

          <Link href="/login">
            Đăng nhập
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
});

SignUpPage.getLayout = (page) => (
  <Layout variant="auth">
    {page}
  </Layout>
);

export default SignUpPage;
