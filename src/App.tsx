import React from "react";
// components
import Routes from "./routes";
// styles
import Colors from "./styles/settings/colors";
import Gaps from "./styles/settings/gaps";
import Reset from "./styles/generic/reset";
import Elements from "./styles/base/elements";

const App = () => {
  return (
    <>
      <Colors />
      <Gaps />
      <Reset />
      <Elements />

      <Routes />
    </>
  );
};

export default App;
