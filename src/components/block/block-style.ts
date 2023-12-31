import styled from 'styled-components';

export const StyledBlock = styled.div`
  display: flex;
  height: 132px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #d7dbdb;
  background: #fff;
  align-items: center;
`;

export const StyledBlockIconTitle = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding-inline: 30px;
  border-inline-end: 1px solid #d7dbdb;
  height: 100%;
  width: 120px;
`;

export const StyledBlockTitle = styled.span`
  color: #002729;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
`;

export const StyledBlockBody = styled.div`
  padding-inline: 32px;
  width: 100%;
  flex: 1;
`;
