// https://dev.to/ramsay/build-a-redux-like-global-store-using-react-hooks-4a7n
import React, { useEffect } from "react";
import Content from "./component/Content";

import { Layout } from "./component/Layout";
import { Nav } from "./component/Nav";
import useLoadData from "./hooks/useLoadData";
import { StoreProvider, useStore } from "./store/useStore";

function App() {
  return (
    <StoreProvider>
      <Layout>
        <Content />
        <Nav />
      </Layout>
    </StoreProvider>
  );
}

export default App;
