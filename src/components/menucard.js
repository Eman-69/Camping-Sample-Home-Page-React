import React from "react";
import { ReactDOM } from "react";


export default function MenuCard(props)
{
    return (
    <div className="menuCard" id={props.id}>
        <div>{props.text}</div>
        </div>
);
}