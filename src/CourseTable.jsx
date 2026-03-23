import React from 'react';
import { Table } from 'react-bootstrap';
import TableRow from './TableRow';

const courses = [
  { description: 'Calculus I', semester: 'Fall 2023', prefix: 'MAT', number: '161', grade: 'A' },
  { description: 'Calculus II', semester: 'Spring 2024', prefix: 'MAT', number: '162', grade: 'B+' },
  { description: 'Discrete Mathematics', semester: 'Fall 2023', prefix: 'MAT', number: '151', grade: 'A-' },
  { description: 'Introduction to Computing', semester: 'Fall 2023', prefix: 'CSC', number: '110', grade: 'A' },
  { description: 'Data Structures', semester: 'Spring 2024', prefix: 'CSC', number: '220', grade: 'B+' },
];

function CourseTable() {
  return (
    <div className="container mt-4">
      <div className="row mb-2">
        <div className="col">
          <p><strong>Student Name:</strong> Ethan Charest</p>
          <p><strong>WCU ID:</strong> EC1053226</p>
        </div>
      </div>

      <h4
        className="text-center text-white py-2"
        style={{ backgroundColor: '#520c46' }}
      >
        Academic Foundations
      </h4>

      <Table bordered>
        <thead>
          <tr>
            <th>Description</th>
            <th>Semester</th>
            <th>Prefix</th>
            <th>Number</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <TableRow
              key={index}
              description={course.description}
              semester={course.semester}
              prefix={course.prefix}
              number={course.number}
              grade={course.grade}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default CourseTable;