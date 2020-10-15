// hooks
import { useState, FormEvent, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
// apis
import navedexApi from "../services/navedexApi";
// contexts
import { ModalContext } from "../hooks/modal";

const useCreateNaver = () => {
  // naver data
  const [name, setName] = useState("");
  const [job_role, setRole] = useState("");
  const [birthdate, setBirthDate] = useState("");
  const [admission_date, setAdmissionDate] = useState("");
  const [project, setProject] = useState("");
  const [url, setUrl] = useState("");

  // naver creating status
  const [creatingStatus, setCreatingStatus] = useState("inactive");

  // date inputs validation states
  const [admissionInputError, setAdmissionInputError] = useState(false);
  const [birthdateInputError, setBirthdateInputError] = useState(false);

  // using modal context
  const modalContext = useContext(ModalContext);

  const history = useHistory();

  // regex - date schema
  const datePattern = /(?:\d{2}[/]){2}\d{4}/g;

  const handleCreateNaverSubmit = async (e: FormEvent) => {
    // prevent form standard refresh on submit
    e.preventDefault();

    if (!admission_date.match(datePattern) || admission_date.length > 10) {
      setAdmissionInputError(true);
    }

    if (!birthdate.match(datePattern) || birthdate.length > 10) {
      setBirthdateInputError(true);
    }

    if (birthdateInputError && admissionInputError) {
      // creating naver in navedex api
      await navedexApi
        .post(
          "navers",
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
          setCreatingStatus("created");
          setAdmissionInputError(false);
          setBirthdateInputError(false);
        })
        .catch((err) => {
          console.log(err);
          setCreatingStatus("error");
        });
    }
  };

  useEffect(() => {
    // if naver was been created, then
    if (creatingStatus === "created") {
      modalContext?.handleActive("naver-created");
      setTimeout(() => {
        history.push("/navers");
        setCreatingStatus("inactive");
      }, 1000);
    } else if (creatingStatus === "error") {
      modalContext?.handleActive("naver-create-error");
      setCreatingStatus("inactive");
    }
  }, [creatingStatus, history, modalContext]);

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
    handleCreateNaverSubmit,
    admissionInputError,
    birthdateInputError,
  };
};

export default useCreateNaver;
