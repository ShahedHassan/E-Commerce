import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon
  } from 'mdb-react-ui-kit';


export default function Home() {
    return (
        <><><div>
            <h1>Tatreez</h1>
            <img src='https://i.imgur.com/BQHxyXU.jpg'></img>
            <p>Tatreez is the Arabic word for traditional textile embroidery commonly worn by the Levant and North African region. Our website aims to provide fair trade middle-eastern goods that support Palestinian families currently displaced across the globe.</p>
        </div><Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src='https://d22dvihj4pfop3.cloudfront.net/wp-content/uploads/sites/106/2019/10/12154106/West-Bank-landscape-resized.jpg'
                        alt="First slide" />
                    <Carousel.Caption>
                        <h3>Explore the scenery</h3>
                        <p>The mountains of the West Bank</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src='https://zamzam.com/blog/wp-content/uploads/2021/08/shutterstock_1745937893.jpg'
                        alt="Second slide" />
                    <Carousel.Caption>
                        <h3>Explore the Religions</h3>
                        <p>Al-Aqsa mosque in Jerusalem</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='http://www.eatpitapita.com/wp-content/uploads/2020/01/Palestine-Customs-Preview.jpg'
                        alt="Third slide" />
                    <Carousel.Caption>
                        <h3>Explore the Culture</h3>
                        <p>
                            Traditionally dressed dancers
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel></><MDBFooter className='bg-dark text-center text-white'>
                <MDBContainer className='p-4 pb-0'>
                    <section className='mb-4'>
                        <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                            <MDBIcon fab icon='facebook-f' />
                        </a>

                        <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                            <MDBIcon fab icon='twitter' />
                        </a>

                        <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                            <MDBIcon fab icon='google' />
                        </a>
                        <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                            <MDBIcon fab icon='instagram' />
                        </a>

                        <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                            <MDBIcon fab icon='linkedin-in' />
                        </a>

                        <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                            <MDBIcon fab icon='github' />
                        </a>
                    </section>
                </MDBContainer>

                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2022 Copyright:
                    <a className='text-white' href='https://github.com/ShahedHassan/E-Commerce.git'>
                        Shade Hassan
                    </a>
                </div>
            </MDBFooter></>
    )
}
