import React from 'react';
import {Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Container from '../../components/Container';
import Title from '../../components/Title';

export default function Other({navigation}) {
  const {routeName} = navigation.state;
  return (
    <Container>
      <Title>Other</Title>
      <Button
        onPress={() => {
          navigation.navigate('Tab2', {routeName});
        }}
        title="Go Tab2"
      />
    </Container>
  );
}
Other.navigationOptions = ({navigation}) => ({
  title: 'Other Details',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
