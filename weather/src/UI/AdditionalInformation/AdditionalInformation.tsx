import React from "react";
import s from "./AdditionalInformation.module.scss"

export function AdditionalInformation() {
    return (
        <div className={s.wrap}>
            <div>
                <div>
                    <span>sunrise</span>
                    <div>6:43</div>
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