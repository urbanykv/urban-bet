import styled from "styled-components";

export const PagLoginContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #141517;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.form`
  width: 400px;
  height: 500px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-radius: 20px;

  & > button{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 110px;
    height: 35px;
    cursor: pointer;
    border: none;
    background-color: #888;
    border-radius: 5px;
    transition: 0.2s ease;
  }

  & > button:hover{
    background-color: #777;
  }

  & > button img{
    width: 20px;
  }
`;