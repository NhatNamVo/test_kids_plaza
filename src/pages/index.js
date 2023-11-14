// Third Party Component
import classNames from "classnames";

// Style
import style from './style.module.scss';

// Container
import Layout from "components/layout";
import PageWrapper from "components/containers/page";

// Component
import { useAuth } from "components/containers/auth";
import Account from "modules/home/components/account";
import DownloadCard from "modules/home/components/download";
import ViewCondition from "components/utils/view-condition";
import CarouselBanner from "modules/home/components/carousel";
import ServiceMenuItem from "modules/home/components/service";
import MenuSideBar from "modules/home/components/menu-side-bar";

const HomePage = () => {
  const { isLogin } = useAuth();

  return (
    <PageWrapper
      title={'Home'}
      hasContainer={false}
    >
      <div className={style.home} id="home-page">
        <div className={classNames([style.left, style.home_section])}>
          <MenuSideBar menuId="menu-list" />
        </div>

        <div className={classNames([style.banner, style.home_section])}>
          <div className={style.carousel}>
            <CarouselBanner />
          </div>

          <div className={style.menu}>
            <ServiceMenuItem />
          </div>
        </div>

        <div className={classNames([style.right, style.home_section])}>
          <ViewCondition rIf={isLogin}>
            <Account />
          </ViewCondition>

          <DownloadCard />
        </div>
      </div>

    </PageWrapper>
  );
};

HomePage.getLayout = (page) => <Layout>{page}</Layout>;

export default HomePage;
