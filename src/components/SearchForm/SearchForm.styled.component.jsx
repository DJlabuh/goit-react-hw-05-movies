import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 400px;

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
    width: 100%;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #f16f6f;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: #e94b4b;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;
