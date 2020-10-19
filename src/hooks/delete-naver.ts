// hooks
import { useContext, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
// apis
import navedexApi from "../services/navedexApi";
// modal
import { ModalContext } from "./modal";

// naver delete custom hook
const useDeleteNaver = () => {
  // naver deleting status
  const [deletingStatus, setDeletingStatus] = useState("inactive");

  // get naver id from route params
  const { naver_id } = useParams();

  // using modal context
  const modalContext = useContext(ModalContext);

  const history = useHistory();

  // handle naver delete
  const handleDeleteNaver = async () => {
    await navedexApi
      .delete(`navers/${naver_id}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        setDeletingStatus("deleted");
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    // if naver was been created, then
    if (deletingStatus === "deleted") {
      modalContext?.handleActive("deleted");
      setTimeout(() => {
        history.push("/navers");
        history.go(0);
        setDeletingStatus("inactive");
      }, 1000);
    }
  }, [deletingStatus, history, modalContext]);

  return { handleDeleteNaver };
};

export default useDeleteNaver;
