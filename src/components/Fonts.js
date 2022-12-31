// eslint-disable-next-line
import { Select } from '@chakra-ui/react';
import fontfaceonload from 'fontfaceonload';
import './Fonts/fonts.css';

function Fonts() {
  const fontList = [
    {
      id: 1,
      name: 'Anton',
      font: 'Anton',
    },
    {
      id: 2,
      name: 'ENDOR',
      font: 'ENDOR',
    },
    {
      id: 3,
      name: 'Gloomy',
      font: 'Gloomy',
    },
    {
      id: 4,
      name: 'Hydrosquad',
      font: 'hydrosquad',
    },
    {
      id: 5,
      name: 'Masque',
      font: 'MASQUE',
    },
    {
      id: 6,
      name: 'Moderna',
      font: 'MODERNA',
    },
    {
      id: 7,
      name: 'Mollen',
      font: 'Mollen',
    },
    {
      id: 8,
      name: 'Spiderwick',
      font: 'Spiderwick',
    },
    {
      id: 9,
      name: 'Stiletto',
      font: 'Stiletto',
    },
    {
      id: 10,
      name: 'They Perished',
      font: 'TheyPerished',
    },
    {
      id: 11,
      name: 'Timeline',
      font: 'Timeline',
    },
    {
      id: 12,
      name: 'Vasavine',
      font: 'Vasavine',
    },
  ];

  fontList.map(function (font) {
    fontfaceonload(font.font, {
      success: function () {},
    });
  });

  return (
    <Select id="fontList" variant="filled" placeholder="Select Font">
      {fontList.map(font => (
        <option key={font.id} value={font.font}>
          {font.name}
        </option>
      ))}
    </Select>
  );
}

export default Fonts;
