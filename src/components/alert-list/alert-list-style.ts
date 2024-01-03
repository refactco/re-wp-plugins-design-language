import { SnackbarList } from '@wordpress/components';
import styled from 'styled-components';
import { AlertStyle } from '../alert/alert-style';
import { IAlertListProps } from './alert-list-type';

export const StyledSnackbarList = styled(SnackbarList)<IAlertListProps>`
  &&& {
    & .components-snackbar {
      ${AlertStyle}
    }

    & > div {
      &:not(:first-of-type) {
        & > .components-snackbar-list__notice-container {
          padding-top: 8px;
        }
      }
    }
  }
`;
