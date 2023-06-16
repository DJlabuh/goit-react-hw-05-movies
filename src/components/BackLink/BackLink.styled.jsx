import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: #333;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 12px;

  :hover {
    color: #f16f6f;
  }
`;
