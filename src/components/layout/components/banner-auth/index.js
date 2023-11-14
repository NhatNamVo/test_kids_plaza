import LazyImage from 'components/utils/lazy-image';
import style from './style.module.scss';

import logo from 'assets/image/logo/logo.png';
import banner1 from 'assets/image/banner/banner_4.png';
import banner2 from 'assets/image/banner/banner_5.jpg';

const BannerLayout = () => {
    return (
        <div className={style.banner}>
            <LazyImage className={style.banner_logo} src={logo} alt="kids-plaza" />

            <div className={style.banner_image}>
                <div className={style.banner_image_first}>
                    <LazyImage className={style.image} src={banner2} alt="kids-plaza" />
                </div>

                <LazyImage className={style.banner_image_main} src={banner1} alt="kids-plaza" />
            </div>
        </div>
    )
};

export default BannerLayout;