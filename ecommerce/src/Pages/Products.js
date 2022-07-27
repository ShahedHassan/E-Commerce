import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon
  } from 'mdb-react-ui-kit';

export default function Products() {
    <div>
        <h1>Products</h1>
    </div>
    
    const [productlist, setProductlist] = useState("");
    useEffect(()=>{
        const getProducts= async ()=>{
        try {const res = await axios.get("http://localhost:3001/api/get");
    setProductlist(res.data)}catch (err){
        console.log(err)
    }
};
    getProducts();
},[productlist])
    return (
        <div>
            
                {productlist && (productlist.map(product=>{
                return(
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.productImg} />
                    <Card.Body>
                      <Card.Title>{product.productName}</Card.Title>
                      <Card.Text>
                        {product.productDesc}
                      </Card.Text>
                      <Card.Text>
                        {product.productPrice}
                      </Card.Text>
                      <Button variant="primary">Purchase</Button>
                    </Card.Body>
                  </Card>)
                }))}
            
            <MDBFooter className='bg-dark text-center text-white'>
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
    </MDBFooter>
        </div>
    );
}