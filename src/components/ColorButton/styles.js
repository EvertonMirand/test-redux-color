import styled from 'styled-components';

export const Button = styled.button`
  height: 30px;
  width: 120px;
  border-radius: 4px;
  background-color: ${props => props.color.color};
  color: ${props => props.color.textColor};
`;
