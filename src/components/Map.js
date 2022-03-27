import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import { numFormatter } from '../utilities/utils';

const Map = ({ mapCountries, center, zoom }) => {
  console.log(mapCountries);
  return (
    <div className='leaflet-container '>
      <div className='leafletMap'>
        <MapContainer center={center} zoom={zoom}>
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {mapCountries.map((mapCountry) => {
            return (
              <CircleMarker
                center={[
                  mapCountry.countryInfo.lat,
                  mapCountry.countryInfo.long,
                ]}
                color={'rgba(64, 224, 208, 0.8)'}
                fillColor={'rgba(64, 224, 208, 0.6)'}
                fillOpacity={0.7}
                radius={Math.sqrt(mapCountry.cases) / 350}
              >
                <Popup>
                  <p className='lead'>{mapCountry.country}</p>
                  <p>New Cases: {numFormatter(mapCountry.todayCases)}</p>
                  <p>Total Cases: {numFormatter(mapCountry.cases)}</p>
                </Popup>
              </CircleMarker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
