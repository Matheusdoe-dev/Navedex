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

  // index process status
  const [indexStatus, setIndexStatus] = useState("");

  // getting all navers on navedex api
  useEffect(() => {
    setIndexStatus("indexing");
    async function getNavers() {
      await navedexApi
        .get("navers", {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        })
        .then((r) => r.data)
        .then((r) => {
          setNavers(r);
          setIndexStatus("indexed");
        })
        .catch((err) => console.log(err));
    }

    getNavers();
  }, []);

  return { navers, indexStatus };
};

export default useIndexNavers;
