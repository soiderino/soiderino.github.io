import jscolor from '@eastdesire/jscolor';
import { Tooltip } from '@chakra-ui/react';

function ColorPicker() {
  jscolor.presets.default = {
    format: 'hex',
    uppercase: false,
    alphaChannel: false,
    borderWidth: 0,
    borderRadius: 12,
    backgroundColor: '#333',
    padding: 12,
    sliderSize: 6,
    crossSize: 2,
    pointerThickness: 1,
  };

  return (
    <div>
      <Tooltip placement="top" label="Change font color">
        <button
          id="colorPicker"
          style={{ width: '310px', borderRadius: '5px', padding: '.5rem' }}
          data-jscolor="{valueElement:'#color1'}"
        ></button>
      </Tooltip>
      <input id="color1" value="#49ffad" name="[value]" type="hidden" />
    </div>
  );
}

export default ColorPicker;
