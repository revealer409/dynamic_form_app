import React, { ReactNode } from "react";
import { StyleFunction } from "styled-components/dist/types";

interface buttonProps {
  title?: string;
  clasList?: string;
  children?: ReactNode;
  style?:object;
  type:"button" | "submit" | "reset" | undefined
}
const Button: React.FC<buttonProps> = ({ title, clasList, children,style ,type}) => {
  return (
    <button type={type} className={clasList} title={title} style={style}>
      {children}
    </button>
  );
};

export default Button;
