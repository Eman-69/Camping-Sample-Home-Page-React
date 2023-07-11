import React from "react";
import { ReactDOM } from "react";
import i1 from "../img/1.png"
import i2 from "../img/2.png"
import i3 from "../img/3.png"
import i4 from "../img/4.png"
import i5 from "../img/5.png"
import i6 from "../img/6.png"
import i7 from "../img/7.png"
import i8 from "../img/8.png"
import i9 from "../img/9.png"
import i10 from "../img/10.png"
import i11 from "../img/11.png"
import i12 from "../img/12.png"

export default function MenuCard(props)
{
    return (
    <div className="menuCard" id={props.id}>
        <img src={props.id} alt={props.id}></img>
        <div>{props.text}</div>
        </div>
);
}