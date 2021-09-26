import type { NextPage } from "next";
import Link from "next/link";

const NewPage: NextPage = () => {
  return (
    <>
      <div>新規作成</div>
      <Link href="/">
        <button>戻る</button>
      </Link>
    </>
  );
};

export default NewPage;
