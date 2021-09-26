import type { NextPage } from "next";
import Link from "next/link";

const TopPage: NextPage = () => {
  return (
    <>
      <div>トップ</div>
      <Link href="/new">
        <button>新規作成</button>
      </Link>
    </>
  );
};

export default TopPage;
