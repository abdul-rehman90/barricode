import { IIconprops } from "@/types/prop-types";

export default function Graphicon({ pathClassName }: IIconprops) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path className={pathClassName && pathClassName} d="M5 5V31.6667C5 32.5507 5.35119 33.3986 5.97631 34.0237C6.60143 34.6488 7.44928 35 8.33333 35H35" stroke="#005143" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path className={pathClassName && pathClassName} d="M11.668 26.6666C12.5013 23.3333 14.168 14.9999 18.3346 14.9999C21.668 14.9999 21.668 19.9999 25.0013 19.9999C29.168 19.9999 32.5013 11.6666 33.3346 8.33325" stroke="#005143" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}