import { StyledButton } from './FeedbackOptions.styled';
import { IconContext } from "react-icons";

export const Button = ({
  icon,
  type = 'button',
  children,
  onClickHandle,
}) => {
  return (
    <StyledButton type={type} onClick={onClickHandle}>
        
        <IconContext.Provider value={{ size: 50 }}>{icon}</IconContext.Provider> 
        {children}
    </StyledButton>
  );
};
