import { useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "components/layout";
import AuthLayout from "modules/auth/layout";
import { useAuth } from "components/containers/auth";
import LoginForm from "modules/auth/components/form-login";

import style from "./style.module.scss";

const LoginPage = () => {
  const router = useRouter();
  const { isLogin, saveLogedAccount} = useAuth();

  useEffect(() => {
    if (isLogin) {
      router.replace('/');
    }
  }, [isLogin]);

  return (
    <AuthLayout
      title="Đăng nhập"
    >
      <div className={style.login}>
        <div className={style.form}>
          <LoginForm onLoginSucess={saveLogedAccount}/>
        </div>

        <p className={style.login_extend}>
          <span>Quý khách chưa có tài khoản?</span>

          <Link href="/register">
            Đăng ký
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

LoginPage.getLayout = (page) => (
  <Layout variant="auth">
    {page}
  </Layout>
);

export default LoginPage;
