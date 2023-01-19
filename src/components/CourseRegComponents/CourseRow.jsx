import React from 'react'

function CourseRow({ course, key }) {
  return (
    <tr>
      <td className="formControl">
        <input type="checkbox" id={`course-${key}`} />
      </td>
      <td>{course.code}</td>
      <td>{course.name}</td>
      <td>{course.units}</td>
    </tr>
  );
}

export default CourseRow