import styled from 'styled-components';

export const Form = styled.form`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid antiquewhite;
  padding: 15px 15px;
  margin-bottom: 20px;
  border-radius: 12px;
  box-shadow: 0 0 3px 0.2px #d3d3d3;
`;

export const FormLabel = styled.label`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
  text-transform: capitalize;
`;

export const FormInput = styled.input`
  display: block;
  width: 300px;
  margin-top: 8px;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  box-shadow: 0 0 2px 0.2px #d3d3d3;
`;

export const FormButton = styled.button`
  width: fix-content;
  padding: 14px;

  text-align: center;
  color: #000;
  text-transform: uppercase;
  font-weight: 600;

  cursor: pointer;
  display: inline-block;

  background-color: transparent;
  border: 3px solid #00d7c3;
  border-radius: 50px;
  -webkit-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;
  color: #00d7c3;
  font-size: 14px;
  font-weight: 600;

  :hover {
    box-shadow: 0 0 10px 0 #00d7c3 inset, 0 0 20px 2px #00d7c3;
    border: 3px solid #00d7c3;
  }
`;
