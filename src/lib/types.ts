import { z } from "zod";
import { userSchema } from "./validation";


export type UserT = z.infer<typeof userSchema>;

export type LanguageT = "English" | "Español";

export type NewsT = {
    id:number;
    author:string;
    title:string;
    description:string;
}