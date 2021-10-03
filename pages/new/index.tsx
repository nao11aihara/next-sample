import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const ArticleNewPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>記事新規作成</title>
      </Head>
      <div>記事新規作成</div>
      <Link href="/">
        <button>トップへ</button>
      </Link>
    </>
  );
};

export default ArticleNewPage;
