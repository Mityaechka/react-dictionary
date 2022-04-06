import { useState } from "react"
import { Input } from "../common/input"

interface WordCreateState {
    leftWord: string
    isLeftWordCorrect: boolean
}

export const WordCreate = () => {
    const [state, setState] = useState<WordCreateState>();

    function onLeftWordChange(word: string) {
        setState({ leftWord: word, isLeftWordCorrect: isWordCorrect(word) });
    }

    function isWordCorrect(word: String) {
        return word != undefined && word != ''
    }

    return <div>
        <Input title="Слово" value={state?.leftWord} onChange={onLeftWordChange} isError={!state?.isLeftWordCorrect} />
        <Input title="Перевод" value={state?.leftWord} onChange={onLeftWordChange} isError={!state?.isLeftWordCorrect} />
    </div>
}