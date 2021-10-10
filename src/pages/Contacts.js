import React, {useState} from 'react'
import Accordion from '../components/Accordion'

import map from '../images/map.png'
import enter from '../images/entrance.png'
import location from '../images/location.png'

const AccordionText = [
    {
        firstTitle: 'Санкт-Петербург, 17-линия В.О., 43',
        secondTitle: 'Москва, ул. Цветная, 18',
        thirdTitle:'',
        firstPara:'Работаем с 14:00 до 02:00',
        secondPara: 'Работаем с 18:00 до 06:00',
        thirdPara: ''
    },
    {
        firstTitle: '+ 7 (965) 786-56-94',
        secondTitle: '+ 7 (987) 745-66-74',
        thirdTitle:'mulanspb@mail.ru',
        firstPara:'Телефон в Санкт-Петербурге',
        secondPara: 'Телефон в Москве',
        thirdPara: 'Книга жалоб и предложений'
    },
]

export const Contacts = () => {

    const [active, setActive] = useState('Где мы находимся?')

    return (
        <div className="contact">
            <div className="container">
                <div className="contact-box">
                    <div className="contact-box--accordion">
                        <Accordion 
                            title='Где мы находимся?' 
                            active={active} 
                            setActive={setActive}
                            
                            />
                        <Accordion 
                            title='Свяжитесь с нами!' 
                            active={active} 
                            setActive={setActive}/>
                    </div>
                    <div className="contact-box--image">
                        <img className="location" src={location} alt="" />
                        <img className="enter" src={enter} alt="" />
                        <div className="line"></div>
                        <img style={{zIndex:'1000'}} src={map} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

  // const [clicked, setClicked] = useState(false)

    // const toggle = index => {
    //     if(clicked === index) {
    //         return setClicked(null)
    //     }

    //     setClicked(index)
    // }


{/* <div className="contact-box">
    <div className="contact-box--text">                        
        <IconContext.Provider value={{color: '#a31f1f', size: '25px'}}>
            {AccordionText.map((item, index) => {
                return (
                    <>
                    <div className="contact-box--accord" onClick={() => toggle(index)} key={index}>
                        <h2>
                            {item.redText}
                        </h2>
                        <span>{clicked === index ? <AiOutlineArrowUp/> : <AiOutlineArrowDown/>}</span>
                    </div>
                    {clicked === index ? (
                        <div className="contact-box--hide">
                            <h3>
                                {item.firstTitle}
                            </h3>
                            <p>
                                {item.firstPara}
                            </p>
                            

                            <h3>
                                {item.secondTitle}
                            </h3>
                            <p>
                                {item.secondPara}
                            </p>

                            <h3>
                                {item.thirdTitle}
                            </h3>
                            <p>
                                {item.thirdPara}
                            </p>
                        </div>  
                    ) : null}             
                    </>
                )
            })}
        </IconContext.Provider>
    </div>
    <
</div> */}
