import { SnackbarList } from '@wordpress/components';
import styled from 'styled-components';
import { AlertStyle } from '../alert/alert-style';
import { IAlertListProps } from './alert-list-type';

export const StyledSnackbarList = styled(SnackbarList)<IAlertListProps>`
  &&& {
    & .components-snackbar {
      ${AlertStyle}
    }
  }
`;
