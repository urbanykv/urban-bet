import Input from "../../components/Input/input";
import { FormContainer, PagLoginContainer } from "./styles";
import mailIcon from "../../assets/mail-icon.svg";
import passwordIcon from "../../assets/password-icon.svg";
import eyeOpened from "../../assets/eye-icon.svg";
import eyeClosed from "../../assets/eye-closed-icon.svg";
import loginIcon from "../../assets/login-icon.svg";
import { useState } from "react";

export default function PagLogin(){

  const [ eye, setEye] = useState<string>(eyeClosed);
  const [ passwordType, setPasswordType ] = useState<string>('password');

  const showPassword = (): void => {
    setEye(eye === eyeClosed ? eyeOpened : eyeClosed);
    setPasswordType(passwordType === "password" ? "text" : "password")
  };

  return(
    <PagLoginContainer>
      <FormContainer>
        <Input typeInput={"email"} placeholder={"example@mail.com"} icon={mailIcon}/>
        <Input eye={eye} showPassword={showPassword} typeInput={passwordType} placeholder={"P4ssword1!"} icon={passwordIcon}/>
        <button type="submit">
          <span>Entrar</span>
          <img src={loginIcon} alt="Login Icon" />
        </button>
      </FormContainer>
    </PagLoginContainer>
  );
};