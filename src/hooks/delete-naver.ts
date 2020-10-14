import { useContext, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
// apis
import navedexApi from "../services/navedexApi";
// modal
import { ModalContext } from "./modal";

const useDeleteNaver = () => {
  const [deletingStatus, setDeletingStatus] = useState("inactive");

  const { naver_id } = useParams();

  const modalContext = useContext(ModalContext);

  const history = useHistory();

  const handleDeleteNaver = async () => {
    setDeletingStatus("deleting");
    await navedexApi
      .delete(`navers/${naver_id}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .catch((err) => {
        console.log(err);
        alert("Erro ao deletar naver.");
      });

    setDeletingStatus("deleted");
  };

  useEffect(() => {
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
