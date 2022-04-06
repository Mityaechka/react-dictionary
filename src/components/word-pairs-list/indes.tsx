import { observer } from "mobx-react";
import { useStores } from "../..";
import { WordPair } from "../../models/word-pair";
import { WordPairCard } from "../word-pair-card/insex";


export const WordPairsList = observer(() => {
    const { wordPairsStore } = useStores();

    return <div>
        {wordPairsStore.wordsPairs.map((pair, i) => <WordPairCard key={i} pair={pair} />)}
    </div>
})

