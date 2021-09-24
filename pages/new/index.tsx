import type { NextPage } from "next";
import Link from "next/link";

const NewPage: NextPage = () => {
  return (
    <>
      <div>新規作成</div>
      <Link href="/">
        <a>戻る</a>
      </Link>
    </>
  );
};

export default NewPage;
