import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function ForgotPasswordForm(props) {
  const { switchToSend } = useContext(AccountContext);
  return (
    <BoxContainer>
      <FormContainer>
      <MutedLink href="#">
        Please enter your email address to send a verification code to reset your password{" "}
      </MutedLink>
      <Marginer direction="vertical" margin="1em" />
        <Input type="email" placeholder="Email" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton onClick={switchToSend}>
        Send
      </SubmitButton> 
      {/* <SubmitButton type="submit">Send</SubmitButton> */}
      </BoxContainer>
  );
}
 

