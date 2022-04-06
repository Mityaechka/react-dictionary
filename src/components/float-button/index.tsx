import { observe } from "mobx";
import { observer } from "mobx-react";
import styled from 'styled-components';

interface FloatButtonProps {
    children: JSX.Element
    onClick: () => void
}

export const FloatButton = (props: FloatButtonProps) => {
    return <a className="float-button" onClick={props.onClick}>
        {props.children}
    </a>
}
