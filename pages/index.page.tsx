import type { NextPage } from "next";
import Head from "next/head";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>DH | Marvel Comics - Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BodySingle title={"Sample"}></BodySingle>
    </>
  );
};

export default Index;
