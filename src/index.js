import React from 'react';
import {YellowBox, StatusBar} from 'react-native';

import Footer from './components/Footer';
import App from './App';

const AppContext = React.createContext({});

YellowBox.ignoreWarnings(['Warning: ViewPagerAndroid']);
function Index() {
  const [show, setShow] = React.useState(true);
  return (
    <AppContext.Provider value={{show, setShow}}>
      <StatusBar barStyle="light-content" backgroundColor="rgb(23, 105, 170)" />
      <App />
      {show && <Footer />}
    </AppContext.Provider>
  );
}
export {Index as default, AppContext};
