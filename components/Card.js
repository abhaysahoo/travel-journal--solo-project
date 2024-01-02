import React from 'react'
import data from '../data'

export default function Card(props) {   
    const item = props.item
    return (
        <div className="card">
            <img 
                src= {item.imageUrl}
                alt= {item.altText}
                className="card--image"
            />
            <div>
                <div className="card--location">
                    <span><i className="fa-solid fa-location-dot"></i></span>
                    <span className="card--location-name">{item.location}</span>
                    <span>
                        <a 
                            href= {item.googleMapsUrl}
                            target="_blank">
                            View on Google Maps
                        </a>
                    </span>
                </div>
                <h1>{item.title}</h1>
                <p className="card--date">{item.startDate} - {item.endDate}</p>
                <p>{item.description}</p>
            </div>   
        </div>
    )
}
