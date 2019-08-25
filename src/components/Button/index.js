import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container} from './styles';

export default function Button({...rest}) {
  return (
    <Container {...rest}>
      <Icon name="add" size={24} color="#ffffff" />
    </Container>
  );
}
