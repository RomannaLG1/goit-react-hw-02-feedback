import styled from 'styled-components';

export const FeedbackTitle = styled.strong`
  font-size: ${p => p.theme.fontSizes[5]};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-transform: uppercase;
  color: ${p => p.theme.colors.primary};
`;
