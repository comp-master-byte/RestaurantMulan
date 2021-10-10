import React from 'react'
import {AccordionText} from './Data'

const Accordion = ({title, active, setActive}) => {
    return (
        <div className="accordion">
            <div className="accordion-title">
                <h2>{title}</h2>
                <span onClick={() => setActive(title)}>
                    {active === title ? "X" : "|||"}
                </span>
            </div>

            <div className={(active === title ? "show" : "") + " accordion-information"}>
                <h3>Санкт-Петербург, 17-линия В.О., 43</h3>
                <p>Работаем с 14:00 до 02:00</p>
                <h3>Москва, ул. Цветная, 18</h3>
                <p>Работаем с 18:00 до 06:00</p>
                <h3>Москва, ул. Цветная, 18</h3>
                <p>Работаем с 18:00 до 06:00</p>
                
            </div>
        </div>
    )
}

export default Accordion
