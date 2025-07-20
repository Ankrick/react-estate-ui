import React from 'react'
import "./pin.scss";
import { Popup, Marker } from 'react-leaflet';
import { Link } from 'react-router-dom';


export default function Pin({item}) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
        <Popup>
            <div className="popupContainer">
                <img src={item.img} alt="" />
                <div className="textContainer">
                    <Link to={`/${item.title}`}>{item.title}</Link>
                    <span>{item.bedroom} bedroom</span>
                    <b>$ {item.price}</b>
                </div>
            </div>
        </Popup>
    </Marker>
  )
}
