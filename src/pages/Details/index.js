import React from 'react';
import {NavigationActions} from 'react-navigation';
import {Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Container from '../../components/Container';
import Title from '../../components/Title';
import {AppContext} from '../../index';

export default function Details({navigation}) {
  const {routeName} = navigation.state;
  const context = React.useContext(AppContext);
  React.useEffect(() => {
    context.setShow(false);
    return () => {
      context.setShow(true);
    };
  });
  return (
    <Container>
      <Title>Details</Title>
      <Button
        onPress={() => {
          navigation.navigate('Other', {routeName});
        }}
        title="Other Details"
      />
    </Container>
  );
}
Details.navigationOptions = ({navigation}) => ({
  title: 'Details',
  headerLeft: () => {
    const routeName = navigation.getParam('routeName', 'Tab1');
    return (
      <TouchableOpacity
        onPress={() => {
          const resetAction = NavigationActions.navigate({
            routeName: 'MainTabs',
            action: NavigationActions.navigate({routeName}),
          });
          navigation.dispatch(resetAction);
        }}>
        <Icon name="chevron-left" size={20} color="#fff" />
      </TouchableOpacity>
    );
  },
});
