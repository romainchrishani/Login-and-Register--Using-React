import { render } from "@testing-library/react";
import styled from "styled-components";
import image1 from "./PersistentLogo.jpg";




export const BoxContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1px;
`;

export const FormContainer = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 15px;
  color: rgba(255,255,255);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: rgb(255,165,0);
  font-weight: 500;
  text-decoration: none;
  margin: 0 px;
`;

//email pw box
export const Input = styled.input`
  width: 50%;
  height: 40px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 9px 20px;
  border-bottom: 1.4px solid transparent;
  margin-bottom:7px;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  border-radius: 19px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
  }
`;

export const SubmitButton = styled.button`
  width: %;
  padding: 10px 10%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(241, 102, 15);
  background: linear-gradient(
    58deg,
    rgba(241, 102, 15) 20%,
    rgba(241, 102, 15) 100%
  );

  &:hover {
    filter: brightness(1.03);
  }
`;
