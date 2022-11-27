import styled from "styled-components";

const StyledButton = styled.button`
width: 100px;
display: inline-flex;
align-items: center;
gap: ${p => p.theme.space[3]}px;
margin: ${p => p.theme.space[1]}px;
padding: ${p => p.theme.space[1]}px;
border-radius: ${p => p.theme.radii.normal};
border: ${p => p.theme.borders.normal};
cursor: pointer;

& :hover, :focus {
    background: ${p => p.theme.colors.primary}; 
}
`;

const FeedbackTitle = styled.strong`

font-size: ${p => p.theme.fontSizes[5]};
`;

export {StyledButton, FeedbackTitle};


