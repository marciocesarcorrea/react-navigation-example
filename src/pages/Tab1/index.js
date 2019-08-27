import React from 'react';
import {Button} from 'react-native';

import Container from '../../components/Container';
import Title from '../../components/Title';

export default function Tab1({navigation}) {
  const {routeName} = navigation.state;
  return (
    <Container>
      <Title>Tab1</Title>
      <Button
        onPress={() => {
          navigation.navigate('Details', {routeName});
        }}
        title="Details"
      />
    </Container>
  );
}
Tab1.navigationOptions = {
  header: null,
};
