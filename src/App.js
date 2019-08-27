import React from 'react';
import createRoutes from './routes';
import NavigationService from './components/NavigationService';

const Routes = createRoutes();
export default function App() {
  return (
    <Routes
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  );
}
