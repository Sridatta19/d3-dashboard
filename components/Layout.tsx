import React, { ReactNode } from "react";
import Head from "next/head";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Analytics Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Create Next App" />
      </Head>
      <>{children}</>
    </>
  );
};

interface LayoutProps {
  children: ReactNode;
}

export default Layout;
