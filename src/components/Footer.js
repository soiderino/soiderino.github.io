import { IconButton } from '@chakra-ui/react';
import { FaQuestionCircle } from 'react-icons/fa';

export const Footer = props => {
  return (
    <IconButton
      marginLeft="2"
      color="current"
      variant="ghost"
      size="md"
      icon={<FaQuestionCircle />}
      {...props}
    />
  );
};

export default Footer;
