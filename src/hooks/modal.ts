import { useState, useEffect, createContext } from "react";

export interface ModalContextInterface {
  handleActive: (modal: string) => void;
  handleInactive: () => void;
}

export const ModalContext = createContext<ModalContextInterface | null>(null);

export const ModalContextProvider = ModalContext.Provider;

export const ModalContextConsumer = ModalContext.Consumer;

export const useModal = () => {
  const [status, setStatus] = useState("inactive");
  const [currentModal, setCurrentModal] = useState("");

  const handleInactive = () => {
    if (status === "active") {
      setStatus("inactive");
    }
  };

  const handleActive = (modal: string) => {
    handleInactive();

    setCurrentModal(modal);
    setStatus("active");
  };

  useEffect(() => {
    const modals = document.querySelectorAll(`[data-modal]`);
    const modal = document.querySelector(`[data-modal="${currentModal}"]`);
    const body = document.querySelector(`[data-anime="modal"]`);

    const clearModals = () => {
      modals.forEach((modal) => {
        modal?.classList.remove("active");
      });
    };

    if (status === "active") {
      clearModals();
      modal?.classList.add("active");
      body?.classList.add("modal");
    } else {
      clearModals();
      body?.classList.remove("modal");
      setCurrentModal("");
    }
  }, [status, currentModal]);

  return { handleActive, handleInactive };
};
