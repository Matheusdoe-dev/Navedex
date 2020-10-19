import React from "react";
// components
import Routes from "./routes";
// styles
import Colors from "./styles/settings/colors";
import Gaps from "./styles/settings/gaps";
import Animations from "./styles/settings/animations";
import Reset from "./styles/generic/reset";
import Elements from "./styles/base/elements";
// contexts
import { Modal } from "./hooks/modal";

const App = () => {
  return (
    <>
      <Colors />
      <Gaps />
      <Animations />
      <Reset />
      <Elements />

      <Modal>
        <Routes />
      </Modal>
    </>
  );
};

export default App;
