import { useState } from "react";
import GetAPIData from "./GetAPIData";
const StudentData = () => {
  const [StudentData, setStudentData] = useState([]);
  const onReceiveStudentData = (studentdata) => {
    console.log(studentdata);
    setStudentData((prevdata) => [studentdata, ...prevdata]);
  };

  return (
    <div>
      <GetAPIData showStudentData={onReceiveStudentData} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Address</th>
            <th>Courses</th>
            <th>Lecture(Weekend)</th>
            <th>Lecture(Weekday)</th>
          </tr>
        </thead>
        <tbody>
          {StudentData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.address}</td>
              <td>{item.course}</td>
              <td>{item.lecture1}</td>
              <td>{item.lecture2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentData;
