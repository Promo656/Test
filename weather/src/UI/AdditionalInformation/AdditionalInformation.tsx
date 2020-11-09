import React from "react";
import s from "./AdditionalInformation.module.scss"
import {WeatherType} from "../../BLL/Redux/WeatherReducer";

type AdditionalInformationPropsType={
    weather:WeatherType
    timeConverter: (time: number) => void
}

export function AdditionalInformation(props:AdditionalInformationPropsType) {
    const convert=props.timeConverter
    const unix=props.weather.sys.sunrise
    const time=convert(unix)

    return (
        <div className={s.wrap}>
            <div>
                <div>
                    <span>sunrise</span>
                    <div>6:56</div>
                </div>
                <div>
                    <span>wind</span>
                    <div>4 м/с</div>
                </div>
            </div>
            <div>
                <div>
                    <span>sunset</span>
                    <div>18:43</div>
                </div>
                <div>
                    <span>feels like</span>
                    <div>14 </div>
                </div>
            </div>
        </div>
    )
}