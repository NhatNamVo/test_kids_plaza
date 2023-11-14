
// Layout Import
import AuthLayout from './components/auth-layout';
import MainLayout from './components/main-layout';

const Layout = ({
  children,
  variant = ""
}) => {

  if (variant === 'auth') {
    return <AuthLayout>{children}</AuthLayout>
  }

  return <MainLayout>{children}</MainLayout>
};

export default Layout;
