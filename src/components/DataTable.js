import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Rakesh', age: 39 },
  { id: 2, lastName: 'Singhania', firstName: 'Kenny', age: 44 },
  { id: 3, lastName: 'Verma', firstName: 'Jack', age: 22 },
  { id: 4, lastName: 'Stark', firstName: 'Ashish', age: 19 },
  { id: 5, lastName: 'Sharma', firstName: 'Tony', age: 28 },
  { id: 6, lastName: 'Lanister', firstName: 'Sandeep', age: 62 },
  { id: 7, lastName: 'Sharma', firstName: 'Ferrari', age: 55 },
  { id: 8, lastName: 'Bacon', firstName: 'Ragini', age: 36 },
  { id: 9, lastName: 'Dixit', firstName: 'Harvey', age: 74 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
