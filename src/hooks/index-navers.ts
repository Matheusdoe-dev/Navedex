// hooks
import { useEffect, useState } from "react";
// apis
import navedexApi from "../services/navedexApi";

// Naver object interface
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

// navers index custom hook
const useIndexNavers = () => {
  // state to store navers
  const [navers, setNavers] = useState<Naver[]>([]);

  // getting all navers on navedex api
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
