import React, {useState} from 'react'
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'

import logo from '../images/logo.png'

const Navigation = () => {

    const toggleClass = () => {
        document.querySelector('.burger').classList.toggle('open')
        document.querySelector('.navigation-box--list').classList.toggle('show')
    }
    
    const removeShow = () => {
        document.querySelector('.burger').classList.remove('open')
        document.querySelector('.navigation-box--list').classList.remove('show')
    }

    return (
        <nav className="navigation">
            <div className="navigation-box">
                <label className="navigation-box--logo"><img src={logo} alt="" /></label>
                <div className="burger" onClick={toggleClass} >
                    <div className="burger-tick"></div>
                    <div className="burger-tick"></div>
                    <div className="burger-tick"></div>
                </div>
                <ul className="navigation-box--list">
                    <motion.li 
                        onClick={removeShow}
                        whileHover={{scale: 1.1, color: 'red'}}
                        whileTap={{scale: 0.95}}
                        transition={{duration:0.3}}
                    className="navigation-box--list__item"><Link className="nav-link" to="/about">О нас</Link></motion.li>
                    <motion.li 
                    onClick={removeShow}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.95}}
                        transition={{duration:0.3}}
                    className="navigation-box--list__item"><Link className="nav-link" to="/menu">Меню</Link></motion.li>
                    <motion.li 
                    onClick={removeShow}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.95}}
                        transition={{duration:0.3}}
                    className="navigation-box--list__item"><Link className="nav-link" to="/action">Акции</Link></motion.li>
                    <motion.li 
                    onClick={removeShow}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.95}}
                        transition={{duration:0.3}}
                    className="navigation-box--list__item"><Link className="nav-link" to="/filialsa">Филиалы</Link></motion.li>
                    <motion.li 
                    
                    onClick={removeShow}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.95}}
                        transition={{duration:0.3}}
                    className="navigation-box--list__item"><Link className="nav-link" to="/contacts">Контакты</Link></motion.li>
                    <motion.li 
                    onClick={removeShow}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.95}}
                        transition={{duration:0.3}}
                        className="navigation-box--list__item"><Link className="nav-link" to="/booking">Забронировать столик</Link></motion.li>
                </ul>
   
            </div>
            
        </nav>
    )
}

export default Navigation
