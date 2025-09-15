import { IIconprops } from "@/types/prop-types";

export default function Who1({ pathClassName }: IIconprops) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path className={pathClassName && pathClassName} d="M9 15V5V19V15ZM7 16H9V19H15V5H9V14H7V3H17V21H7V16ZM12 10C12.2833 10 12.521 9.904 12.713 9.712C12.905 9.52 13.0007 9.28267 13 9C12.9993 8.71733 12.9033 8.48 12.712 8.288C12.5207 8.096 12.2833 8 12 8C11.7167 8 11.4793 8.096 11.288 8.288C11.0967 8.48 11.0007 8.71733 11 9C10.9993 9.28267 11.0953 9.52033 11.288 9.713C11.4807 9.90567 11.718 10.0013 12 10ZM19 3H21V9H19V3ZM13 16H4V14H13V16Z" fill="currentcolor" />
        </svg>
    )
}