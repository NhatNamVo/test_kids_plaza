import classNames from "classnames";
import { forwardRef, memo, useEffect, useMemo, useRef, useState } from "react";

import style from './style.module.scss';
import Image from "next/image";

const LazyImage = forwardRef((props, ref) => {

    const imgRef = useRef(null);

    const [imgSrc, setImgSrc] = useState(null);
    const [imgLoaded, setImgLoaded] = useState(false);

    const handleImageLoaded = () => {
        setImgLoaded(true);
    };

    const imageProps = useMemo(() => {
        if (props.layout ) {
            const { width, height, ...restProps} = props;

            return restProps;
        }

        return {...props, width: '100%', height: '100%' };
    }, [props]);

    const imgClassName = classNames([
        style.imglazy,
        props.className,

        {
            [style.loaded]: imgLoaded,
        },
    ])

    useEffect(() => {
        let unmounted = false;

        const handleLoadImage = () => {
            if (imgSrc !== props.src) {
                try {
                    let observer = new IntersectionObserver(
                        entries => {
                            entries.forEach(entry => {
                                if (!unmounted && entry.isIntersecting) {
                                    setImgSrc(props.src);
                                    observer.unobserve(imgRef.current);
                                }
                            });
                        },
                        {
                            threshold: 0.1,
                            rootMargin: '70%',
                        },

                        observer.observe(imgRef.current),
                    );
                } catch (error) {
                    setImgSrc(props.src);
                }
            }
        };

        if (document.readyState !== 'complete') {
            window.addEventListener('load', handleLoadImage);
        } else {
            handleLoadImage();
        }

        return () => {
            unmounted = false;
            window.removeEventListener('load', handleLoadImage);
        };

    }, [imgRef, props.src, imgSrc]);

    return (
        <div className={classNames([style.wrapper, props.className])}>
            {imgSrc && (
                <Image
                    ref={ref}
                    {...imageProps}
                    unsized="true"
                    alt={props.alt}
                    src={imgSrc ?? ""}
                    className={imgClassName}

                    onLoad={handleImageLoaded}
                />
            )}
        </div>
    )
});

export default memo(LazyImage);