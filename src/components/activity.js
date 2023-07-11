import React from "react";
import { ReactDOM } from "react";
import MenuCard from "./menucard";

export default function Activity(){
    return (
        <div className="activity">
            <div className="activityTitle">EXplore &<br/>Activities</div>
            <div className="activityMain menuMain">
                
                <MenuCard id='i5' text='Hill Stations' iconurl=''/>
                <MenuCard id='i6' text='Water Parks' iconurl=''/>
                <MenuCard id='i7' text='Parks and Zoos' iconurl=''/>
                <MenuCard id='i8' text='Historical Monuments' iconurl=''/>
                <MenuCard id='i9' text='Religious Shrines' iconurl=''/>
                <MenuCard id='i10' text='Trekking' iconurl=''/>
                <MenuCard id='i11' text='WaterFalls' iconurl=''/>
                <MenuCard id='i12' text='Backwaters' iconurl=''/>

            </div>
        </div>
    );
}