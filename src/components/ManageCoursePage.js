import React, { useState } from "react";
import CourseForm from "./CourseForm";

const ManageCoursePage = props => {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  function handleChange({ target }) {
    const updateCourse = { ...course, [target.name]: target.value };
    setCourse(updateCourse);
  }

  return (
    <>
      <h2>Manage Courses</h2>
      <CourseForm course={course} onChange={handleChange} />
    </>
  );
};

export default ManageCoursePage;
