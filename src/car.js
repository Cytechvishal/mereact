import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import a from './img/a.webp'
import b from './img/b.jpg'
import c from './img/c.jpg'

export const Car = () => {
    return (
        <div className='caro' style={{ display: 'block' }}>

            <Carousel>
                <Carousel.Item interval={1500}>
                    <img className='myimg' src={a} alt="" />
                    <Carousel.Caption>
                        <h3>Label for first slide</h3>
                        <p>Sample Text for Image One</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img className='myimg' src={b} alt="" />
                    <Carousel.Caption>
                        <h3>Label for second slide</h3>
                        <p>Sample Text for Image Two</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img className='myimg' src={c} alt="" />
                    <Carousel.Caption>
                        <h3>Label for second slide</h3>
                        <p>Sample Text for Image Two</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
