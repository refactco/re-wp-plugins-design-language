import styled from 'styled-components';

export const StyledTableRow = styled.div`
  display: flex;
  width: 100%;
  height: 56px;
  align-items: flex-start;

  &:not(:last-of-type) {
    border-bottom: 1px solid #d7dbdb;
  }
`;
