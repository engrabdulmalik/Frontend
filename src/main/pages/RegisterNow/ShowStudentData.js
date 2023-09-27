import "./ShowStudentData.css";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Swal from "sweetalert2";
import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";
const ShowStudentData = (props) => {
  const fileData = props.StudentData.map((item) => item.map((items) => items));
  // const fileData = [
  //   { name: "Abdul", email: "abdul@gmail.com", address: "Abc" },
  //   { name: "Abdul", email: "abdul@gmail.com", address: "Abc" },
  //   { name: "Abdul", email: "abdul@gmail.com", address: "Abc" },
  // ];
  const componentPDF = useRef();
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const fileName = month + "/" + date + "/" + year;
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=utf-8";
  const fileExtension = ".xlsx";

  const exportToExcel = async () => {
    const ws = XLSX.utils.json_to_sheet(...fileData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: fileName,
    onAfterPrint: () =>
      Swal.fire({
        title: "Awesome !",
        text: "File Saved Successfully as PDF!!!",
        type: "success",
      }),
  });
  return (
    <div className="res_main">
      <div
        className="text-center"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        <button className="res_but" onClick={generatePDF}>
          Export to PDF
        </button>
      </div>
      <div
        className="text-center"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        <button className="res_but" onClick={(e) => exportToExcel(fileName)}>
          Export to EXCEL
        </button>
      </div>
      <div ref={componentPDF} style={{ width: "100%" }}>
        <table
          className="responsive-table"
          style={{ textAlign: "center", border: "2px solid black" }}
        >
          <thead>
            <tr>
              <th>Student ID</th>
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
            {props.StudentData.map((item) =>
              item.map((items) => (
                <tr key={item.id}>
                  <td>Batch 1-F2023-{items.id}</td>
                  <td>{items.name}</td>
                  <td>{items.email}</td>
                  <td>{items.phoneNumber}</td>
                  <td>{items.address}</td>
                  <td>{items.course}</td>
                  <td>{items.lecture1}</td>
                  <td>{items.lecture2}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowStudentData;
