import "antd/dist/antd.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <div>공통메뉴</div>
      <Component {...pageProps} />
    </>
  );
};

export default App;
