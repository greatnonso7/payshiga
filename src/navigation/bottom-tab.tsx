import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Card from 'screens/dashboard/card';
import Home from 'screens/dashboard/home';
import Profile from 'screens/dashboard/profile';
import Search from 'screens/dashboard/search';
import theme from 'theme';
import { hp } from 'utils';
import { StyleSheet } from 'react-native';
import { Icon } from 'shared';
import { Box } from 'design-system';
import { BottomTabStackParamList } from 'types';
import Transactions from 'screens/dashboard/transactions';

const DashboardBottomTabs = createBottomTabNavigator<BottomTabStackParamList>();

interface BottomTabProps {
  name: string;
  focused: boolean;
}

const BottomTabBar = () => {
  const BottomTab = ({ name }: BottomTabProps) => {
    const icon = name?.toLowerCase();
    return (
      <Box key={name} style={styles.tabContainer}>
        <Icon name={icon} />
      </Box>
    );
  };

  return (
    <DashboardBottomTabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        unmountOnBlur: true,
        tabBarStyle: {
          height: 80,
          backgroundColor: theme.colors.MAIN_BLACK,
          borderColor: theme.colors.MAIN_BLACK,
        },
        tabBarActiveTintColor: theme.colors.MAIN_BLACK,
        tabBarLabelStyle: {
          fontSize: hp(10),
          fontFamily: theme.font.ShigaSansRegular,
        },
        tabBarShowLabel: false,
      }}>
      <DashboardBottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <BottomTab name="Home" focused={focused} />
          ),
        }}
      />

      <DashboardBottomTabs.Screen
        name="Transactions"
        component={Transactions}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <BottomTab name="Transactions" focused={focused} />
          ),
        }}
      />
      <DashboardBottomTabs.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <BottomTab name="Search" focused={focused} />
          ),
        }}
      />
      <DashboardBottomTabs.Screen
        name="Card"
        component={Card}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <BottomTab name="Card" focused={focused} />
          ),
        }}
      />
      <DashboardBottomTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <BottomTab name="Profile" focused={focused} />
          ),
        }}
      />
    </DashboardBottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // top: isIos ? 10 : 0,
  },
});

export default BottomTabBar;
