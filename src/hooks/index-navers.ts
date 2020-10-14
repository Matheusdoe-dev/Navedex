import { useEffect, useState } from "react";
// apis
import navedexApi from "../services/navedexApi";

interface Naver {
  id: string;
  name: string;
  admission_date: string;
  job_role: string;
  user_id: string;
  project: string;
  birthdate: string;
  url: string;
}

const useIndexNavers = () => {
  const [navers, setNavers] = useState<Naver[]>([]);

  useEffect(() => {
    async function getNavers() {
      const response = await navedexApi
        .get("navers", {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        })
        .then((r) => r.data)
        .catch((err) => console.log(err));

      setNavers(response);
    }

    getNavers();
  }, []);

  return { navers };
};

export default useIndexNavers;
