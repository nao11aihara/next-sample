import type { NextPage } from "next";
import Link from "next/link";

const TopPage: NextPage = () => {
  return (
    <>
      <div>トップ</div>
      <Link href="/new">
        <a>新規作成</a>
      </Link>
    </>
  );
};

export default TopPage;
