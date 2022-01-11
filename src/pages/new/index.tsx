import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Header } from "src/components/common/Header";

/**
 * 記事新規作成
 */
const ArticleNewPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>記事新規作成</title>
      </Head>
      <Header />
      <div>記事新規作成</div>
      <Link href="/">
        <button>トップへ</button>
      </Link>
    </>
  );
};

export default ArticleNewPage;
