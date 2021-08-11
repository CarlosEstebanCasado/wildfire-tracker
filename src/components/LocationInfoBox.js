import React from 'react'

const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Event location info</h2>
            <ul>
                <li>ID: <strong>{info.id}</strong></li>
                <li>TITLE: <strong>{info.title}</strong></li>
                <li>ID: <strong>{info.id}</strong></li>

            </ul>
        </div>
    )
}

export default LocationInfoBox