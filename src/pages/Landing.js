import React from 'react'

const Landing = () => {
    return (
        <div className="landing">
            <div className="landing-area">
                <div className="landing-area--text">
                    <h2>« Ресторан Мулан » - просторный ресторан на Васильевском  острове. </h2>
                    <p>
                        В нашем ресторане объединено три направления восточной кухни: 
                    </p>
                    <ul className="lading-text--list"> 
                        <li className="landing-area--text--list__item">кухня на углях;</li>
                        <li className="landing-area--text--list__item">японская кухня;</li>
                        <li className="landing-area--text--list__item">трандиционная китайская кухня.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Landing
