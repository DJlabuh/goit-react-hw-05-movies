import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 14px;
  color: #333;
  background-color: #f2f2f2;
  border: 1px solid #333;
  border-radius: 6px;
  font-size: 12px;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 10px;
  margin-bottom: 12px;

  :hover {
    color: #f16f6f;
    border-color: #f16f6f;
  }
`;
