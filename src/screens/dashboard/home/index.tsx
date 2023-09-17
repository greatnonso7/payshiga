import React from 'react';
import { Box, Text } from 'design-system';
import { Icon, Screen } from 'shared';
import theme from 'theme';
import {
  BalanceContainer,
  DashboardActionContainer,
  DashboardOption,
} from './components';
import { dashboardActions, dashboardOptions } from 'data';
import { ScrollView, TouchableOpacity } from 'react-native';
import { wp } from 'utils';

const Home = () => {
  return (
    <Screen removeSafeaArea backgroundColor={theme.colors.BG_MAIN_BLACK}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <Box
          mx={wp(24)}
          my={20}
          flexDirection={'row'}
          justifyContent={'space-between'}>
          <Box flexDirection={'row'} alignItems={'center'}>
            <Box
              width={32}
              height={32}
              justifyContent={'center'}
              alignItems={'center'}
              backgroundColor={theme.colors.PINK}
              borderRadius={100}>
              <Text color={theme.colors.APP_BLACK}>C</Text>
            </Box>
            <Text pl={10} variant="h1" color={theme.colors.WHITE} fontSize={24}>
              Home
            </Text>
          </Box>
          <Box activeOpacity={0.8} as={TouchableOpacity}>
            <Icon name="scan" />
          </Box>
        </Box>

        <BalanceContainer />

        <Box
          mx={20}
          mt={16}
          flexDirection={'row'}
          justifyContent={'space-between'}>
          {dashboardOptions?.map(item => {
            return <DashboardOption item={item} />;
          })}
        </Box>

        <Box backgroundColor={theme.colors.APP_BLACK} mt={32} px={24} py={20}>
          <Text color={theme.colors.WHITE} variant="headerMedium" fontSize={18}>
            Do more with Shiga
          </Text>

          <Box mt={36} height={200}>
            {dashboardActions?.map(item => {
              return <DashboardActionContainer item={item} />;
            })}
          </Box>
        </Box>
      </ScrollView>
    </Screen>
  );
};

export default Home;
