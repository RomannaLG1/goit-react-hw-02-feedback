import styled from 'styled-components';

const List = styled.ul`
display: grid;
gap: ${p => p.theme.space[2]}px;
`;

const Item = styled.li`
  font-size: ${p => p.theme.fontSizes[3]}px;
  color: ${p => p.theme.colors.primary};
`;

export {List, Item};

