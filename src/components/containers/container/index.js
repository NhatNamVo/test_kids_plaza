import classNames from 'classnames';

import style from './style.module.scss';

const Container = ({ className, children, contentClassName }) => {
    return (
        <section className={classNames([style.container, className])}>
            <div className={classNames([style.container__content, contentClassName])}>
                { children }
            </div>
        </section>
    );
};

export default Container;