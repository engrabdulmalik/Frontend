import { useEffect, useState } from "react";
const GetAPIData = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("/api/register")
      .then((response) => response.json())
      .then((json) => {
        console.log("json", json);
        setData((prevdata) => [...prevdata, json]);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  return (
    <div>
      <p>{console.log(data)}</p>
    </div>
  );
};

export default GetAPIData;
