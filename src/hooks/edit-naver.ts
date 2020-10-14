import { useState, FormEvent, useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
// apis
import navedexApi from "../services/navedexApi";
// hooks
import { ModalContext } from "./modal";

const useEditNaver = () => {
  const [name, setName] = useState("");
  const [job_role, setRole] = useState("");
  const [birthdate, setBirthDate] = useState("");
  const [admission_date, setAdmissionDate] = useState("");
  const [project, setProject] = useState("");
  const [url, setUrl] = useState("");

  const [editingStatus, setEditingStatus] = useState("inactive");

  const modalContext = useContext(ModalContext);

  const history = useHistory();

  const { naver_id } = useParams();

  const handleEditNaverSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setEditingStatus("editing");

    await navedexApi
      .put(
        `navers/${naver_id}`,
        {
          name,
          job_role,
          birthdate,
          admission_date,
          project,
          url,
        },
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      )
      .then(() => {
        setEditingStatus("updated");
      })
      .catch((err) => {
        console.log(err);
        setEditingStatus("error");
      });
  };

  useEffect(() => {
    async function getNaver() {
      const response = await navedexApi
        .get(`navers/${naver_id}`, {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        })
        .then((r) => r.data)
        .catch((err) => console.log(err));

      if (response) {
        setName(response.name);
        setRole(response.job_role);
        setUrl(response.url);
        setProject(response.project);
        setBirthDate(response.birthdate.split("T")[0].split("-").join("/"));
        setAdmissionDate(
          response.admission_date.split("T")[0].split("-").join("/")
        );
      }
    }

    getNaver();
  }, [naver_id]);

  useEffect(() => {
    if (editingStatus === "updated") {
      modalContext?.handleActive("naver-updated");
      setTimeout(() => {
        history.push("/navers");
        setEditingStatus("inactive");
      }, 1000);
    } else if (editingStatus === "error") {
      modalContext?.handleActive("naver-edit-error");
      setEditingStatus("inactive");
    }
  }, [editingStatus, history, modalContext]);

  return {
    name,
    setName,
    job_role,
    setRole,
    birthdate,
    setBirthDate,
    admission_date,
    setAdmissionDate,
    project,
    setProject,
    url,
    setUrl,
    handleEditNaverSubmit,
  };
};

export default useEditNaver;
