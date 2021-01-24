import './cards.css';
import React from 'react';
import {Card} from '../../components/card';


  export function Cards(){
    return (
        <div className="container">
          <Card img="1.jpg" title="Gifts for him" subTitle="For Valentin's Day"/>
          <Card img="2.jpg" title="Gifts for him" subTitle="For Valentin's Day"/>
        </div>
    )
  }