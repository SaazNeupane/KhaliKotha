import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import main from '../media/Main.jpg';
import house from '../media/house.jpg';
import hostel from '../media/Hostel.jpg';
import apartment from '../media/Apartment.jpg';
import office from '../media/office.jpg';
import room from '../media/room.jpg';
import shop from '../media/shop.jpg';

function AdCarousel(props) {
  var items = [
    {
      image: main
    },
    {
      image: house
    },
    {
      image: apartment
    },
    {
      image: hostel
    },
    {
      image: office
    },
    {
      image: room
    },
    {
      image: shop
    }
  ]
  return (
    <Carousel
      autoPlay={true}
      stopAutoPlayOnHover={false}
      interval={5000}
      indicators={true}
      swipe={true}
      navButtonsAlwaysInvisible={true}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <div className='c-item'>
        <img src={props.item.image} alt='try' />
      </div>
    </Paper>
  );
}

export default AdCarousel;