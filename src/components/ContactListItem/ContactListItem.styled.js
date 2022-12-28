import styled from 'styled-components';

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const UserContact = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 400;
`;

export const UserDeleteBtn = styled.button`
  display: block;
  width: fit-content;
  height: fit-content;
  text-align: center;
  background: #333;
  border: 3px solid transparent;
  border-radius: 12px;
  padding: 8px 10px;
  font-size: 12px;
  font-weight: 700;
  text-transform: capitalize;
  color: gray;
  transition: 0.5s;

  :hover {
    box-shadow: 0 0 10px 0 #dd062a inset, 0 0 20px 2px #dd062a;
    border: 3px solid #dd062a;
  }
`;
