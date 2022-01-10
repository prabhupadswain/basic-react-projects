import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

 const BasicTextFields = () => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <TextField id="filled-basic" label="Age" variant="filled" />
    </Box>
  );
}

export default BasicTextFields;