import React from 'react'
import 'leaflet/dist/leaflet.css';
import './map.scss';
import { MapContainer, TileLayer, Popup, Marker, useMap } from 'react-leaflet';
import Pin from '../pin/Pin';

export default function Map({items}) {


    return (
      <MapContainer center={[51.5074, -0.1278]} zoom={7} scrollWheelZoom={false} className='map'>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {items.map(item => (
            <Pin key={item.id} item={item}/>
          ))}
      </MapContainer>
    )
}
