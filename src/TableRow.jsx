import React from 'react';

function TableRow({ description, semester, prefix, number, grade }) {
  return (
    <tr>
      <td>{description}</td>
      <td>{semester}</td>
      <td>{prefix}</td>
      <td>{number}</td>
      <td>{grade}</td>
    </tr>
  );
}

export default TableRow;