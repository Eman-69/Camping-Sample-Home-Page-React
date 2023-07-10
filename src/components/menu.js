import React from "react";
import { ReactDOM } from "react";
import MenuCard from "./menucard"
export default function Menu(){
    return (
            <div className="menuMain">
                <MenuCard id="1" text="Camping & Fun" iconurl=""/>
                <MenuCard id="2" text="Exclusive Offers" iconurl=""/>
                <MenuCard id="3" text="Latest Packages" iconurl=""/>
                <MenuCard id="4" text="Adventurous Rides" iconurl=""/>
            </div>
        );
}