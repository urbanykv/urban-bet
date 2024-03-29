import { EyeButton, InputContainer } from "./styles";
import { IInput } from "./type";

export default function Input({ nameInput, typeInput, placeholder, icon, showPassword, eye }: IInput){
  return(
    <InputContainer>
      <img src={icon} alt="Icon Input" />
      <input name={nameInput} type={typeInput} placeholder={placeholder}/>
      {typeInput === "password" || typeInput === "text" ?
      <EyeButton onClick={showPassword} type="button"><img src={eye} alt="Eye" /></EyeButton> : null}
    </InputContainer>
  );
};