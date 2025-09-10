import { IIconprops } from "@/types/prop-types";


export default function FacebookIcon({ pathClassName }: IIconprops) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
      <path className={pathClassName && pathClassName} d="M13.4961 2.07007H11.2461C10.2515 2.07007 9.2977 2.46516 8.59444 3.16842C7.89118 3.87168 7.49609 4.82551 7.49609 5.82007V8.07007H5.24609V11.0701H7.49609V17.0701H10.4961V11.0701H12.7461L13.4961 8.07007H10.4961V5.82007C10.4961 5.62116 10.5751 5.43039 10.7158 5.28974C10.8564 5.14909 11.0472 5.07007 11.2461 5.07007H13.4961V2.07007Z" stroke="#CBCFDD" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}