import Input from "../../components/Input/input";
import { FormContainer, PagLoginContainer } from "./styles";
import mailIcon from "../../assets/mail-icon.svg";
import passwordIcon from "../../assets/password-icon.svg";
import eyeOpened from "../../assets/eye-icon.svg";
import eyeClosed from "../../assets/eye-closed-icon.svg";
import loginIcon from "../../assets/login-icon.svg";
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useState } from "react";

type Inputs = {
  email: string;
  password: string;
}

export default function PagLogin(){
  
  const schema = yup
  .object({
    email: yup.string().email('Email inválido').required('Preencha o campo'),
    password: yup.string().required('Preencha o campo'),
  })
  .required()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onChange",
    resolver: yupResolver(schema)
  })
  const onSubmit: SubmitHandler<Inputs> = (data): void => {
    console.log(data);
    console.log('teste');
  };

  const [ eye, setEye] = useState<string>(eyeClosed);
  const [ passwordType, setPasswordType ] = useState<string>('password');

  const showPassword = (): void => {
    setEye(eye === eyeClosed ? eyeOpened : eyeClosed);
    setPasswordType(passwordType === "password" ? "text" : "password")
  };

  return(
    <PagLoginContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input nameInput={"email"} { ...field } typeInput={"email"} placeholder={"example@mail.com"} icon={mailIcon}/>}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => <Input nameInput={"password"} { ...field } eye={eye} showPassword={showPassword} typeInput={passwordType} placeholder={"P4ssword1!"} icon={passwordIcon}/>}
        />
        <button type="submit">
          <span>Entrar</span>
          <img src={loginIcon} alt="Login Icon" />
        </button>
      </FormContainer>
    </PagLoginContainer>
  );
};