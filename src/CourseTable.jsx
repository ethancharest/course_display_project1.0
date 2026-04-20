import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import TableRow from './TableRow';

const courses = [
  { id: 1, title: 'CSC141', grade: 'A', took: true },
  { id: 2, title: 'CSC240', grade: 'A', took: true },
  { id: 3, title: 'CSC142', grade: 'B', took: true },
  { id: 4, title: 'CSC241', grade: 'A', took: false }, 
  { id: 5, title: 'ESS101', grade: '', took: false }, 
  { id: 6, title: 'ENG368', grade: 'C', took: true },
  { id: 7, title: 'BIO110', grade: '', took: true },  
];

function CourseTable() {
  const [filter, setFilter] = useState('');

  const filteredCourses = courses.filter(course => {
    if (filter === '') return false;
    if (filter === 'all') return true;
    return course.grade === filter;
  });

  return (
    <div className="container mt-4">

      <div
        className="d-flex align-items-center justify-content-center py-3 px-4 mb-3"
        style={{ backgroundColor: '#520c46', borderRadius: '6px' }}
      >
        <label
          className="text-white me-3 fw-semibold"
          style={{ whiteSpace: 'nowrap' }}
        >
          Enter a letter grade:
        </label>
        <input
          type="text"
          className="form-control w-50"
          placeholder="Enter A-D or all"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

       <Table bordered>
        <thead>
          <tr style={{ backgroundColor: '#520c46', color: 'white' }}>
            <th style={{ backgroundColor: '#520c46', color: 'white' }}>ID</th>
            <th style={{ backgroundColor: '#520c46', color: 'white' }}>Title</th>
            <th style={{ backgroundColor: '#520c46', color: 'white' }}>Grade</th>
            <th style={{ backgroundColor: '#520c46', color: 'white' }}>Taken?</th>
          </tr>
        </thead>
        <tbody>
          {filteredCourses.map(course => (
            <TableRow
              key={course.id}
              id={course.id}
              title={course.title}
              grade={course.grade}
              took={course.took}
            />
          ))}
        </tbody>
      </Table>

    </div>
  );
}

export default CourseTable;