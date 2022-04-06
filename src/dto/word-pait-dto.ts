import { Lang } from "../models/lang";

export interface WordPairDto {
    leftLang: Lang;
    rightLang: Lang;
    leftWord: string;
    rightWord:string;
}