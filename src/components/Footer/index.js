import React from 'react';
import {View} from 'react-native';

import {Button} from './styles';

import NavigationService from '../NavigationService';

export default function Footer() {
  return (
    <View>
      <Button
        onPress={() => {
          NavigationService.navigate('Details', {routeName: 'Tab1'});
        }}
      />
    </View>
  );
}
