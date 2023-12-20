import { AlertStyle } from '@components/alert/alert-style';
import { SnackbarList } from '@wordpress/components';
import styled from 'styled-components';
import { IAlertListProps } from './alert-list-type';

export const StyledSnackbarList = styled(SnackbarList)<IAlertListProps>`
  &&& {
    & .components-snackbar {
      ${AlertStyle}
    }
  }
`;
