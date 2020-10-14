import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// apis
import navedexApi from "../services/navedexApi";
// utils
import getDateYearsDifference from "../utils/getYearsDifference";

const useShowNaver = () => {
  const [name, setName] = useState("");
  const [job_role, setJobRole] = useState("");
  const [age, setAge] = useState("");
  const [companyTime, setCompanyTime] = useState("");
  const [projects, setProjects] = useState("");
  const [image, setImage] = useState("");

  const { naver_id } = useParams();

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
        setJobRole(response.job_role);
        setImage(response.url);
        setProjects("1 projeto");

        const currentDate = new Date();
        const birthday = new Date(response.birthdate);
        const admission = new Date(response.admission_date);

        const age = String(getDateYearsDifference(currentDate, birthday));
        const companyTime =
          getDateYearsDifference(currentDate, admission) > 1
            ? `${getDateYearsDifference(currentDate, admission)} anos`
            : "1 ano";

        setAge(age);
        setCompanyTime(companyTime);
      }
    }

    getNaver();
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
