import React, {useState} from 'react'
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'


import logo from '../images/logo.png'
import Links from './Links'

const links = [
    {name: 'О нас', url:'/'},
    {name: 'Меню', url:'/menu'},
    {name: 'Акции', url:'/action'},
    {name: 'Филиалы', url:'/filials'},
    {name: 'Контакты', url:'/contacts'},
    {name: 'Забронировать столик', url:'/booking'},
]

const Navigation = () => {

    const toggleClass = () => {
        document.querySelector('.burger').classList.toggle('open')
        document.querySelector('.navigation-box--list').classList.toggle('show')
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
                    {links.map((stata, index) => {
                        return <Links data={stata} key={index}/>
                    })}
                </ul>
   
            </div>
            
        </nav>
    )
}

export default Navigation
