import React from 'react'
import { motion } from 'framer-motion'
import book from '../images/book-img.png'

export const Booking = () => {
    return (
        <div className="booking">
            <div className="container">
                <div className="booking-box">
                    <motion.div 
                        initial={{opacity: 0, x: -100}}
                        animate={{opacity:1, x: 0, transition:{duration: 1}}}
                    className="booking-box--image">
                        <div className="line-border">
                        </div>
                        <img src={book} alt="" />
                    </motion.div>
                    <motion.div 
                        initial={{opacity: 0, x: 100}}
                        animate={{opacity:1, x: 0, transition:{duration: 1}}}
                    className="booking-box--registration">
                        <h2>Отправьтесь <br />
                            в гастрономическое <br /> путешествие <span style={{color:'red'}}>прямо сейчас</span> 
                        </h2>
                        <div className="booking-box--registration__input">
                            <input placeholder='Имя' className="inputReg" type="text" />
                            <input placeholder='Телефон' className="inputReg" type="text" />
                        </div>
                        <div className="booking-box--registration__time">
                            <input  className="period" type="date" />
                            <input className="period" type="time" />
                        </div>
                        <motion.button 
                            whileHover={{scale: 1.1}}
                            transition={{duration: 0.4}}
                        className="btn">Забронировать столик</motion.button>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
