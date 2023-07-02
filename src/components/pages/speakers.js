import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';
import './speakers.css';

export default function Speakers(){

  return (
  <><h1 className='speakers'>KEYNOTE SPEAKERS</h1><>
    <div classname='keynotespeakers'>
      <div className='speaker__container'>
        <div className='speaker__wrapper'>
          <ul className='speaker__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Ms.Anshika (SDE, NIT-J, IIM-A)A reasearch scholar with - '
              label='Adventure'
              path='/services' />
            <CardItem
              src='images/img-9.jpg'
              text='Ms.Anshika (SDE, NIT-J, IIM-A)A reasearch scholar with - '
              label='Adventure'
              path='/services' />
            <CardItem
              src='images/img-9.jpg'
              text='Ms.Anshika (SDE, NIT-J, IIM-A)A reasearch scholar with - '
              label='Adventure'
              path='/services' />
          </ul>
        </div>
      </div>
    </div>
  </></>
  )


}