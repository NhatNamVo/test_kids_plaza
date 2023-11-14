import { useMemo } from 'react';
import style from './style.module.scss';
import Link from 'next/link';

import Service1 from 'assets/image/service/service1.png';
import Service2 from 'assets/image/service/service2.png';
import Service3 from 'assets/image/service/service3.png';
import Service4 from 'assets/image/service/service4.png';
import Service5 from 'assets/image/service/service5.png';
import Service6 from 'assets/image/service/service6.png';
import Service7 from 'assets/image/service/service7.png';
import LazyImage from 'components/utils/lazy-image';

const ServiceMenuItem = () => {

    const menus = useMemo(() => {
        return [
            {
                id: 1,
                icon: Service1,
                name: 'Siêu deal',
            },

            {
                id: 2,
                icon: Service2,
                name: 'Voucher',
            },

            {
                id: 3,
                icon: Service3,
                name: 'Ưu đãi',
            },

            {
                id: 4,
                icon: Service4,
                name: 'Hỏi đáp',
            },

            {
                id: 5,
                icon: Service5,
                name: 'Tra cứu đơn hàng',
            },

            {
                id: 6,
                icon: Service6,
                name: 'Siêu thị gần bạn',
            },

            {
                id: 7,
                icon: Service7,
                name: 'Miễn phí giao hàng',
            },
        ]
    }, []);


    return (
        <div className={style.service}>
            <div className={style.service_menu}>
                {
                    menus.map(item => (
                        <Link href="/" key={item.id}>
                            <div className={style.service_item}>
                                <LazyImage src={item.icon} alt="kids-plaza_service" />

                                <h3 className={style.service_title}>
                                    {item.name}
                                </h3>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
};

export default ServiceMenuItem;