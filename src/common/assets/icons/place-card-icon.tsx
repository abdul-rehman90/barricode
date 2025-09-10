import { IIconprops } from "@/types/prop-types";
import classNames from "classnames/bind";

export default function Card1({ pathClassName }: IIconprops) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
            <path className={pathClassName && pathClassName} d="M17 20.9092H1C0.734784 20.9092 0.48043 20.8038 0.292893 20.6163C0.105357 20.4288 0 20.1744 0 19.9092V1.90918C0 1.64396 0.105357 1.38961 0.292893 1.20207C0.48043 1.01454 0.734784 0.90918 1 0.90918H17C17.2652 0.90918 17.5196 1.01454 17.7071 1.20207C17.8946 1.38961 18 1.64396 18 1.90918V19.9092C18 20.1744 17.8946 20.4288 17.7071 20.6163C17.5196 20.8038 17.2652 20.9092 17 20.9092ZM16 18.9092V2.90918H2V18.9092H16ZM5 7.90918H13V9.90918H5V7.90918ZM5 11.9092H13V13.9092H5V11.9092Z" fill="#10957D" />
        </svg>
    )
}