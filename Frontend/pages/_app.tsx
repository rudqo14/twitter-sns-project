import AppLayout from "../components/appLayout";
import type { AppProps } from "next/app";
import "antd/dist/antd.css";

const App = ({ Component }: AppProps) => {
  return (
    <>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  );
};

// type AppProps = {
//   Component: React.ElementType;
// };

export default App;
