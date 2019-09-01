import React from 'react';
import {YellowBox, StatusBar} from 'react-native';
import CodePush from 'react-native-code-push';

import Footer from './components/Footer';
import App from './App';

export const AppContext = React.createContext({});

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
export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(Index);
