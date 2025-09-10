import { IIconprops } from "@/types/prop-types";

export default function LinkedinIcon({ pathClassName }: IIconprops) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
      <path className={pathClassName && pathClassName} d="M12 6.57007C13.1935 6.57007 14.3381 7.04417 15.182 7.88809C16.0259 8.732 16.5 9.87659 16.5 11.0701V16.3201H13.5V11.0701C13.5 10.6722 13.342 10.2907 13.0607 10.0094C12.7794 9.7281 12.3978 9.57007 12 9.57007C11.6022 9.57007 11.2206 9.7281 10.9393 10.0094C10.658 10.2907 10.5 10.6722 10.5 11.0701V16.3201H7.5V11.0701C7.5 9.87659 7.97411 8.732 8.81802 7.88809C9.66193 7.04417 10.8065 6.57007 12 6.57007Z" stroke="#CBCFDD" strokeLinecap="round" strokeLinejoin="round" />
      <path className={pathClassName && pathClassName} d="M4.5 7.32007H1.5V16.3201H4.5V7.32007Z" stroke="#CBCFDD" strokeLinecap="round" strokeLinejoin="round" />
      <path className={pathClassName && pathClassName} d="M3 5.07007C3.82843 5.07007 4.5 4.3985 4.5 3.57007C4.5 2.74164 3.82843 2.07007 3 2.07007C2.17157 2.07007 1.5 2.74164 1.5 3.57007C1.5 4.3985 2.17157 5.07007 3 5.07007Z" stroke="#CBCFDD" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}