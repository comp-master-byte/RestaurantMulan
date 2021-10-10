import React from 'react'

import book from '../images/book-img.png'

export const Booking = () => {
    return (
        <div className="booking">
            <div className="container">
                <div className="booking-box">
                    <div className="booking-box--image">
                        <div className="line-border">
                        </div>
                        <img src={book} alt="" />
                    </div>
                    <div className="booking-box--registration">
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
                        <button className="btn">Забронировать столик</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
