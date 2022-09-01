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

export function SendForm(props) {
  const { switchToNewPassword } = useContext(AccountContext);
 
    return (
        <BoxContainer>
        <FormContainer>
        <MutedLink href="#">
          Please enter the verification code you have recieved{" "}
        </MutedLink>
        <Marginer direction="vertical" margin="1em" />
          <Input type="password" placeholder="Verification code" />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <SubmitButton onClick={switchToNewPassword}>
        Submit
        </SubmitButton> 
        </BoxContainer>
    );
}