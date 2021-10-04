import React from 'react'


import insta from '../images/instagram.png'
import massenger from '../images/messenger.png'
import facebook from '../images/facebook.png'
import minilogo from '../images/mini-logo.png'


export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-box">
                    <div className="footer-box--row">
                        <div className="footer-box--row__info">
                            <p>Стать сотрудником</p>
                            <p>Юридическим лицам</p>
                        </div>

                        <div className="footer-box--row__contact">
                            <p>mulangroup@mail.ru</p>
                            <p>+ 7 (987) 879-32-96</p>
                        </div>
                    </div>

                    <div className="footer-box--media">
                        <div className="footer-box--media__images">
                            <img src={insta} alt="" />
                            <img src={massenger} alt="" />
                            <img src={facebook} alt="" />
                        </div>

                        <div className="footer-box--media__logo">
                            <img src={minilogo} alt="" />
                            <p>Конфиденциальность и <br /> правила использования</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
