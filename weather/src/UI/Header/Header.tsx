import React from "react";
import s from "./Header.module.scss"
import {WeatherType} from "../../BLL/Redux/WeatherReducer";

type HeaderPropsType = {
    weather: WeatherType
}

export function Header(props:HeaderPropsType) {
    return (
        <div className={s.wrap}>
            <div>{props.weather.name}</div>
            <div>{props.weather.main.temp}</div>
        </div>
    )
}