import Head from "next/head.js";
import dynamic from "next/dynamic";

require("../styles/variables.less");

import "animate.css";
import "../templates/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'components/utils/progress-bar/progress-bar.scss';

import Auth from "components/containers/auth";
import MenuContainer from "components/containers/menu";

const ProgressBar = dynamic(() => import('components/utils/progress-bar'), {
  ssr: false,
});

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta
          name={"viewport"}
          content={
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, "
          }
        />
      </Head>

      <ProgressBar />
      <Auth>
        <MenuContainer>
          {getLayout(<Component {...pageProps} />)}
        </MenuContainer>
      </Auth>
    </>
  );
};

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
