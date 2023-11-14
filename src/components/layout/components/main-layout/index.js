import HeaderBar from '../header';
import style from './style.module.scss';

const MainLayout = ({ children }) => {
    return (
        <div className={style.layout}>
            <HeaderBar />

            <section className={style.layout_main}>
                {children}
            </section>
        </div>
    )
};

export default MainLayout;