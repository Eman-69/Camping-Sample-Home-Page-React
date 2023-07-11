import React from "react";
import { ReactDOM } from "react";
import MenuCard from "./menucard"


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