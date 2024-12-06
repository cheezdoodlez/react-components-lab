import React from 'react'


const WeatherForecast = ({day, img, imgAlt, conditions, time}) => {
    return (
        <div className='weather'>
            <h2>{day}</h2>
            <img src={img} alt={imgAlt}/>
            <p>
                <span>Conditions:</span> {conditions}
            </p>
            <p>
                <span>Time:</span> {time}
            </p>
        </div>
    )
}

export default WeatherForecast