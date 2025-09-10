import { IIconprops } from "@/types/prop-types";

export default function DropdownIcon({ pathClassName }: IIconprops) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
      <path className={pathClassName && pathClassName} d="M4 6.5L8 10.5L12 6.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}