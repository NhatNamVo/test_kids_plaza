import Head from "next/head";
import Container from "../container";
import classNames from "classnames";

import style from "./style.module.scss";
import { useRouter } from "next/router";

const PageWrapper = ({
  children,
  className,
  title = "",
  hasContainer = true,
  ...containerProps
}) => {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Container
        {...containerProps}
        className={classNames([className, style.pageWrapper])}
      >
        {children}
      </Container>
    </>
  );
};

export default PageWrapper;
