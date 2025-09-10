import { ReactNode } from "react";

export interface IIconprops {
  pathClassName?: string;
}

export interface IButtonProps {
  text: string;
  href?: string;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  buttonClassName?: string;
  type?: "button" | "reset" | "submit";
  target?: string;
}

export interface IHeadingProps {
  text: string;
  size?: "h1" | "h2";
  headingClassName?: string;
}

export interface ITextProps {
  text: string;
  size?: string;
  textClassName?: string;
}
