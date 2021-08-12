import { Icon } from '@iconify/react';
import fireIcon from '@iconify/icons-mdi/fire-alert';
import volcano from '@iconify/icons-mdi/fire-extinguisher';



const LocationMarker = ({ icon, lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={icon} className={icon === fireIcon || icon === volcano ? "location-icon-fire" : "location-icon-storm" } />
        </div>
    )
}

export default LocationMarker
