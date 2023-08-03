import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  gap: 20px;
  padding: 15px;
  border: 2px solid #000;
  background-color: #f8f9fa;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
  font-weight: 500;
`;

export const FormInput = styled.input`
  width: 200px;
  font-size: 16px;
  border-radius: 3px;
`;

export const Button = styled.button`
  width: 150px;
  color: #ffffff;
  background-color: #0d6efd;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  font-size: 16px;
  padding: 8px 16px;
  font-weight: 600;
  outline: none;
  /* box-shadow: 0px 2px 1px 0px rgba(46, 47, 66, 0.08),
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 1px 6px 0px rgba(46, 47, 66, 0.08); */
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #0a58ca;
  }
`;
