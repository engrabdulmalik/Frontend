import { useEffect, useState } from "react";
const GetAPIData = (props) => {
  const [data, setData] = useState("");
  useEffect(() => {
    // Simulate fetching data or some other asynchronous operation
    const fetchData = async () => {
      try {
        const response = await fetch("/api/register/");
        const data = await response.json();

        // Send data to the parent component using the callback
        props.showStudentData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <div></div>;
};

export default GetAPIData;
