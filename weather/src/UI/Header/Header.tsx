import React from "react";
import s from "./Header.module.scss"


export function Header() {
    return (
        <div className={s.wrap}>
            <div>
                Moscow
            </div>
            <div>
                20 Degree
            </div>
        </div>
    )
}