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
import {
  ModalContextProvider,
  useModal,
  ModalContextInterface,
} from "./hooks/modal";

const App = () => {
  // custom hooks
  const { handleActive, handleInactive, position } = useModal();

  // modal context object
  const useModalContext: ModalContextInterface = {
    handleActive,
    handleInactive,
    position,
  };

  return (
    <>
      <Colors />
      <Gaps />
      <Animations />
      <Reset />
      <Elements />

      <ModalContextProvider value={useModalContext}>
        <Routes />
      </ModalContextProvider>
    </>
  );
};

export default App;
