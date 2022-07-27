import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Products() {
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
            
            
        </div>
    );
}