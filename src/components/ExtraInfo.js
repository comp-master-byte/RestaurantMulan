import React from 'react'

export const ExtraInfo = ({active, setActive, children}) => {
    return (
        <div className={active ? "extrainfo open" : "extrainfo"} onClick={() => setActive(false)}>
            <div className="extrainfo-content" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
