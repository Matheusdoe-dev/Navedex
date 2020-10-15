// hooks
import { useState, FormEvent, useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
// apis
import navedexApi from "../services/navedexApi";
// contexts
import { ModalContext } from "./modal";

const useEditNaver = () => {
  // naver data
  const [name, setName] = useState("");
  const [job_role, setRole] = useState("");
  const [birthdate, setBirthDate] = useState("");
  const [admission_date, setAdmissionDate] = useState("");
  const [project, setProject] = useState("");
  const [url, setUrl] = useState("");

  // edit status
  const [editingStatus, setEditingStatus] = useState("inactive");

  // date inputs validation states
  const [admissionInputError, setAdmissionInputError] = useState(false);
  const [birthdateInputError, setBirthdateInputError] = useState(false);

  // using modal context
  const modalContext = useContext(ModalContext);

  const history = useHistory();

  // regex - date schema
  const datePattern = /(?:\d{2}[/]){2}\d{4}/g;

  // get naver id from route params
  const { naver_id } = useParams();

  // naver edit custom hook
  const handleEditNaverSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // check if the admission date input/state follow the date schema
    if (!admission_date.match(datePattern) || admission_date.length > 10) {
      setAdmissionInputError(true);
    }

    // check if the birthdate input/state follow the date schema
    if (!birthdate.match(datePattern) || birthdate.length > 10) {
      setBirthdateInputError(true);
    }

    if (birthdateInputError && admissionInputError) {
      // editing naver on navedex api
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
    }
  };

  useEffect(() => {
    // getting naver by id from route params
    async function getNaver() {
      await navedexApi
        .get(`navers/${naver_id}`, {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        })
        .then((r) => r.data)
        .then((r) => {
          // putting naver data on states
          setName(r.name);
          setRole(r.job_role);
          setUrl(r.url);
          setProject(r.project);
          setBirthDate(
            r.birthdate.split("T")[0].split("-").reverse().join("/")
          );
          setAdmissionDate(
            r.admission_date.split("T")[0].split("-").reverse().join("/")
          );
        })
        .catch((err) => console.log(err));
    }

    getNaver();
  }, [naver_id]);

  useEffect(() => {
    // if naver was been updated, then
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
    admissionInputError,
    birthdateInputError,
  };
};

export default useEditNaver;
