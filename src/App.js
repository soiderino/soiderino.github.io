import React from 'react';
import { ChakraProvider, Box, Grid, extendTheme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import '@fontsource/inter';
import Card from './components/Card';
import { motion } from 'framer-motion';
import './components/Fonts/fonts.css';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        transitionProperty: 'all',
        transitionDuration: 'normal',
      },
    },
  },
  config: {
    disableTransitionOnChange: false,
  },
  fonts: {
    body: `'Inter', sans-serif`,
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xs">
        <Grid p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
          >
            <Card />
          </motion.div>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
