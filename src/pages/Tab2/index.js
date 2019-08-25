import React from 'react';
import {Button} from 'react-native';

import Container from '../../components/Container';
import Title from '../../components/Title';

export default function Tab2({navigation}) {
  const {routeName} = navigation.state;
  console.log('Tab2', routeName);
  return (
    <Container>
      <Title>Tab2</Title>
      <Button
        onPress={() => {
          navigation.navigate('Details', {routeName});
        }}
        title="Details"
      />
    </Container>
  );
}
Tab2.navigationOptions = {
  header: null,
};
