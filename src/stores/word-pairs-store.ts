import { action, observable } from "mobx";
import { WordPairDto } from "../dto/word-pait-dto";
import { Lang } from "../models/lang";
import { WordPair } from "../models/word-pair";

export class WordPairsStore {
    @observable
    public wordsPairs: WordPair[] = [
        {
            leftWord: {
                lang : Lang.en,
                value: "test"
            },
            rightWord: {
                lang : Lang.ru,
                value: "тест"
            }
        }
    ];

    @action
    public addWordPair(wordPair: WordPairDto) {
        this.wordsPairs.push({
            leftWord: {
                lang: wordPair.leftLang,
                value: wordPair.leftWord
            },
            rightWord: {
                lang:wordPair.leftLang,
                value: wordPair.rightWord
            }
        });
    }
}