import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function CountrySelect() {
  const [country, setCountry] = React.useState('');

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Country</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={country}
          label='Select Country'
          onChange={handleCountryChange}
        >
          <MenuItem value={'India'}>India</MenuItem>
          <MenuItem value={'SL'}>Sri Lanka</MenuItem>
          <MenuItem value={'England'}>England</MenuItem>
          <MenuItem value={'Australia'}>Australia</MenuItem>
          <MenuItem value={'NZ'}>New Zealand</MenuItem>
          <MenuItem value={'RSA'}>South Africa</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default CountrySelect;
