import React from 'react';
import {YellowBox} from 'react-native';

import Footer from './components/Footer';
import createRoutes from './routes';
import NavigationService from './components/NavigationService';

YellowBox.ignoreWarnings(['Warning: ViewPagerAndroid']);
export default function App() {
  const Routes = createRoutes();
  return (
    <>
      <Routes
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
      <Footer />
    </>
  );
}
