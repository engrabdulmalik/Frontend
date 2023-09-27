import { useState } from "react";
import GetAPIData from "./GetAPIData";
import ShowStudentData from "./ShowStudentData";
const StudentData = () => {
  const [StudentData, setStudentData] = useState([]);
  const onReceiveStudentData = (studentdata) => {
    setStudentData((prevdata) => [...prevdata, studentdata]);
  };
  return (
    <div>
      <GetAPIData showStudentData={onReceiveStudentData} />
      <ShowStudentData StudentData= {StudentData}></ShowStudentData>
    </div>
  );
};

export default StudentData;
