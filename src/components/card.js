import React from 'react';
import './card.css';

export function Card(props){
 return (
    <div className="card">
        <img src={require(`../img/${props.img}`).default} alt="img" />
        <div className="info">
          <h2>{props.title}</h2>
          <p>{props.subTitle}</p>
        </div>
    </div>
 )
}