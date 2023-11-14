import LazyImage from 'components/utils/lazy-image';

import QrCode from 'assets/image/service/qr-code.png';
import IosApp from 'assets/image/service/ios-app.png';
import GooglePlayApp from 'assets/image/service/google-play-app.png';

import style from './style.module.scss';

const DownloadCard = () => {
    return (
        <div className={style.download}>
            <h1>Tải app KidsPlaza - Nhận quà bao la</h1>

            <ul>
                <li>Nhập mã BANMOIT8 - Giảm ngay 50.000 cho đơn hàng từ 699.000đ</li>
                <li>Hàng ngàn voucher khác chỉ áp dụng khi đặt hàng tại App.</li>
            </ul>

            <div className={style.download_app}>
                <LazyImage className={style.qrcode} src={QrCode} alt="kids-plaza-qr-code"/>

                <div className={style.download_button}>
                    <LazyImage className={style.app_button} src={IosApp} alt="kids-plaza-ios-app" />
                    <LazyImage className={style.app_button} src={GooglePlayApp} alt="kids-plaza-adroid-app" />
                </div>
            </div>
        </div>
    )
};

export default DownloadCard;