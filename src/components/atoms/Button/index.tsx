import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  text?: string;
}

function Button({ text }: ButtonProps) {
  return <St.Button>{text}</St.Button>;
}

const St = {
  Button: styled.button`
    width: 80%;
  `,
};

export default Button;
