// https://dev.to/ramsay/build-a-redux-like-global-store-using-react-hooks-4a7n
// https://imrt.typeform.com/to/BPYHVOtU#src=rt
import React from "react";

import Content from "./components/Layout/Content";
import { Layout } from "./components/Layout/Layout";
import Nav from "./components/Layout/Nav";
import { StoreProvider } from "./store/useStore";

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
