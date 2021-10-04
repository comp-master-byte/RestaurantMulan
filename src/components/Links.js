import React from 'react'
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'

function Links(stata) {

    const removeShow = () => {
        document.querySelector('.burger').classList.remove('open')
        document.querySelector('.navigation-box--list').classList.remove('show')
    }
    return (
        <motion.li 
            onClick={removeShow}
            whileHover={{scale: 1.1, color: 'red'}}
            whileTap={{scale: 0.95}}
            transition={{duration:0.3}}
            className="navigation-box--list__item"><Link className="nav-link" to={stata.data.url}>{stata.data.name}</Link>
        </motion.li>
    )
}

export default Links;