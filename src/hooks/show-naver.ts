// hooks
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// apis
import navedexApi from "../services/navedexApi";
// utils
import getDateYearsDifference from "../utils/getYearsDifference";

// show one naver custom hook
const useShowNaver = () => {
  // naver data
  const [name, setName] = useState("");
  const [job_role, setJobRole] = useState("");
  const [age, setAge] = useState("");
  const [companyTime, setCompanyTime] = useState("");
  const [projects, setProjects] = useState("");
  const [image, setImage] = useState("");

  // get naver id from route params
  const { naver_id } = useParams();

  // getting naver from navedex api with the id and put all data on states
  useEffect(() => {
    async function getNaver() {
      await navedexApi
        .get(`navers/${naver_id}`, {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        })
        .then((r) => r.data)
        .then((r) => {
          setName(r.name);
          setJobRole(r.job_role);
          setImage(r.url);
          setProjects("1 projeto");

          const currentDate = new Date();
          const birthday = new Date(r.birthdate);
          const admission = new Date(r.admission_date);

          const age = String(getDateYearsDifference(currentDate, birthday));
          const companyTime =
            getDateYearsDifference(currentDate, admission) > 1
              ? `${getDateYearsDifference(currentDate, admission)} anos`
              : "1 ano";

          setAge(age);
          setCompanyTime(companyTime);
        })
        .catch((err) => console.log(err));
    }

    if (naver_id) {
      getNaver();
    }
  }, [naver_id]);

  const naver = {
    name,
    job_role,
    companyTime,
    age,
    projects,
    image,
  };

  return { naver };
};

export default useShowNaver;
