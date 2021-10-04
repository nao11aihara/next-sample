import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Header } from "./../components/Header";

/**
 * トップ画面
 */
const TopPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>トップ</title>
      </Head>
      <Header></Header>
      <div>トップ</div>
      <Link href="/new">
        <button>新規作成画面へ</button>
      </Link>
    </>
  );
};

export default TopPage;
