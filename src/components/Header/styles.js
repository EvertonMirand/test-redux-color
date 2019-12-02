import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  background-color: ${props => props.color};
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
