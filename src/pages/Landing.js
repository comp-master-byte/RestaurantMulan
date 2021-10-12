import React from 'react'
import { motion } from 'framer-motion'

const Landing = () => {
    return (
        <div className="landing">
            <div className="landing-area">
                <div className="landing-area--text">
                    <motion.h2
                        initial={{opacity: 0, x: -100}}
                        animate={{opacity: 1, x: 0, transition: {duration: 1}}}
                    >« Ресторан Мулан » - просторный ресторан на Васильевском  острове. </motion.h2>
                    <motion.p
                    initial={{opacity: 0, x: 100}}
                    animate={{opacity: 1, x: 0, transition: {duration: 1}}}>
                        
                        В нашем ресторане объединено три направления восточной кухни: 
                    </motion.p>
                    <ul className="lading-text--list"> 
                        <motion.li 
                            initial={{opacity: 0}}
                            animate={{opacity:1, transition: {duration:1}}}
                        className="landing-area--text--list__item">кухня на углях;</motion.li>
                        <motion.li 
                            initial={{opacity: 0}}
                            animate={{opacity: 1, transition: {duration:2}}}
                        className="landing-area--text--list__item">японская кухня;</motion.li>
                        <motion.li 
                            initial={{opacity: 0}}
                            animate={{opacity:1, transition: {duration:2.5}}}
                        className="landing-area--text--list__item">трандиционная китайская кухня.</motion.li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Landing
