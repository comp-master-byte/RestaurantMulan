import React,{useState} from 'react'
import { ExtraInfo } from '../components/ExtraInfo'
import drink from '../images/cocteil.png'

export const Stock = () => {

    const [activePopup, setActivePopup] = useState(false)

    return (
        <div className="stock">
            <div className="container">
                <div className="stock-box">
                    <div className="stock-box--text">
                        <h2>СКИДКА 20% НА БАРНОЕ МЕНЮ КАЖДУЮ ПЯТНИЦУ</h2>
                        <p>
                            Бронирование столиков на пятницу недоступно, в связи с большим количеством гостей. Алкоголь продаётся лицам достигшим 18 лет, обязательно иметь при себе документ подтверждающий возраст.
                        </p>
                        <button onClick={() => setActivePopup(true)}>Узнать подробнее</button>
                    </div>
                    <div className="stock-box--image">
                        <div className="box-border"></div>
                        <img src={drink} alt="" />
                    </div>
                </div>
                <ExtraInfo active={activePopup} setActive={setActivePopup}>
                    <h1>Здесь вы сможете посмотреть все скидки нашего ресторана</h1>    
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nesciunt nisi, omnis minima possimus molestiae!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nesciunt nisi, omnis minima possimus molestiae!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nesciunt nisi, omnis minima possimus molestiae!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nesciunt nisi, omnis minima possimus molestiae!</li>
                    </ul>
                </ExtraInfo>    
            </div>
        </div>
    )
}
