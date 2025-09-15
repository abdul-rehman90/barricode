import { IIconprops } from "@/types/prop-types";

export default function MobileIcon({ pathClassName }: IIconprops) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path className={pathClassName && pathClassName} d="M17 1H7C5.34315 1 4 2.34315 4 4V20C4 21.6569 5.34315 23 7 23H17C18.6569 23 20 21.6569 20 20V4C20 2.34315 18.6569 1 17 1Z" stroke="#122D46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path className={pathClassName && pathClassName} d="M10 19H14" stroke="#122D46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}