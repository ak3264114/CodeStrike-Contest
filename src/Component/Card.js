import React from 'react'
import './Styles/card.css'

const Card = () => {
    return (
        <>

            <div className='movie-card'>
                
                <img className='movie-card-image' src="https://i.ytimg.com/vi/mxphAlJID9U/maxresdefault.jpg" alt="movie-card-image"></img>
                <div className='position'>
                <span className='movie-card-year'>1993</span>&nbsp; &nbsp;
                <span className='movie-card-genre'>thriller</span>
                <div className='movie-card-name'>Schindler's List</div>
                </div>
            </div>
        </>
    )
}

export default Card