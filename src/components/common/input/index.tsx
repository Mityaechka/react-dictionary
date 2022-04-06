import { userInfo } from "os";
import React, { useState } from "react";
import { HTMLInputTypeAttribute } from "react"

interface InputProps {
    title: string;
    onChange?: (value: string) => void
    isError?: boolean;
    value?: string;
}

export const Input = (props: InputProps) => {
    const [value, setValue] = useState("");

    if(value != props.value)
        setValue(props.value!)

    function onChangeEvent(e: React.ChangeEvent<HTMLInputElement>) {
        if (props.onChange) {
            props.onChange(e.target.value)
        }
        setValue(e.target.value);
    }

    return <div className="input">
        <p className="input-title">{props.title}</p>
        <input className="input-body" type="text" onChange={onChangeEvent} value={value} />
        {props.isError &&
            <p className="input-error">Заполните поле</p>
        }

    </div>
}