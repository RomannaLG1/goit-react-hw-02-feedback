import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 140px;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal};
  text-transform: uppercase;
  background-color: transparent;
  color: ${p =>
    p.children[1] === 'good'
      ? p.theme.colors.succes
      : p.children[1] === 'neutral'
      ? p.theme.colors.neutral
      : p.theme.colors.warning};
  transition: 300ms linear;
  cursor: pointer;
  & :hover,
  :focus {
    transform: translateY(-0.5px);
  }
`;
