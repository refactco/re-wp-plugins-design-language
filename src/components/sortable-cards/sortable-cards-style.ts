import styled from 'styled-components';

export const StyledListContainer = styled.div`
  background: #fff;
  padding: 8px;
  width: fit-content;
`;

export const StyledListItem = styled.div<any>`
  height: 60px;
  padding-inline: 12px;
  margin-bottom: 12px;
  display: flex;
  gap: 12px;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.selected ? '#2E9E62' : '#d7dbdb')};
  background: ${(props) => (props.selected ? '#E5F7E3' : '#fff')};
`;

export const StyledListItemTitle = styled.span`
  min-width: 283px;
`;

export const StyledListItemBadge = styled.span<any>`
  border-radius: 48px;
  padding: 4px 12px;
  background: ${(props) => (props.selected ? '#c6f0c2' : '#D7DBDB')};
  color: ${(props) => (props.selected ? '#003233' : '#798686')};
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
`;
