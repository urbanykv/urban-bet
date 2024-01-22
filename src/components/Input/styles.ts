import styled from "styled-components";

export const InputContainer = styled.div`
  width: 250px;
  height: 30px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;


  & img{
    width: 25px;
    user-select: none;
  }

  & input{
    padding: 0 5px;
    width: 250px;
    height: 30px;
    border: none;
    border-bottom: 1px solid black;
    background: none;
  }

  & input:focus{
    outline: none;
  }
`;

export const EyeButton = styled.button`
  border: none;
  background: none;
  width: 25px;
  height: 25px;
  cursor: pointer;

  & img{
    width: 100%;
    height: 100%;
  }
`;