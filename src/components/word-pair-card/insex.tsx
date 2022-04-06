import { observer } from "mobx-react";
import { useStores } from "../..";
import { WordPair } from "../../models/word-pair";

interface IProps {
    pair: WordPair
}

export const WordPairCard = observer(({ pair }: IProps) => {
    const { wordPairsStore } = useStores();
    return <div>
tet
    </div>
})