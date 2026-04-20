import React from 'react';

function TableRow({ id, title, grade, took }) {
  const isDiscrepancy = (grade && !took) || (!grade && took);

  return (
    <tr>
      <td>{id}</td>
      <td style={{ color: isDiscrepancy ? 'red' : 'inherit' }}>
        {title}
      </td>
      <td>{grade}</td>
      <td style={{ color: isDiscrepancy ? 'red' : 'inherit' }}>
        {took ? 'Yes' : 'No'}
      </td>
    </tr>
  );
}

export default TableRow;