import React from 'react';
import { Box, Text } from 'design-system';
import { Screen } from 'shared';
import theme from 'theme';

const Home = () => {
  return (
    <Screen removeSafeaArea backgroundColor={theme.colors.BG_MAIN_BLACK}>
      <Box>
        <Text>Home</Text>
      </Box>
    </Screen>
  );
};

export default Home;
