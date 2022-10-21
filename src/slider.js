import Carousel from 'react-bootstrap/Carousel';
import React from 'react';


function Slider(){
  return (
    <Carousel>
      {/* 1 */}
      <Carousel.Item interval={750}>
        <img className="d-block w-100"
        src="https://www.themoviedb.org/t/p/original/4TIRvoMRretogHfr988pdm062Vy.jpg"
        alt="First slide"/>
        <Carousel.Caption>
          <h3>Doctor Stranger</h3>
          <p>Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* 2 */}
      <Carousel.Item interval={750}>
        <img
          className="d-block w-100"
          src="https://www.themoviedb.org/t/p/original/AdyJH8kDm8xT8IKTlgpEC15ny4u.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        <h3>Doctor Stranger</h3>
        <p>Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* 3 */}
      <Carousel.Item interval={750}>
        <img
          className="d-block w-100"
          src="https://www.themoviedb.org/t/p/original/80K8zuNYC2nCwkgzYL8m0btEylp.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        <h3>Doctor Stranger</h3>
        <p>Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* 4 */}
      <Carousel.Item interval={750}>
        <img
          className="d-block w-100"
          src="https://www.themoviedb.org/t/p/original/lv3TXqhpaIxkclIHbhN2MRMOemQ.jpg"
          alt="Fourth slide"
        />
        <Carousel.Caption>
        <h3>Doctor Stranger</h3>
        <p>Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* 5 */}
      <Carousel.Item interval={750}>
        <img
          className="d-block w-100"
          src="https://www.themoviedb.org/t/p/original/3NMTImL2NHi7yAfLp7nDPLWmb2I.jpg"
          alt="Fifth slide"
        />
        <Carousel.Caption>
        <h3>Doctor Stranger</h3>
        <p>Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;