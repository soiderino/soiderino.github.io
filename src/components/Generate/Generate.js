import { Button, useToast } from '@chakra-ui/react';
import background from './images/pooh.jpg';

function Generate() {
  const toast = useToast();

  function showToast() {
    let username = document.getElementById('userName').value;
    let countryList = document.getElementById('countryList').value;
    let fontList = document.getElementById('fontList').value;
    let colorPicker = document.getElementById('color1').value;

    if (!username || !countryList || !fontList || !colorPicker) {
      toast({
        title: 'Complete all fields',
        status: 'error',
        isClosable: true,
        duration: 3000,
        position: 'top-left',
      });
      return;
    } else {
      toast({
        title: 'Successfully Generated',
        description:
          'To download, press right click on image then "Save Image As"',
        status: 'success',
        isClosable: true,
        duration: 3000,
        position: 'top-left',
      });

      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');

      const imageURL = [
        background,
        'https://flagcdn.com/w320/' + countryList + '.png',
      ];
      const images = [];
      let imageCount = 0;

      function allLoaded() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(images[0], 0, 0, 226, 225);
        ctx.drawImage(images[1], 0, 0, 120, 70);

        ctx.fillStyle = colorPicker;
        ctx.font = '30px ' + fontList;
        ctx.textAlign = 'center';
        ctx.strokeStyle = 'black';

        ctx.fillText(username, 110, 150);
        ctx.strokeText(username, 110, 150);
      }

      imageURL.forEach(src => {
        const image = new Image();
        image.src = src;
        image.onload = () => {
          imageCount += 1;
          if (imageCount === imageURL.length) {
            allLoaded();
          }
        };
        images.push(image);
      });
    }
  }

  return (
    <Button onClick={() => showToast()} w="full">
      Generate
    </Button>
  );
}

export default Generate;
