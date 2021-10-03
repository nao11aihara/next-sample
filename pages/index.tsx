import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const TopPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>トップ</title>
      </Head>
      <div>トップ</div>
      <Link href="/new">
        <button>新規作成画面へ</button>
      </Link>
    </>
  );
};

export default TopPage;
