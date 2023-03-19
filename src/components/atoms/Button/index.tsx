import styled from "styled-components";
import { CSSProperties } from "react";
export interface ButtonProps {
  text?: string;
  // width?: string;
  style?: CSSProperties;
}

function Button(ButtonProps: ButtonProps) {
  return <St.Button style={ButtonProps.style}>{ButtonProps.text}</St.Button>;
}

const St = {
  Button: styled.button``,
};

export default Button;
