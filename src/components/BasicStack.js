import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicStack() {
  return (
    <div>
        <h2>Todo List</h2>
      <Stack spacing={2}>
        <Item>Pay the bills</Item>
        <Item>Buy groceries</Item>
        <Item>Go to the Gym</Item>
      </Stack>
    </div>
  );
}
