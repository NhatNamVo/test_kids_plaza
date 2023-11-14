import LayoutView from "components/utils/layout-view";

import style from './style.module.scss';
import Link from "next/link";
import LazyImage from "components/utils/lazy-image";

import Logo from 'assets/image/logo/logo.png';
import BannerLayout from "../banner-auth";

const AuthLayout = ({ children }) => {
    return (
        <div className={style.layout}>
            <LayoutView isMobileView>
                <div className={style.layout_header}>
                    <Link href="/">
                        <LazyImage src={Logo} />
                    </Link>
                </div>
            </LayoutView>

            <div className={style.layout_container}>
                <div className={style.layout_form}>
                    {children}
                </div>
                <LayoutView isDesktopView>
                    <div className={style.layout_right}>
                        <BannerLayout />
                    </div>
                </LayoutView>
            </div>
        </div>
    )
};

export default AuthLayout;