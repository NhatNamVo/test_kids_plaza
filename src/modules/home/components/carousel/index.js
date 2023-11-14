import { Carousel } from "antd";

import Banner1 from 'assets/image/banner/banner_1.png';
import Banner2 from 'assets/image/banner/banner_2.png';
import Banner3 from 'assets/image/banner/banner_3.png';

const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

// Import style
import style from './style.module.scss';
import LazyImage from "components/utils/lazy-image";
import { useRef } from "react";

import {
    LeftOutlined, RightOutlined
} from '@ant-design/icons';

const CarouselBanner = () => {
    const carouselRef = useRef();

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    const handlePrevButtonClick = () => {
        carouselRef.current.prev();
    };

    const handleNextButtonClick = () => {
        carouselRef.current.next();
    };

    return (
        <div className={style.carousel}>
            <div className={style.pre_button} onClick={handlePrevButtonClick}>
                <LeftOutlined />
            </div>
            <Carousel
                dots={false}
                afterChange={onChange}
                ref={carouselRef}
            >
                <LazyImage src={Banner1} alt="kids-plaza" />
                <LazyImage src={Banner2} alt="kids-plaza" />
                <LazyImage src={Banner3} alt="kids-plaza" />
            </Carousel>

            <div className={style.next_button} onClick={handleNextButtonClick}>
                <RightOutlined />
            </div>
        </div>
    )
};

export default CarouselBanner;