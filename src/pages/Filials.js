import React from 'react'

import grid1 from '../images/grid-1.png'
import grid2 from '../images/grid-2.png'
import grid3 from '../images/grid-3.png'
import grid4 from '../images/grid-4.png'
import grid5 from '../images/grid-5.png'
import grid6 from '../images/grid-6.png'

export const Filials = () => {
    return (
        <div className="filials">
            <div className="container">
                <div className="filials-text">
                    <h2>Добро пожаловать в наш новый ресторан В МОСКВЕ!</h2>
                    <div className="filials-text--flex">
                        <p>Состоялось долгожданное открытие нового филиала в Москве на Цветном </p>
                        <button>Все филиалы</button>
                    </div>
                </div>

                <div className="grid-container">
                    <img className="grid1" src={grid1} alt="" />
                    <img className="grid2" src={grid2} alt="" />
                    <img className="grid3" src={grid3} alt="" />
                    <img className="grid4" src={grid4} alt="" />
                    <img className="grid5" src={grid5} alt="" />
                    <img className="grid6" src={grid6} alt="" />
                </div>
            </div>
        </div>
    )
}
