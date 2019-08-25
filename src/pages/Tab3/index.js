import React from 'react';
import {Text, Button, View} from 'react-native';

//import {Container} from './styles';

export default function Tab3({navigation}) {
  const {routeName} = navigation.state;
  return (
    <View>
      <Text>Tab3</Text>
      <Button
        onPress={() => {
          navigation.navigate('HomeDetailsScreen', {routeName});
        }}
        title="Home Details"
      />
    </View>
  );
}
Tab3.navigationOptions = {
  header: null,
};
