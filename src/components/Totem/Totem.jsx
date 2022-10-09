import React from 'react'
import './Totem.css'
import totemImg from '../../assets/totem.png'

function Totem() {
    return (
        <>
            <div className="illustration">
                <img className='totem-img' src={totemImg} alt='totem-img'/>
                <div className="totem"></div>
            </div>
        </>
    )
}

export default Totem