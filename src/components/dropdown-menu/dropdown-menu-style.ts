import { DropdownMenu } from '@wordpress/components';
import styled from 'styled-components';

export const StyledDropDownMenu = styled(DropdownMenu)`
  &&& {
    & button {
      color: inherit;
      font-size: 14px;
      font-weight: 600;
      line-height: 22px;
      opacity: 0.7;

      &:hover {
        opacity: 1;
      }

      &:focus {
        box-shadow: none;
        color: #fff;
      }
    }
  }
`;
