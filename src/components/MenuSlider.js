import { data } from 'jquery'
import React from 'react'

export const MenuSlider = ({data}) => {
    return (
        <div className="menu-box--element">
            <img src={data.src} alt="" />
            <h2>{data.title}</h2>
            <p>{data.text}</p>
        </div>
    )
}
