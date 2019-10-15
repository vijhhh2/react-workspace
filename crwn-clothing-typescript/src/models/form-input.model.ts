import { ChangeEvent } from "react";

export interface IInput {
    type?: string;
    name?: string;
    value: string;
    label?: string;
    required?: boolean;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ICustomButton {
    type: "button" | "submit" | "reset" | undefined;
}