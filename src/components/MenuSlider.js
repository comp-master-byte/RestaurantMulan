import {motion} from 'framer-motion'
import React, {useState} from 'react'

export const MenuSlider = ({data}) => {

    
    return (
        <>
            <motion.div 
                whileHover={{scale: 1.05, cursor:'pointer',transition:{duration:0.4}}}

                className="menu-box--element">
                <img src={data.src} alt="" />
                <h2>{data.title}</h2>
                <p>{data.text}</p>
            </motion.div>
        </>
    )
}
