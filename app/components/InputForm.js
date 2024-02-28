"use client";
import { Select, Container, Title, Button, Alert } from "@mantine/core";
import { useState } from "react";
import { IconInfoCircle } from "@tabler/icons-react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { calculateCGPA } from "./calculateCGPA";
const InputForm = () => {
  const [course1, setCourse1] = useState("A");
  const [course2, setCourse2] = useState("A");
  const [course3, setCourse3] = useState("A");
  const [course4, setCourse4] = useState("A");
  const [course5, setCourse5] = useState("A");
  const [course6, setCourse6] = useState("A");
  const [cgpa, setcgpa] = useState(0);
  const [visibility, setVisibility] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      course1 == null ||
      course2 == null ||
      course3 == null ||
      course4 == null ||
      course5 == null ||
      course6 == null
    ) {
      const icon = <IconInfoCircle />;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill all fields!",
      });
      return;
    }
    const courses = [course1, course2, course3, course4, course5, course6];

    let cgpacalculated = calculateCGPA(courses);
    setcgpa(cgpacalculated.toFixed(2));
    setVisibility(true);
  };

  return (
    <div style={{ color: "white"}}>
      <Container
        style={{
            width:'70vw',
          padding: "20px",
          border: "2px solid #e1e1e1",
          borderRadius: "10px",
          backgroundColor: "#000000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Title order={1} style={{textAlign:'center'}}>CGPA Calculator Tool</Title>
        <Title order={3} style={{textAlign:'center'}}>Enter your predicted grade in each course</Title>

        <div className="form-container" style={{ padding: "10px" }}>
          <form>
            <div className="form-option">
              <Select
                value={course1}
                onChange={(value) => setCourse1(value)}
                label="IMA121"
                placeholder="Pick value"
                data={["A", "A-", "B", "C", "D", "E", "F"]}
                defaultValue="A"
                clearable
              />
            </div>
            <div className="form-option">
              <Select
                value={course2}
                onChange={(value) => setCourse2(value)}
                label="IHS121"
                placeholder="Pick value"
                data={["A", "A-", "B", "C", "D", "E", "F"]}
                defaultValue="A"
                clearable
              />
            </div>
            <div className="form-option">
              <Select
                value={course3}
                onChange={(value) => setCourse3(value)}
                label="ICS121"
                placeholder="Pick value"
                data={["A", "A-", "B", "C", "D", "E", "F"]}
                defaultValue="A"
                clearable
              />
            </div>
            <div className="form-option">
              <Select
                value={course4}
                onChange={(value) => setCourse4(value)}
                label="ICS122"
                placeholder="Pick value"
                data={["A", "A-", "B", "C", "D", "E", "F"]}
                defaultValue="A"
                clearable
              />
            </div>
            <div className="form-option">
              <Select
                value={course5}
                onChange={(value) => setCourse5(value)}
                label="ICS123"
                placeholder="Pick value"
                data={["A", "A-", "B", "C", "D", "E", "F"]}
                defaultValue="A"
                clearable
              />
            </div>
            <div className="form-option">
              <Select
                value={course6}
                onChange={(value) => setCourse6(value)}
                label="IEC121"
                placeholder="Pick value"
                data={["A", "A-", "B", "C", "D", "E", "F"]}
                defaultValue="A"
                clearable
              />
            </div>
            <div
              className="submit-btn"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button className="submitbutton" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div>
          {visibility && (
            <Title order={3}>Your calculated CGPA is {cgpa}</Title>
            
          )}
        </div>
      </Container>
    </div>
  );
};

export default InputForm;
