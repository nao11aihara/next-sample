import type { AppProps } from "next/app";

/**
 * App
 * 全てのpagesコンポーネントで呼び出される最上位コンポーネント
 */
const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
