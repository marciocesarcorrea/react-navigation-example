import React from 'react';
import {Platform} from 'react-native';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {Transition} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createAppContainer,
} from 'react-navigation';

import Tab1Screen from './pages/Tab1';
import Tab2Screen from './pages/Tab2';
import Details from './pages/Details';
import Other from './pages/Other';

const defaultNavigation = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#2196f3',
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTintColor: '#ffffff',
  },
};

function Tab1() {
  return {
    screen: Tab1Screen,
    params: {
      title: 'Home',
    },
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="home" size={24} color={tintColor} />
      ),
    },
  };
}

function Tab2() {
  return {
    screen: Tab2Screen,
    params: {
      title: 'Settings',
    },
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="settings" size={24} color={tintColor} />
      ),
    },
  };
}

const MainTabs = createMaterialTopTabNavigator(
  {
    Tab1: Tab1(),
    Tab2: Tab2(),
  },
  {
    resetOnBlur: true,
    tabBarPosition: Platform.OS === 'ios' ? 'bottom' : 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#ffffff',
        borderBottomWidth: 2,
      },
    },
  },
);

MainTabs.navigationOptions = ({navigation}) => {
  const {routeName, params} = navigation.state.routes[navigation.state.index];
  const headerTitle = params && params.title ? params.title : routeName;
  return {
    headerTitle,
  };
};

const AppNavigator = () => {
  return createAnimatedSwitchNavigator(
    {
      DetailsStack: createStackNavigator(
        {
          Details,
          Other,
        },
        defaultNavigation,
      ),
      App: createStackNavigator(
        {
          MainTabs,
        },
        defaultNavigation,
      ),
    },
    {
      transition: (
        <Transition.Together>
          <Transition.Out
            type="slide-bottom"
            durationMs={400}
            interpolation="easeIn"
          />
          <Transition.In type="fade" durationMs={500} />
        </Transition.Together>
      ),
      initialRouteName: 'App',
    },
  );
};

export default () => createAppContainer(AppNavigator());
