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

export function NewPasswordForm(props) {
  
 
    return (
        <BoxContainer>
      <FormContainer>
        <Input type="password" placeholder="Enter a new password" />
        <Input type="password" placeholder="Confirm new password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      
      <SubmitButton type="submit">Submit</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
    </BoxContainer>

  );
}