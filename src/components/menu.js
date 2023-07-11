import React from "react";
import { ReactDOM } from "react";
import MenuCard from "./menucard"

import i5 from "../img/5.png"
import i6 from "../img/6.png"
import i7 from "../img/7.png"
import i8 from "../img/8.png"
import i9 from "../img/9.png"
import i10 from "../img/10.png"
import i11 from "../img/11.png"
import i12 from "../img/12.png"
export default function Menu(){
    return (
            <div className="menuMain">
                <MenuCard id="i1" text="Camping & Fun" iconurl="../img/1.png"/>
                <MenuCard id="i2" text="Exclusive Offers" iconurl=""/>
                <MenuCard id="i3" text="Latest Packages" iconurl=""/>
                <MenuCard id="i4" text="Adventurous Rides" iconurl=""/>
            </div>
        );
}