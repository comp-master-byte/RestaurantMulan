import React,{useState} from 'react'
import { ExtraInfo } from '../components/ExtraInfo'
import { motion } from 'framer-motion'
import drink from '../images/cocteil.png'

export const Stock = () => {

    const [activePopup, setActivePopup] = useState(false)

    return (
        <div className="stock">
            <div className="container">
                <div className="stock-box">
                    <motion.div 
                        initial={{opacity: 0, x: -100}}
                        animate={{opacity:1, x: 0, transition:{duration: 1}}}
                    className="stock-box--text">
                        <h2>СКИДКА 20% НА БАРНОЕ МЕНЮ КАЖДУЮ ПЯТНИЦУ</h2>
                        <p>
                            Бронирование столиков на пятницу недоступно, в связи с большим количеством гостей. Алкоголь продаётся лицам достигшим 18 лет, обязательно иметь при себе документ подтверждающий возраст.
                        </p>
                        <motion.button 
                            whileHover={{scale: 1.1}}
                            transition={{duration: 1}}
                        onClick={() => setActivePopup(true)}>Узнать подробнее</motion.button>
                    </motion.div>
                    <motion.div 
                        initial={{opacity: 0, x: 100}}
                        animate={{opacity:1, x: 0, transition:{duration: 1}}}
                    className="stock-box--image">
                        <div className="box-border"></div>
                        <img src={drink} alt="" />
                    </motion.div>
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
