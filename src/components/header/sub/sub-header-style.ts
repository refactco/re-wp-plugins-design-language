import styled from 'styled-components';

export const StyledSubHeader = styled.div`
  position: absolute;
  height: 70px;
  bottom: -70px;
  left: 0;
  width: 100%;
  z-index: 100;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);
  padding: 0px 45px;
  box-sizing: border-box;
`;

export const StyledTitleButtonItem = styled.div`
  display: flex;
  gap: 24px;
  height: 100%;
  align-items: center;
`;

export const StyledTitleButtonItemTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
  margin: 0;
`;
