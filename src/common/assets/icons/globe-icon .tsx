import { IIconprops } from "@/types/prop-types";
import classNames from "classnames/bind";

export default function Globeicon({ pathClassName }: IIconprops) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path className={pathClassName && pathClassName} d="M19.9987 36.6666C29.2034 36.6666 36.6654 29.2047 36.6654 19.9999C36.6654 10.7952 29.2034 3.33325 19.9987 3.33325C10.794 3.33325 3.33203 10.7952 3.33203 19.9999C3.33203 29.2047 10.794 36.6666 19.9987 36.6666Z" stroke="#005143" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path className={pathClassName && pathClassName} d="M19.9987 3.33325C15.7191 7.82684 13.332 13.7945 13.332 19.9999C13.332 26.2054 15.7191 32.173 19.9987 36.6666C24.2783 32.173 26.6654 26.2054 26.6654 19.9999C26.6654 13.7945 24.2783 7.82684 19.9987 3.33325Z" stroke="#005143" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path className={pathClassName && pathClassName} d="M3.33203 20H36.6654" stroke="#005143" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}