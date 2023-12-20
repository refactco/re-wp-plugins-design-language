import { Snackbar } from '@wordpress/components';
import styled, { css } from 'styled-components';

export const AlertStyle = css`
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);
  color: #002729;
  height: 48px;
  line-height: 48px;
  padding: 0 12px;

  &.components-snackbar {
    &--success {
      & .components-snackbar__icon {
        & svg {
          fill: #2e9e62;
        }
      }
    }
    &--error {
      & .components-snackbar__icon {
        & svg {
          fill: #e53935;
        }
      }
    }
    &--info {
      & .components-snackbar__icon {
        & svg {
          fill: #2196f3;
        }
      }
    }
    &--warning {
      & .components-snackbar__icon {
        & svg {
          fill: #ff9800;
        }
      }
    }
  }

  & .components-snackbar__content {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
    margin: 0;
  }

  & .components-snackbar__icon {
    position: static;

    & svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const StyledSnackbar = styled(Snackbar)`
  &&& {
    ${AlertStyle}
  }
`;
