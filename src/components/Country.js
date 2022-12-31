import { Select } from '@chakra-ui/react';
import { countries } from 'country-list-json';

function Country() {
  return (
    <Select id="countryList" variant="filled" placeholder="Select Country">
      {countries.map(country => (
        <option key={country.code} value={country.code.toLowerCase()}>
          {country.name}
        </option>
      ))}
    </Select>
  );
}

export default Country;
