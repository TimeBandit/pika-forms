// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState } from "react";

const baseUrl = "https://api.github.com/gists/";
const gistId = "05749d5bdaeb0d92d33c3abb47d5c852";
const gistName = "data";

const useLoadData = (id = gistId) => {
  const [data, setData] = useState<{ pages?: any[]; title?: string }>({});
  useEffect(() => {
    fetch(`${baseUrl}${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("network error");
        return res.json();
      })
      .then((data) => data.files[`${gistName}.json`].content)
      .then((string) => setData(JSON.parse(string)))
      .catch((error) => console.warn(error.message));
  }, [id]);

  return data;
};

export default useLoadData;
