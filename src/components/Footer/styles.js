import styled from 'styled-components/native';
import ButtonStyled from '../Button';

import {Platform} from 'react-native';

export const Button = styled(ButtonStyled)`
  align-self: flex-end;
  margin-top: ${Platform.OS === 'ios' ? '-104px' : '-56px'};
  margin-right: 10px;
`;
