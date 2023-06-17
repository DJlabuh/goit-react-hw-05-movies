import { FiChevronsLeft } from 'react-icons/fi';
import { StyledLink } from './BackLink.styled';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <FiChevronsLeft size="12" />
      {children}
    </StyledLink>
  );
};
