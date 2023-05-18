import axios from "axios";

import { useEffect } from "react";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

function ListTasks() {
  useEffect(() => {
    api
      .get("/task")
      .then((response) => console.log(response.data))
      .catch((err) => {
        console.log("oops an error occurred" + err);
      });
  }, []);
}

export default {
  api,
  ListTasks,
};
