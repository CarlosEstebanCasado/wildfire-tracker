import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';
import fireIcon from '@iconify/icons-mdi/fire-alert';
import stormIcon from '@iconify/icons-mdi/hurricane';
import volcano from '@iconify/icons-mdi/mountain';
import iceberg from '@iconify/icons-mdi/mountain';

// define constants
const NATURAL_EVENT_WILDFIRE = 'wildfires';
const NATURAL_EVENT_SEVERE_STORM = 'severeStorms';
const NATURAL_EVENT_VOLCANOES = 'volcanoes';
const NATURAL_EVENT_ICEBERG = 'seaLakeIce';

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null);

    const markers = eventData.map((ev, index) => {
        switch (ev.categories[0].id) {
            case NATURAL_EVENT_WILDFIRE:
                return <LocationMarker key={index} icon={fireIcon} lat={ev.geometry[0].coordinates[1]} lng={ev.geometry[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
            case NATURAL_EVENT_SEVERE_STORM:
                return <LocationMarker key={index} icon={stormIcon} lat={ev.geometry[0].coordinates[1]} lng={ev.geometry[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
            //case NATURAL_EVENT_VOLCANOES:
                //return <LocationMarker key={index} icon={iceberg} lat={ev.geometry[0].coordinates[1]} lng={ev.geometry[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
            case NATURAL_EVENT_ICEBERG:
                return <LocationMarker key={index} icon={iceberg} lat={ev.geometry[0].coordinates[1]} lng={ev.geometry[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
            default:
                return null;
        }
    });

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDNj8G2v3N9m7wkyBMKiqmrh2QdxGL0S9o' }}
                defaultCenter={center}
                zoom={zoom}
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 41.3879,
        lng: 2.16992
    },
    zoom: 6
}

export default Map
